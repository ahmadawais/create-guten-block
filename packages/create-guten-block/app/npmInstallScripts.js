/**
 * NPM install cgb-scripts.
 *
 * - Build package.json file.
 * - NPM install the plugin block.
 *
 * @param {string} blockName The block name.
 * @param  {string} blockDir The block directory.
 * @return {promise} promise resolved.
 */

'use strict';

const path = require( 'path' );
const fs = require( 'fs-extra' );
const execa = require( 'execa' );
const shell = require( 'shelljs' );

module.exports = ( blockName, blockDir ) => {
	shell.cd( blockDir );
	shell.touch( 'package.json' );

	// Build a package.json file since npm install needs it.
	const appPackage = {
		name: `${ blockName }-cgb-guten-block`,
		version: '1.0.0',
		private: true,
		scripts: {
			start: 'cgb-scripts start',
			build: 'cgb-scripts build',
			eject: 'cgb-scripts eject',
		},
	};

	// Write the package.json file.
	fs.writeFileSync(
		path.join( process.cwd(), 'package.json' ),
		JSON.stringify( appPackage, null, 2 ) + '\n'
	);

	// Install latest exact version of cgb-scripts.
	return new Promise( async resolve => {
		await execa( 'npm', [
			'install',
			'cgb-scripts',
			'--save',
			'--save-exact',
			'--silent',
		] );
		resolve( true );
	} );
};
