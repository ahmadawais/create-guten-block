/**
 * Handle if there's no block name.
 *
 * @param {string} theThirdArg Third arg from node process.
 * @return {string} The block name.
 */

'use strict';

const chalk = require( 'chalk' );

module.exports = theThirdArg => {
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
