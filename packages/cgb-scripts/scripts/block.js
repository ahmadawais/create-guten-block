/**
 * New Block plugin intializer
 *
 * TODO
 * - Work in progress
 * - First pass
 *
 * - Copies the templates.
 * - Prints final instructions.
 */
// @remove-file-on-eject

'use strict';

const ora = require( 'ora' );
const path = require( 'path' );
const fs = require( 'fs-extra' );
const chalk = require( 'chalk' );
const shell = require( 'shelljs' );

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on( 'unhandledRejection', err => {
	throw err;
} );

/**
 * Copy template to the plugin dir.
 *
 * @param {string} blockName The block name.
 * @param  {string} blockDir The block directory.
 * @param  {string} blockNamePHPLower The block name for PHP files in lowercase.
 * @param  {string} blockNamePHPUpper The block name for PHP files in uppercase.
 */
const copyTemplateFiles = (
	blockName,
	blockDir,
	blockNamePHPLower,
	blockNamePHPUpper
) => {
	// Since we ran npm install cgb-scripts we have it in the node_modules now.
	const template = path.join(
		blockDir,
		'node_modules',
		'cgb-scripts',
		'template'
	);

	const templatePromise = new Promise( resolve => {
		shell.cd( blockDir );

		// Copy the files into the plugin blockDir.
		if ( fs.existsSync( template ) ) {
			fs.copySync( template, blockDir );
		} else {
			console.error(
				`Could not locate supplied template: ${ chalk.green( template ) }`
			);
			return;
		}

		// Build a list of files we added.
		const files = [ ...shell.ls( blockDir + '/src/block/**.*' ) ];

		// Replace dynamic content for block name in the code.
		files.forEach( function( file ) {
			shell.sed( '-i', '<% blockName %>', `${ blockName }`, file );
			shell.sed( '-i', '<% blockName % >', `${ blockName }`, file );
			shell.sed( '-i', '<% blockNamePHPLower %>', `${ blockNamePHPLower }`, file );
			shell.sed( '-i', '<% blockNamePHPLower % >', `${ blockNamePHPLower }`, file );
			shell.sed( '-i', '<% blockNamePHPUpper %>', `${ blockNamePHPUpper }`, file );
			shell.sed( '-i', '<% blockNamePHPUpper % >', `${ blockNamePHPUpper }`, file );
		} );

		resolve( true );
	} );

	templatePromise.catch( err => {
		console.log( 'ERROR on templatePromise →', err );
		process.exit( 1 );
	} );
};

/**
 * Prints next steps.
 *
 * @param {string} blockName The block name.
 * @param  {string} blockDir The block directory.
 */
const printNextSteps = blockName => {
	console.log(
		'\n\n✅ ',
		chalk.black.bgGreen( ` Created a new block at .src/${ blockName }. ` ),
		'\n\n'
	);
};

/**
 * Initializer function.
 *
 * - Copy templates to the appPath
 * - Print final instructions.
 *
 * @param {string} root The process.cwd() of where the cgb ran.
 * @param {string} blockName The block name.
 * @param  {string} blockDir The block directory.
 */
// Define blockName
// Define blockDir
module.exports = async( root, blockName, blockDir ) => {
	// 0. Create block name for PHP functions.
	const blockNamePHPLower = blockName
		.toLowerCase()
		.split( '-' )
		.join( '_' );

	// 0. Create block name for PHP functions.
	const blockNamePHPUpper = blockNamePHPLower.toUpperCase();

	// 1.Copy template to the plugin dir.
	// Init the spinner.
	const spinner = new ora( { text: '' } );
	spinner.start( 'Creating a new block in ./src/...' );
	await copyTemplateFiles(
		blockName,
		blockDir,
		blockNamePHPLower,
		blockNamePHPUpper
	);
	spinner.succeed();

	// 2. Prints next steps.
	await printNextSteps( blockName );
};
