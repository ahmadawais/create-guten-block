/**
 * Commande.js CLI
 *
 * Set the options for -v --help etc.
 */

'use strict';

const chalk = require( 'chalk' );
const commander = require( 'commander' );
const maybeEnvInfo = require( './envInfo' );
const noBlockName = require( './noBlockName' );
const packageJson = require( '../package.json' );

// Commander.js program.
module.exports = () => {
	// Block's name
	let blockName;

	const program = new commander.Command( packageJson.name )
		.arguments( '<block-name>' )
		.usage( `${ chalk.green( '<block-name>' ) }` )
		.action( name => {
			blockName = name;
		} )
		.allowUnknownOption()
		.on( '--help', () => {
			console.log( `\n    Only ${ chalk.green( '<block-name>' ) } is required.\n` );
		} )
		.option( '-d, --debug', 'Prints envinfo for debugging' )
		.description(
			`CGB ${ chalk.dim(
				'(create-guten-block)'
			) } is a Zero-Config #OCJS for builing WordPress Gutenberg Blocks.`
		)
		.version( packageJson.version, '-v, --version' )
		.parse( process.argv );

	// If no blockName.
	if ( typeof blockName === 'undefined' ) {
		// Maybe user asked for debug info.
		maybeEnvInfo( program );

		// If still running then tell user to provide blockName.
		noBlockName();
	} // End.

	// We must have a blockName by now.

	// Format the blockName.
	const formatBlockName = blockName
		.toLowerCase()
		.split( ' ' )
		.join( '-' );

	return formatBlockName;
};
