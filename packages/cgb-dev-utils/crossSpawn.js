/**
 * Cross Spwan
 *
 * TODO:
 * @credits CRA
 */

'use strict';

// Update notifier.
const updateNotifier = require( 'update-notifier' );
const pkg = require( './package.json' );
const notifier = updateNotifier( {
	pkg: pkg,
	updateCheckInterval: 1000 * 60 * 60 * 24, // 1 day.
} );

if ( notifier.update ) {
	notifier.notify();
	process.exit( 0 );
}

const crossSpawn = require( 'cross-spawn' );

module.exports = crossSpawn;
