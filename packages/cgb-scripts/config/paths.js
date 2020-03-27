/**
 * Paths
 *
 * Project related paths.
 */

const path = require( 'path' );
const fs = require( 'fs' );

// Make sure any symlinks in the project folder are resolved:
const pluginDir = fs.realpathSync( process.cwd() );
const resolvePlugin = relativePath => path.resolve( pluginDir, relativePath );

// Config after eject: we're in ./config/
module.exports = {
	dotenv: resolvePlugin( '.env' ),
	pluginSrc: resolvePlugin( 'src' ), // Plugin src folder path.
	pluginBlocksJs: resolvePlugin( 'src/blocks.js' ),
	yarnLockFile: resolvePlugin( 'yarn.lock' ),
	pluginDist: resolvePlugin( 'dist' ), // We are in ./dist folder already so the path '.' resolves to ./dist/.
};

// @remove-on-eject-begin
const resolveOwn = relativePath => path.resolve( __dirname, '..', relativePath );

// config before eject: we're in ./node_modules/react-scripts/config/
module.exports = {
	dotenv: resolvePlugin( '.env' ),
	pluginSrc: resolvePlugin( 'src' ),
	pluginBlocksJs: resolvePlugin( 'src/blocks.js' ),
	pluginDist: resolvePlugin( 'dist' ), // We are in ./dist folder already so the path '.' resolves to ./dist/.
	yarnLockFile: resolvePlugin( 'yarn.lock' ),
	appPath: resolvePlugin( '.' ),
	// These properties only exist before ejecting:
	ownPath: resolveOwn( '.' ),
};
// @remove-on-eject-end
