/**
 * Eject
 *
 * The create-guten-block CLI ejects here.
 */
'use strict';

// @remove-file-on-eject

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on( 'unhandledRejection', err => {
	throw err;
} );

const path = require( 'path' );
const fs = require( 'fs-extra' );
const execSync = require( 'child_process' ).execSync;
const chalk = require( 'chalk' );
const paths = require( '../config/paths' );
const inquirer = require( 'inquirer' );
const spawnSync = require( 'cross-spawn' ).sync;
const resolvePkg = require( 'resolve-pkg' );
const cgbDevUtilsPath = resolvePkg( 'cgb-dev-utils', {
	cwd: __dirname,
} );
const clearConsole = require( cgbDevUtilsPath + '/clearConsole' );

const green = chalk.green;
const cyan = chalk.cyan;

clearConsole();

function getGitStatus() {
	try {
		const stdout = execSync( 'git status --porcelain', {
			stdio: [ 'pipe', 'pipe', 'ignore' ],
		} ).toString();
		return stdout.trim();
	} catch ( e ) {
		return '';
	}
}

console.log( '\n ', chalk.black.bgGreen( ' Getting started to eject. \n' ) );

inquirer
	.prompt( {
		type: 'confirm',
		name: 'shouldEject',
		message: 'Are you sure you want to eject? This action is permanent.',
		default: false,
	} )
	.then( answer => {
		if ( ! answer.shouldEject ) {
			console.log(
				'\n\n— ' + chalk.black.bgWhite( ' Close one! Eject aborted. ' ),
				'\n\n'
			);
			return;
		}

		const gitStatus = getGitStatus();
		if ( gitStatus ) {
			console.error(
				'\n\n' +
					chalk.black.bgRed(
						' This git repository has untracked files or uncommitted changes: '
					) +
					'\n\n' +
					gitStatus
						.split( '\n' )
						.map( line => line.match( / .*/g )[ 0 ].trim() )
						.join( '\n' ) +
					'\n\n' +
					chalk.black.bgRed(
						' Remove untracked files, stash or commit any changes, and try again. '
					),
				'\n\n'
			);
			process.exit( 1 );
		}

		// Checks passed now let's start ejecting.
		console.log( '\n\n' + chalk.black.bgGreen( '⏳ Ejecting...' ), '\n\n' );

		const ownPath = paths.ownPath;
		const appPath = paths.appPath;

		function verifyAbsent( file ) {
			if ( fs.existsSync( path.join( appPath, file ) ) ) {
				console.error(
					'\n\n' +
						`\`${ chalk.red(
							file
						) }\` already exists in your plugin's folder. We cannot ` +
						'continue as you would lose all the changes in that file or directory. ' +
						'Please move or delete it (maybe make a copy for backup) and run this ' +
						'command again.'
				);
				process.exit( 1 );
			}
		}

		// Folders to be moved.
		const folders = [ 'config', 'scripts' ];

		// Make shallow array of files paths.
		const files = folders.reduce( ( files, folder ) => {
			return files.concat(
				fs
					.readdirSync( path.join( ownPath, folder ) )
					// Set full path.
					.map( file => path.join( ownPath, folder, file ) )
					// Omit dirs from file list.
					.filter( file => fs.lstatSync( file ).isFile() )
			);
		}, [] );

		// Ensure that the app folder is clean and we won't override any files
		folders.forEach( verifyAbsent );
		files.forEach( verifyAbsent );

		console.log(
			`\n\n 👉 ${ chalk.black.bgYellow( ' Copying files to your plugin... ' ) }
		  	${ chalk.dim( 'In the directory: ', appPath ) }`
		);

		// Go through all folders to build paths.
		folders.forEach( folder => {
			fs.mkdirSync( path.join( appPath, folder ) );
		} );

		// Read all files and skip content that needs to be skipped.
		files.forEach( file => {
			let content = fs.readFileSync( file, 'utf8' );

			// Skip flagged files.
			if ( content.match( /\/\/ @remove-file-on-eject/ ) ) {
				return;
			}
			content =
				content
					// Remove dead code from .js files on eject.
					.replace(
						/\/\/ @remove-on-eject-begin([\s\S]*?)\/\/ @remove-on-eject-end/gm,
						''
					)
					// Remove dead code from .applescript files on eject.
					.replace(
						/-- @remove-on-eject-begin([\s\S]*?)-- @remove-on-eject-end/gm,
						''
					)
					.trim() + '\n';
			console.log(
				`  ➕ Adding ${ green( file.replace( ownPath, '' ) ) } to your plugin.`
			);
			fs.writeFileSync( file.replace( ownPath, appPath ), content );
		} );

		console.log();

		// Select cgb-scripts/package.json file.
		const ownPackage = require( path.join( ownPath, 'package.json' ) );

		// Assume a file called package.json file in current folder.
		const appPackage = require( path.join( appPath, 'package.json' ) );

		console.log(
			`\n\n 👉 ${ chalk.black.bgYellow( ' Updating the dependencies... ' ) }`
		);

		// Name: cgb-scripts.
		const ownPackageName = ownPackage.name;

		// Del cgb-scripts from devDep if there.
		if ( appPackage.devDependencies ) {
			// We used to put cgb-scripts in devDependencies.
			if ( appPackage.devDependencies[ ownPackageName ] ) {
				console.log(
					`  ➖ Removing ${ cyan( ownPackageName ) } from devDependencies.`
				);
				delete appPackage.devDependencies[ ownPackageName ];
			}
		}

		// Dependencies.
		appPackage.dependencies = appPackage.dependencies || {};
		if ( appPackage.dependencies[ ownPackageName ] ) {
			// Del cgb-scripts from dependencies now.
			console.log( `  ➖ Removing ${ cyan( ownPackageName ) } from dependencies.` );
			delete appPackage.dependencies[ ownPackageName ];
		}

		// Add deps to appPackage.
		Object.keys( ownPackage.dependencies ).forEach( key => {
			// // For some reason optionalDependencies end up in dependencies after install.
			// if ( ownPackage.optionalDependencies[ key ] ) {
			// 	return;
			// }
			console.log( `  ➕ Adding ${ green( key ) } to dependencies.` );
			appPackage.dependencies[ key ] = ownPackage.dependencies[ key ];
		} );

		// Sort the dependencies because we are that good :).
		const unsortedDependencies = appPackage.dependencies;
		appPackage.dependencies = {};
		Object.keys( unsortedDependencies )
			.sort()
			.forEach( key => {
				appPackage.dependencies[ key ] = unsortedDependencies[ key ];
			} );
		console.log( `  ♻ ${ green( 'Sorting... ' ) }` );
		console.log();

		// Update the scripts.
		console.log( `\n\n 👉 ${ chalk.black.bgYellow( ' Updating the scripts... ' ) }` );

		// Del the eject script.
		delete appPackage.scripts.eject;

		// Build the scripts.
		Object.keys( appPackage.scripts ).forEach( key => {
			Object.keys( ownPackage.bin ).forEach( binKey => {
				const regex = new RegExp( binKey + ' (\\w+)', 'g' );
				if ( ! regex.test( appPackage.scripts[ key ] ) ) {
					return;
				}
				appPackage.scripts[ key ] = appPackage.scripts[ key ].replace(
					regex,
					'node scripts/$1.js'
				);
				console.log(
					`  ♻ Replacing ${ cyan( `"${ binKey } ${ key }"` ) } with ${ green(
						`"node scripts/${ key }.js"`
					) }`
				);
			} );
		} );

		console.log();
		console.log(
			`\n\n 👉 ${ chalk.black.bgYellow( ' Configuring package.json... ' ) }`
		);

		// Add Babel config.
		console.log( `  ➕ Adding ${ green( 'Babel' ) } preset.` );
		appPackage.babel = {
			presets: [
				[
					'env',
					{
						modules: false,
						targets: {
							browsers: [
								'last 2 Chrome versions',
								'last 2 Firefox versions',
								'last 2 Safari versions',
								'last 2 iOS versions',
								'last 1 Android version',
								'last 1 ChromeAndroid version',
								'ie 11',
							],
						},
					},
				],
			],
			plugins: [
				[ 'transform-object-rest-spread' ],
				[
					'transform-object-rest-spread',
					{
						useBuiltIns: true,
					},
				],
				[
					'transform-react-jsx',
					{
						pragma: 'wp.element.createElement',
					},
				],
				[
					'transform-runtime',
					{
						helpers: false,
						polyfill: false,
						regenerator: true,
					},
				],
			],
		};

		// // Add ESlint config — already there.
		// console.log( `  Adding ${ cyan( 'ESLint' ) } configuration` );

		fs.writeFileSync(
			path.join( appPath, 'package.json' ),
			JSON.stringify( appPackage, null, 2 ) + '\n'
		);
		console.log();

		// "Don't destroy what isn't ours".
		if ( ownPath.indexOf( appPath ) === 0 ) {
			try {
				// Remove cgb-scripts and cgb-scripts binaries from app node_modules.
				Object.keys( ownPackage.bin ).forEach( binKey => {
					fs.removeSync( path.join( appPath, 'node_modules', '.bin', binKey ) );
				} );
				fs.removeSync( ownPath );
			} catch ( e ) {
				// It's not essential that this succeeds.
			}
		}

		if ( fs.existsSync( paths.yarnLockFile ) ) {
			// TODO: this is disabled for three reasons.
			//
			// 1. It produces garbage warnings on Windows on some systems:
			//    https://github.com/facebookincubator/create-react-app/issues/2030
			//
			// 2. For the above reason, it breaks Windows CI:
			//    https://github.com/facebookincubator/create-react-app/issues/2624
			//
			// 3. It is wrong anyway: re-running yarn will respect the lockfile
			//    rather than package.json we just updated. Instead we should have
			//    updated the lockfile. So we might as well not do it while it's broken.
			//    https://github.com/facebookincubator/create-react-app/issues/2627
			//
			// console.log(cyan('Running yarn...'));
			// spawnSync('yarnpkg', [], { stdio: 'inherit' });
		} else {
			console.log(
				`\n\n 👉 ${ chalk.black.bgYellow( ' Running npm install... ' ) }`
			);
			spawnSync( 'npm', [ 'install', '--loglevel', 'error' ], {
				stdio: 'inherit',
			} );
		}
		console.log( '\n\n✅ ', chalk.black.bgGreen( ' Ejected successfully! \n' ) );
		console.log();

		console.log(
			green( 'Please consider sharing why you ejected in this survey:' )
		);
		console.log( green( '  https://goo.gl/forms/T901kvHr1kNsJGaJ3 ' ) );
		console.log();
	} );
