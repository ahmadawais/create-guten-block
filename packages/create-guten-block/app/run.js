/**
 * Run the entire program.
 *
 * Runs all the functions with async/await.
 */

'use strict';

const ora = require( 'ora' );
const chalk = require( 'chalk' );
const cli = require( './cli' );
const prePrint = require( './prePrint' );
const initBlock = require( './initBlock' );
const getBlockDir = require( './getBlockDir' );
const clearConsole = require( './consoleClear' );
const updateNotifier = require( './updateNotifier' );
const createPluginDir = require( './createPluginDir' );
const npmInstallScripts = require( './npmInstallScripts' );

module.exports = async() => {
	clearConsole();

	// 0. Update notifier.
	updateNotifier();

	// 1. Set the CLI and get the blockName.
	const { blockName, isCanary } = cli();

	// 1.1 If we are testing in dev mode then notify.
	if ( isCanary ) {
		console.log( chalk.dim( '\n ⚠️ THIS IS THE CANARY MODE FOR DEV TESTING\n' ) );
	}

	// 2. Build the block directory path.
	const blockDir = await getBlockDir( blockName );

	// 2. Pre print.
	await prePrint( blockName, blockDir );

	// 3. Create the plugin directory.
	// Init the spinner.
	const spinner = ora( { text: '' } );

	spinner.start( `1. Creating the plugin directory called → ${ chalk.black.bgWhite( ` ${ blockName } ` ) }` );
	await createPluginDir( blockName, blockDir );
	spinner.succeed();

	// 4. NPM install cgb-scripts.
	spinner.start( '2. Installing npm packages...' );
	await npmInstallScripts( blockName, blockDir, isCanary );
	spinner.succeed();

	// 5. Initialize the block.
	await initBlock( blockName, blockDir );
};
