/**
 * Initialize the block plugin.
 *
 * @param {string} blockName The block name.
 * @param  {string} blockDir The block directory.
 */

'use strict';

const path = require( 'path' );

module.exports = ( blockName, blockDir ) => {
	// Root path.
	const root = process.cwd();

	// Get path to cgb-scripts.
	const scriptsPath = path.resolve(
		blockDir,
		'node_modules',
		'cgb-scripts',
		'scripts',
		'init.js'
	);

	// Require cgb-scripts.
	const init = require( scriptsPath );

	// Run the initializer function.
	init( root, blockName, blockDir );
};
