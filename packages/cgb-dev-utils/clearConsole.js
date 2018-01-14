/**
 * Clear console
 *
 * Cross platform clear console.
 * TODO:
 * @credits CRA
 */

'use strict';

// Update notifier.
const updateNotifier = require( 'update-notifier' );
const pkg = require( './package.json' );
const notifier = updateNotifier( {
	pkg: pkg,
	// updateCheckInterval: 1000 * 60 * 60 * 24, // 1 day
} );

if ( notifier.update ) {
	notifier.notify();
	process.exit( 0 );
}

/**
 * Cross platform clear console.
 */
function clearConsole() {
	process.stdout.write(
		process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H'
	);
}

module.exports = clearConsole;
