/**
 * Get block directory.
 *
 * @param {string} blockName The block name.
 * @return {string} The block directory.
 */

'use strict';

const path = require( 'path' );

module.exports = blockName => {
	return path.join( process.cwd(), blockName );
};
