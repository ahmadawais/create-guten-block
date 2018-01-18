/**
 * Update notifier
 */

'use strict';

const updateNotifier = require( 'update-notifier' );
const pkg = require( '../package.json' );

module.exports = () => {
	updateNotifier( { pkg } ).notify();
};
