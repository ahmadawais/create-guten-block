#!/usr/bin/env node
// create-guten-block CLI!

'use strict';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on( 'unhandledRejection', err => {
	throw err;
} );

const ora = require( 'ora' );
const path = require( 'path' );
const chalk = require( 'chalk' );
const fs = require( 'fs-extra' );
const execa = require( 'execa' );
const shell = require( 'shelljs' );
const commander = require( 'commander' );
const directoryExists = require( 'directory-exists' );
const packageJson = require( './package.json' );

/**
 * Cross platform clear console.
 */
const clearConsole = () => {
	process.stdout.write(
		process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H'
	);
};

// Commander.js program.
// The Project name we're building.
// let projectName;
const program = new commander.Command( packageJson.name )
	.version( packageJson.version, '-v, --version' )
	.description(
		`CGB ${ chalk.dim(
			'(create-guten-block)'
		) } is a Zero-Config #OCJS for builing WordPress Gutenberg Blocks.`
	)
	.arguments( '<block-name>' )
	.usage( `${ chalk.green( '<block-name>' ) }` )
	// .action(name => {
	// 	projectName = name;
	// })
	.allowUnknownOption()
	.on( '--help', () => {
		console.log( `\n    Only ${ chalk.green( '<block-name>' ) } is required.\n` );
	} )
	.parse( process.argv );

/**
 * Handle if there's no block name.
 *
 * @param {string} theThirdArg Third arg from node process.
 * @return {string} The block name.
 */
const getBlockName = theThirdArg => {
	// Is there a plugin-name provided as the third argument?
	const isBlockName = theThirdArg === undefined ? false : theThirdArg;

	// Stop if there's no block name to create the plugin dir.
	if ( ! isBlockName ) {
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
	const blockName = isBlockName
		.toLowerCase()
		.split( ' ' )
		.join( '-' );

	return blockName;
};

/**
 * Get block directory.
 *
 * @param {string} blockName The block name.
 * @return {string} The block directory.
 */
const getBlockDir = blockName => {
	return `${ process.cwd() }/${ blockName }`;
};

/**
 * Print anything in the start.
 *
 * @param {string} blockName The block name.
 * @param  {string} blockDir The block directory.
 */
const prePrint = ( blockName, blockDir ) => {
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

/**
 * Create Plugin Directory.
 *
 * @param {string} blockName The block name.
 * @return {promise} promise resolved.
 */
const createPluginDir = blockName => {
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

/**
 * NPM install cgb-scripts.
 *
 * - Build package.json file.
 * - NPM install the plugin block.
 *
 * @param {string} blockName The block name.
 * @param  {string} blockDir The block directory.
 * @return {promise} promise resolved.
 */
const npmInstallScripts = ( blockName, blockDir ) => {
	shell.cd( blockDir );
	shell.touch( 'package.json' );

	// Build a package.json file since npm install needs it.
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

	// Write the package.json file.
	fs.writeFileSync(
		path.join( process.cwd(), 'package.json' ),
		JSON.stringify( appPackage, null, 2 ) + '\n'
	);

	// Install latest exact version of cgb-scripts.
	return new Promise( async resolve => {
		await execa( 'npm', [
			'install',
			'cgb-scripts',
			'--save',
			'--save-exact',
			'--slient',
		] );
		resolve( true );
	} );
};

/**
 * Initialize the block plugin.
 *
 * @param {string} blockName The block name.
 * @param  {string} blockDir The block directory.
 */
const initBlock = ( blockName, blockDir ) => {
	// Root path.
	const root = process.cwd();

	// Get path to cgb-scripts.
	const scriptsPath = path.resolve(
		root,
		'node_modules',
		'cgb-scripts',
		'scripts',
		'init.js'
	);

	// Require cgb-scripts.
	const init = require( scriptsPath );

	// Run the initializer function.
	init( root, blockName, blockDir );
};

/**
 * Run the entire program.
 *
 * Runs all the functions with async/await.
 */
const run = async() => {
	// 0. Clear the console.
	clearConsole();

	// 0. Update notifier.
	const updateNotifier = require( 'update-notifier' );
	updateNotifier( { pkg: packageJson } ).notify();

	// 1. Get the block name and direcotry by sending in the third argument.
	const blockName = await getBlockName( process.argv[ 2 ] );
	const blockDir = await getBlockDir( blockName );

	// 2. Pre print.
	await prePrint( blockName, blockDir );

	// 3. Create the plugin directory.
	// Init the spinner.
	const spinner = new ora( { text: '', enabled: true } );
	spinner.start(
		`1. Creating the plugin directory called → ${ chalk.black.bgWhite(
			` ${ blockName } `
		) }`
	);
	await createPluginDir( blockName );
	spinner.succeed();

	// 4. NPM install cgb-scripts.
	spinner.start( '2. Installing npm packages...' );
	await npmInstallScripts( blockName, blockDir );
	spinner.succeed();

	// 5. Initialize the block.
	spinner.start( '3. Creating plugin files...' );
	await initBlock( blockName, blockDir );
	spinner.succeed();
};

// Run the CLI.
run();
