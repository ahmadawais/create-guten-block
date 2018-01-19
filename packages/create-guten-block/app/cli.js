/**
 * Commande.js CLI
 *
 * Set the options for -v --help etc.
 */

'use strict';

const chalk = require( 'chalk' );
const envinfo = require( 'envinfo' );
const commander = require( 'commander' );
const clearConsole = require( './consoleClear' );
const packageJson = require( '../package.json' );

// Commander.js program.
module.exports = () => {
	const program = new commander.Command( packageJson.name )
		.version( packageJson.version, '-v, --version' )
		.description(
			`CGB ${ chalk.dim(
				'(create-guten-block)'
			) } is a Zero-Config #OCJS for builing WordPress Gutenberg Blocks.`
		);
	program
		.option( '-d, --debug', 'Prints envinfo for debugging. ' )
		.arguments( '<block-name>' )
		.usage( `${ chalk.green( '<block-name>' ) }` )
		.allowUnknownOption()
		.on( '--help', () => {
			console.log( `\n    Only ${ chalk.green( '<block-name>' ) } is required.\n` );
		} )
		.parse( process.argv );

	// Envinfo.
	if ( program.debug ) {
		clearConsole();

		console.log(
			'\n🔰  ' +
				chalk.black.bgYellow( ' Printing the debug env info below: \n\n' ) +
				chalk.dim( '   This may take a couple of seconds...' )
		);

		// Print the envinfo.
		envinfo.print( {
			packages: [ 'cgb-scripts' ],
			cpu: true,
			duplicates: true,
			browsers: true,
			noNativeIDE: true,
		} );

		console.log(
			'\n✅  ' +
				chalk.black.bgGreen( ' Done ' ) +
				chalk.dim( ' You can copy paste this info to share it...\n' )
		);
		// Let's end the process so the app doesn't continue.
		process.exit();
	}
};
