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
		`${ chalk.dim(
			'⚠️  A block name can only contain lowercase alphanumeric characters and dashes.'
		) }`
	);
	console.log( `${ chalk.dim( '⚠️  A block name must begin with a letter.' ) }` );
	console.log();
	process.exit( 1 );
};
