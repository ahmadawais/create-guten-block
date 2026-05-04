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
updateNotifier( { pkg } ).notify();

const crossSpawn = require( 'cross-spawn' );

module.exports = crossSpawn;
