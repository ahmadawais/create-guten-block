#!/usr/bin/env node
const path = require( 'path' );
const shell = require( 'shelljs' );
const updateNotifier = require( 'update-notifier' );
const execa = require( 'execa' );
const ora = require( 'ora' );
const chalk = require( 'chalk' );
const pkg = require( './package.json' );
const files = path.join( __dirname, '/files/' );
const appName = process.argv[ 2 ];
const appDirectory = `${ process.cwd() }/${ appName }`;

// Update notifier.
updateNotifier( { pkg } ).notify();

// Init the spinner.
const spinner = new ora( {
	text: '',
	enabled: true,
} );

// Create Plugin Directory.
const createPluginDir = () => {
	return new Promise( resolve => {
		shell.exec( `mkdir -p ${ appName }`, () => {
			resolve( true );
		} );
	} );
};

// Copy files to the plugin dir.
const copyFilestoPluginDir = () => {
	return new Promise( resolve => {
		shell.cd( appDirectory );
		shell.cp( '-RL', `${ files }*`, './' );
		shell.cp( '-RL', `${ files }.*`, './' );
		resolve();
	} );
};

// NPM install and npm run build to build the block.
const npmInstallBuild = () => {
	return new Promise( async resolve => {
		// Install.
		await execa( 'npm', [ 'install', '--slient' ] );
		// Build.
		await execa( 'npm', [ 'run', 'build', '--slient' ] );
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
		'has created a Gutenberg block WordPress plugin with ESNext, Webpack, ESLint, and basic JavaScript + CSS...\n'
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

	if ( ! appName ) {
		spinner.fail( 'FAILED: Provide a plugin name in the following format: ' );
		console.log( chalk.dim( '\ncreate-guten-block' ), 'plugin-name \n' );
		return false;
	}

	spinner.start(
		`1. Creating the plugin directory called → ${ chalk.black.bgWhite(
			` ${ appName } `
		) }`
	);
	await createPluginDir();
	spinner.succeed();

	spinner.start( '2. Copying files to the directory...' );
	await copyFilestoPluginDir();
	spinner.succeed();

	spinner.start( '3. Installing node packages & building the block...' );
	await npmInstallBuild();
	spinner.succeed();

	await printNextSteps();
};

// eslint-disable-next-line
console.clear();

// Run the CLI.
run();
