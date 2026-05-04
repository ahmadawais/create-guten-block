/**
 * Handle if there's no block name.
 */

'use strict';

const chalk = require( 'chalk' );

module.exports = () => {
	// Stop if there's no block name to create the plugin dir.
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
};
