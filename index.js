#!/usr/bin/env node
// create-guten-block CLI!
// TODO: sed has issues create the same dir again.
const path = require( 'path' );
const shell = require( 'shelljs' );
const updateNotifier = require( 'update-notifier' );
const execa = require( 'execa' );
const ora = require( 'ora' );
const chalk = require( 'chalk' );
const pkg = require( './package.json' );
const template = path.join( __dirname, '/packages/cgb-scripts/template/' );
const clearConsole = require( './packages/cgb-dev-utils/clearConsole' );

// Update notifier.
updateNotifier( { pkg } ).notify();

// Is there a name provided?
const getBlockName = process.argv[ 2 ] === undefined ? false : process.argv[ 2 ];

// Stop if there's no plugin dir name.
if ( getBlockName === false ) {
	clearConsole();
	console.log(
		'\n❌ ',
		chalk.black.bgRed( ' Kindly, specify the plugin directory: \n' )
	);
	console.log(
		`  ${ chalk.dim( 'create-guten-block' ) } ${ chalk.green( '<plugin-directory>' ) }`
	);
	console.log();
	console.log( chalk.dim( 'For example: \n' ) );
	console.log(
		`  ${ chalk.dim( 'create-guten-block' ) } ${ chalk.green( 'my-block' ) }`
	);
	console.log();
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
	return new Promise( resolve => {
		shell.exec( `mkdir -p ${ blockName }`, () => {
			resolve( true );
		} );
	} );
};

// Copy template to the plugin dir.
const copyTemplateToPluginDir = () => {
	return new Promise( resolve => {
		shell.cd( blockDir );
		shell.cp( '-RL', `${ template }*`, './' );
		shell.cp( '-RL', `${ template }.*`, './' );

		// Replace dynamic content for block name in the code.
		shell.ls( '**/**.*' ).forEach( function( file ) {
			shell.sed( '-i', '<% blockName %>', `${ blockName }`, file );
			shell.sed( '-i', '<% blockName % >', `${ blockName }`, file );
			shell.sed( '-i', '<% blockNamePHPLower %>', `${ blockNamePHPLower }`, file );
			shell.sed( '-i', '<% blockNamePHPLower % >', `${ blockNamePHPLower }`, file );
			shell.sed( '-i', '<% blockNamePHPUpper %>', `${ blockNamePHPUpper }`, file );
			shell.sed( '-i', '<% blockNamePHPUpper % >', `${ blockNamePHPUpper }`, file );
		} );

		resolve();
	} );
};

// NPM install and npm run build to build the block.
const npmInstallBuild = () => {
	return new Promise( async resolve => {
		// Install.
		await execa( 'npm', [ 'install', '--slient' ] );
		// Build.
		// await execa( 'npm', [ 'run', 'build', '--slient' ] );
		resolve();
	} );
};

// Print anything in the start.
const prePrint = () => {
	console.log( '\n' );
	console.log(
		'📦 ',
		chalk.black.bgYellow( ' CGB: Creating a Gutenberg Block...\n' )
	);
};
// Prints next steps.
const printNextSteps = () => {
	console.log(
		'\n✅ ',
		chalk.black.bgGreen( ' All done! Go build some Gutenberg blocks.\n' )
	);
	console.log( '\n\n\n', chalk.black.bgYellow( ' What\'s Next: ' ) );
	console.log(
		chalk.dim( '\n create-guten-block' ),
		'has created a Gutenberg block WordPress plugin called ',
		chalk.dim( `${ blockName }` ),
		' that you can use with zero configurations and benefit from ESNext (i.e. ES6/7/8), React.js, JSX, Webpack, ESLint, etc.\n'
	);
	console.log(
		'\n👉 ',
		' Go to your block folder',
		chalk.black.bgWhite( ` cd ${ blockName } ` ),
		'to start developing your block.'
	);
	console.log(
		'\n👉 ',
		' Use',
		chalk.black.bgWhite( ' npm run dev ' ),
		'to build and watch your block.'
	);
	console.log(
		'\n👉 ',
		' Use',
		chalk.black.bgWhite( ' npm run build ' ),
		'to build production code for your block.\n'
	);
};

// Runs all the functions with async/await.
const run = async() => {
	await prePrint();

	if ( ! blockName ) {
		spinner.fail( 'FAILED: Provide a plugin name in the following format: ' );
		console.log( chalk.dim( '\ncreate-guten-block' ), 'plugin-name \n' );
		return false;
	}

	spinner.start(
		`1. Creating the plugin directory called → ${ chalk.black.bgWhite(
			` ${ blockName } `
		) }`
	);
	await createPluginDir();
	spinner.succeed();

	spinner.start( '2. Building plugin files in the block directory...' );
	await copyTemplateToPluginDir();
	spinner.succeed();

	spinner.start( '3. Installing node packages & building the block...' );
	await npmInstallBuild();
	spinner.succeed();

	await printNextSteps();
};

console.clear();

// Run the CLI.
run();
