/**
 * Environment Info
 *
 * Prints envinfo for debugging.
 */

'use strict';

const chalk = require( 'chalk' );
const envinfo = require( 'envinfo' );
const clearConsole = require( './consoleClear' );

module.exports = program => {
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
		process.exit( 0 );
	} // End Envinfo.
};
