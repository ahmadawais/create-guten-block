/**
 * Run the entire program.
 *
 * Runs all the functions with async/await.
 */

const ora = require( 'ora' );
const chalk = require( 'chalk' );
const clearConsole = require( './consoleClear' );
const cli = require( './cli' );
const getBlockName = require( './getBlockName' );
const getBlockDir = require( './getBlockDir' );
const prePrint = require( './prePrint' );
const createPluginDir = require( './createPluginDir' );
const npmInstallScripts = require( './npmInstallScripts' );
const initBlock = require( './initBlock' );
const updateNotifier = require( './updateNotifier' );

module.exports = async() => {
	// 0. Set the CLI.
	cli();

	// 0. Clear the console.
	clearConsole();

	// 0. Update notifier.
	updateNotifier();

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
	await initBlock( blockName, blockDir );
};
