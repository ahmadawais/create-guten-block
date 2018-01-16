#!/usr/bin/env node
// create-guten-block CLI!
const ora = require( 'ora' );
const path = require( 'path' );
const chalk = require( 'chalk' );
const fs = require( 'fs-extra' );
const execa = require( 'execa' );
const shell = require( 'shelljs' );
const directoryExists = require( 'directory-exists' );

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on( 'unhandledRejection', err => {
	throw err;
} );

/**
 * Cross platform clear console.
 */
function clearConsole() {
	process.stdout.write(
		process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H'
	);
}

// Is there a plugin-name provided as the third argument?
const theThirdArgument = process.argv[ 2 ];
const getBlockName = theThirdArgument === undefined ? false : theThirdArgument;

// Stop if there's no plugin dir name.
if ( getBlockName === false ) {
	clearConsole();
	console.log(
		'\n❌ ',
		chalk.black.bgRed( ' You forgot to specify a block name: \n' )
	);
	console.log(
		`  ${ chalk.dim( 'create-guten-block' ) } ${ chalk.green( '<block-name>' ) }`
	);
	console.log( chalk.dim( '\nFor example: \n' ) );
	console.log(
		`  ${ chalk.dim( 'create-guten-block' ) } ${ chalk.green( 'my-block' ) }\n`
	);
	process.exit( 1 );
}

// Create block name from 2nd Argument.
const blockName = getBlockName
	.toLowerCase()
	.split( ' ' )
	.join( '-' );

// Block plugin dir.
const blockDir = `${ process.cwd() }/${ blockName }`;

// Create block name for PHP functions.
const blockNamePHPLower = blockName
	.toLowerCase()
	.split( '-' )
	.join( '_' );

// Create block name for PHP functions.
const blockNamePHPUpper = blockNamePHPLower.toUpperCase();

// Init the spinner.
const spinner = new ora( {
	text: '',
	enabled: true,
} );

// Create Plugin Directory.
const createPluginDir = () => {
	// Check if the plugin dir is already presnet.
	const dirAlreadyExist = directoryExists.sync( `./${ blockName }` );

	// If exists then exit.
	if ( dirAlreadyExist ) {
		clearConsole();
		console.log(
			'\n❌ ',
			chalk.black.bgRed(
				` A directory with this name already exists: ${ blockName } \n`
			)
		);

		console.log(
			`  ${ chalk.dim(
				'Please move or delete it (maybe make a copy for backup) and run this command again.'
			) }`
		);
		console.log(
			`  ${ chalk.dim( 'Or provide a different name for your block.' ) }`
		);
		console.log( chalk.dim( '\nFor example: \n' ) );
		console.log(
			`  ${ chalk.dim( 'create-guten-block' ) } ${ chalk.green( 'new-block-name' ) }\n`
		);
		process.exit( 1 );
	} else {
		return new Promise( resolve => {
			// Where user is at the moment.
			shell.exec( `mkdir -p ${ blockName }`, () => {
				resolve( true );
			} );
		} );
	}
};

// NPM install and npm run build to build the block.
const npmInstallScripts = () => {
	shell.cd( blockDir );
	shell.touch( 'package.json' );

	// Write a package.json file since npm install needs it.
	const appPackage = {
		name: `${ blockName }-cgb-guten-block`,
		version: '1.0.0',
		private: true,
		scripts: {
			start: 'cgb-scripts start',
			build: 'cgb-scripts build',
			eject: 'cgb-scripts eject',
		},
	};

	// Write the file.
	fs.writeFileSync(
		path.join( process.cwd(), 'package.json' ),
		JSON.stringify( appPackage, null, 2 ) + '\n'
	);

	// Install latest cgb-scripts.
	return new Promise( async resolve => {
		await execa( 'npm', [ 'install', 'cgb-scripts', '--save', '--slient' ] );
		resolve( true );
	} );
};

// Copy template to the plugin dir.
const copyTemplateFiles = () => {
	// Since we ran npm install cgb-scripts we have it in the node_modules now.
	const template = path.resolve(
		blockDir,
		'./node_modules/cgb-scripts/template'
	);

	return new Promise( resolve => {
		shell.cd( blockDir );
		// Create a tmp folder to avoid globbing through node_modules.
		shell.exec( 'mkdir -p ./tmp' );
		shell.cp( '-RL', `${ template }/*`, './tmp' );
		shell.cp( '-RL', `${ template }/.*`, './tmp' );

		// Replace dynamic content for block name in the code.
		shell.ls( 'tmp/**/**.*' ).forEach( function( file ) {
			shell.sed( '-i', '<% blockName %>', `${ blockName }`, file );
			shell.sed( '-i', '<% blockName % >', `${ blockName }`, file );
			shell.sed( '-i', '<% blockNamePHPLower %>', `${ blockNamePHPLower }`, file );
			shell.sed( '-i', '<% blockNamePHPLower % >', `${ blockNamePHPLower }`, file );
			shell.sed( '-i', '<% blockNamePHPUpper %>', `${ blockNamePHPUpper }`, file );
			shell.sed( '-i', '<% blockNamePHPUpper % >', `${ blockNamePHPUpper }`, file );
		} );

		// Move all processed files back to the main folder.
		shell.cp( '-RL', `${ blockDir }/tmp/*`, './' );
		shell.cp( '-RL', `${ blockDir }/tmp/.*`, './' );

		// Thank you, tmp — you've been a useful friend.
		shell.rm( '-rf', './tmp' );
		resolve( true );
	} );
};

// Print anything in the start.
const prePrint = () => {
	console.log( '\n' );
	console.log(
		'📦 ',
		chalk.black.bgYellow(
			` Creating a WP Gutenberg Block plguin called: ${ chalk.bgGreen(
				` ${ blockName } `
			) }\n`
		),
		chalk.dim( `\n In the directory: ${ blockDir }\n` ),
		chalk.dim( 'This might take a couple of minutes.\n' )
	);
};

// Prints next steps.
const printNextSteps = () => {
	console.log(
		'\n\n✅ ',
		chalk.black.bgGreen( ' All done! Go build some Gutenberg blocks. \n' )
	);
	console.log(
		`CGB ${ chalk.dim(
			'(create-guten-block)'
		) } has created a WordPress plugin called `,
		chalk.dim( blockName ),
		' that you can use with zero configurations to build Gutenberg blocks with ESNext (i.e. ES6/7/8), React.js, JSX, Webpack, ESLint, etc.'
	);
	console.log(
		`\nCreated ${ chalk.dim( blockName ) } plugin at: ${ chalk.dim( blockDir ) }`,
		'\nInside that directory, you can run several commands:\n'
	);

	console.log(
		'\n👉 ',
		' Type',
		chalk.black.bgWhite( ' npm start ' ),
		'to compile and develop your block.'
	);
	console.log(
		'\n👉 ',
		' Type',
		chalk.black.bgWhite( ' npm run build ' ),
		'to build production code for your block.\n'
	);

	console.log( '\n\n', chalk.black.bgGreen( ' Get Started → \n' ) );
	console.log( ' We suggest that you begin by typing: \n' );
	console.log(
		`  ${ chalk.green( 'cd' ) } ${ blockName }`,
		'\n',
		` ${ chalk.green( 'npm' ) } start`,
		'\n\n'
	);
};

// Runs all the functions with async/await.
const run = async() => {
	await prePrint();

	spinner.start(
		`1. Creating the plugin directory called → ${ chalk.black.bgWhite(
			` ${ blockName } `
		) }`
	);
	await createPluginDir();
	spinner.succeed();

	spinner.start( '2. Installing npm packages...' );
	await npmInstallScripts();
	spinner.succeed();

	spinner.start( '3. Creating plugin files...' );
	await copyTemplateFiles();
	spinner.succeed();

	await printNextSteps();
};

// console.clear();
clearConsole();

// Update notifier.
const updateNotifier = require( 'update-notifier' );
const pkg = require( './package.json' );
updateNotifier( { pkg } ).notify();

// Run the CLI.
run();
