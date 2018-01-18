/**
 * Commande.js CLI
 *
 * Set the options for -v --help etc.
 */

'use strict';

const chalk = require( 'chalk' );
const commander = require( 'commander' );
const packageJson = require( '../package.json' );

// Commander.js program.
module.exports = () => {
	new commander.Command( packageJson.name )
		.version( packageJson.version, '-v, --version' )
		.description(
			`CGB ${ chalk.dim(
				'(create-guten-block)'
			) } is a Zero-Config #OCJS for builing WordPress Gutenberg Blocks.`
		)
		.arguments( '<block-name>' )
		.usage( `${ chalk.green( '<block-name>' ) }` )
		// .action(name => {
		// 	projectName = name;
		// })
		.allowUnknownOption()
		.on( '--help', () => {
			console.log( `\n    Only ${ chalk.green( '<block-name>' ) } is required.\n` );
		} )
		.parse( process.argv );
};
