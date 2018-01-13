#!/usr/bin/env node
/**
 * CGB Command Run for Dev ENV.
 */

// Run CGB command in development env.
// Then handleErrors.
// TODO: Allow custom scripts.

'use strict';

const fs = require( 'fs' );
const path = require( 'path' );
const cp = require( 'child_process' );

const cleanup = () => {
	console.log( 'Cleaning up.' );
	// Uncomment when snapshot testing is enabled by default:
	// rm ./template/src/__snapshots__/App.test.js.snap
};

const handleExit = () => {
	cleanup();
	console.log( 'Exiting without error.' );
	process.exit();
};

const handleError = e => {
	console.error( 'ERROR! An error was encountered while executing\n', e );
	cleanup();
	console.log( 'Exiting with error.' );
	process.exit( 1 );
};

process.on( 'SIGINT', handleExit );
process.on( 'uncaughtException', handleError );

// The rootDir is where this repo exits. i.e. the dir where lerna.json is.
const rootDir = path.join( __dirname, '..' );

// ******************************************************************************
// TODO: Allow custom scripts.
// Pack cgb-scripts so we can verify they work.
// ******************************************************************************

// // The rootDir is where this repo exits. i.e. the dir where lerna.json is.
// const rootDir = path.join( __dirname, '..' );
// const cgbScriptsDir = path.join( rootDir, 'packages', 'cgb-scripts' );
// const packageJsonPath = path.join( cgbScriptsDir, 'package.json' );
// const packageJsonOrigPath = path.join( cgbScriptsDir, 'package.json.orig' );

// // Install all our packages
// const lernaPath = path.join( rootDir, 'node_modules', '.bin', 'lerna' );
// cp.execSync( `${ lernaPath } bootstrap`, {
// 	cwd: rootDir,
// 	stdio: 'inherit',
// } );

// // Save package.json because we're going to touch it
// fs.writeFileSync( packageJsonOrigPath, fs.readFileSync( packageJsonPath ) );

// // Replace own dependencies (those in the`packages` dir) with the local paths
// // of those packages
// const replaceOwnDepsPath = path.join( __dirname, 'replace-own-deps.js' );
// cp.execSync( `node ${ replaceOwnDepsPath }`, { stdio: 'inherit' } );

// // Finally, pack cgb-scripts
// // Don't redirect stdio as we want to capture the output that will be returned
// // from execSync(). In this case it will be the .tgz filename.
// const scriptsFileName = cp
// 	.execSync( 'npm pack', { cwd: cgbScriptsDir } )
// 	.toString()
// 	.trim();

// const scriptsPath = path.join(
// 	rootDir,
// 	'packages',
// 	'cgb-scripts',
// 	scriptsFileName
// );

// // Restore package.json
// fs.unlinkSync( packageJsonPath );
// fs.writeFileSync( packageJsonPath, fs.readFileSync( packageJsonOrigPath ) );
// fs.unlinkSync( packageJsonOrigPath );

// ******************************************************************************
// Now that we have packed them, call the global CLI.
// ******************************************************************************

// If Yarn is installed, clean its cache because it may have cached cgb-scripts
try {
	cp.execSync( 'yarn cache clean' );
} catch ( e ) {
	// We can safely ignore this as the user doesn't have yarn installed
}

const args = process.argv.slice( 2 );

// Now run the CGB command.
const cgbScriptPath = path.join(
	rootDir,
	'packages',
	'create-guten-block',
	'index.js'
);
cp.execSync(
	// TODO: Allow custom scripts.
	// `node ${ cgbScriptPath } --scripts-version="${ scriptsPath }" ${ args.join( ' ' ) }`,
	`node ${ cgbScriptPath } ${ args.join( ' ' ) }`,
	{
		cwd: rootDir,
		stdio: 'inherit',
	}
);

// Cleanup. Dev only.
handleExit();
