/**
 * Print anything in the start.
 *
 * @param {string} blockName The block name.
 * @param  {string} blockDir The block directory.
 */

'use strict';

const chalk = require( 'chalk' );

module.exports = ( blockName, blockDir ) => {
	console.log( '\n' );
	console.log(
		'📦 ',
		chalk.black.bgYellow(
			` Creating a WP Gutenberg Block plguin called: ${ chalk.bgGreen(
				` ${ blockName } `
			) }\n`
		),
		chalk.dim( `\n In the directory: ${ blockDir }\n` ),
		chalk.dim( 'This might take a couple of minutes.\n' )
	);
};
