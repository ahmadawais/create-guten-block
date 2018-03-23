/**
 * Handle if there's block name is not valid.
 */

'use strict';

const chalk = require( 'chalk' );

module.exports = () => {
	// Stop if given block name is not valid.
	console.log(
		'\n❌ ',
		chalk.black.bgRed( ' Please provide a valid block name: \n' )
	);
	console.log(
		`  ${ chalk.dim( 'Block name must include only alphanumeric characters, numbers, dashes.' ) }`
	);
	console.log(
		`  ${ chalk.dim( 'Block name must start with a letter.' ) }`
	);
	process.exit( 1 );
};
