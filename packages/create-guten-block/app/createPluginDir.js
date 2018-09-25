/**
 * Create Plugin Directory.
 *
 * @param {string} blockName The block name.
 * @return {promise} promise resolved.
 */

'use strict';

const chalk = require( 'chalk' );
const shell = require( 'shelljs' );
const clearConsole = require( './consoleClear' );
const directoryExists = require( 'directory-exists' );
const createGitignore = require( './createGitignore' );

module.exports = ( blockName, blockDir ) => {
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
		return new Promise( async resolve => {
			// Where user is at the moment.
			shell.exec( `mkdir -p ${ blockName }` );
			await createGitignore( blockDir );
			resolve(true);
		} );
	}
};
