/**
 * Paths
 *
 * Project related paths.
 */

const path = require( 'path' );
const fs = require( 'fs' );

// @remove-on-eject-begin
const resolvePkg = require( 'resolve-pkg' );
// @remove-on-eject-end

// Make sure any symlinks in the project folder are resolved:
const pluginDir = fs.realpathSync( process.cwd() );
const resolvePlugin = relativePath => path.resolve( pluginDir, relativePath );

// Config after eject: we're in ./config/
module.exports = {
	dotenv: resolvePlugin( '.env' ),
	pluginSrc: resolvePlugin( 'src' ), // Plugin src folder path.
	pluginBlocksJs: resolvePlugin( 'src/blocks.js' ),
	yarnLockFile: resolvePlugin( 'yarn.lock' ),
	pluginDist: resolvePlugin( 'dist' ),
	devConfig: 'config/webpack.config.dev.js',
	prodConfig: 'config/webpack.config.prod.js',
};

// @remove-on-eject-begin
const resolveOwn = relativePath => path.resolve( __dirname, '..', relativePath );

// config before eject: we're in ./node_modules/react-scripts/config/
module.exports = {
	dotenv: resolvePlugin( '.env' ),
	pluginSrc: resolvePlugin( 'src' ),
	pluginBlocksJs: resolvePlugin( 'src/blocks.js' ),
	pluginDist: resolvePlugin( 'dist' ),
	yarnLockFile: resolvePlugin( 'yarn.lock' ),
	appPath: resolvePlugin( '.' ),
	// These properties only exist before ejecting:
	ownPath: resolveOwn( '.' ),
	devConfig: resolvePkg( 'cgb-scripts/config/webpack.config.dev.js', { cwd: __dirname } ),
	prodConfig: resolvePkg( 'cgb-scripts/config/webpack.config.prod.js', { cwd: __dirname } ),
};
// @remove-on-eject-end
