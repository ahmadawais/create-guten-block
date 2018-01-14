/**
 * Paths
 *
 * Project related paths.
 */

const path = require( 'path' );
const fs = require( 'fs' );

// Make sure any symlinks in the project folder are resolved:
const pluginDir = fs.realpathSync( process.cwd() );
const resolveApp = relativePath => path.resolve( pluginDir, relativePath );

module.exports = {
	dotenv: resolveApp( '.env' ),
	pluginBlocksJs: resolveApp( 'src/blocks.js' ),
	pluginDist: resolveApp( '.' ), // We are in ./dist folder already so the path '.' resolves to ./dist/.
};
