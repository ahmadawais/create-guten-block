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

// Config after eject: we're in ./config/
module.exports = {
	dotenv: resolveApp( '.env' ),
	pluginBlocksJs: resolveApp( 'src/blocks.js' ),
	yarnLockFile: resolveApp( 'yarn.lock' ),
	pluginDist: resolveApp( '.' ), // We are in ./dist folder already so the path '.' resolves to ./dist/.
};

// @remove-on-eject-begin
const resolveOwn = relativePath => path.resolve( __dirname, '..', relativePath );

// config before eject: we're in ./node_modules/react-scripts/config/
module.exports = {
	dotenv: resolveApp( '.env' ),
	pluginBlocksJs: resolveApp( 'src/blocks.js' ),
	pluginDist: resolveApp( '.' ), // We are in ./dist folder already so the path '.' resolves to ./dist/.
	yarnLockFile: resolveApp( 'yarn.lock' ),
	appPath: resolveApp( '.' ),
	// These properties only exist before ejecting:
	ownPath: resolveOwn( '.' ),
};
// @remove-on-eject-end
