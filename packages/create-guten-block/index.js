#!/usr/bin/env node
// create-guten-block CLI!

'use strict';

/**
 * Main create-guten-block app
 *
 * Check the node version if above 8 then run the app.
 */

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   /!\ DO NOT MODIFY THIS FILE /!\
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// create-guten-block is installed globally on people's computers. This means
// that it is extremely difficult to have them upgrade the version and
// because there's only one global version installed, it is very prone to
// breaking changes.
//
// The only job of create-guten-block is to init the repository and then
// forward all the commands to the local version of create-guten-block.
//
// If you need to add a new command, please add it to the scripts/ folder.
//
// The only reason to modify this file is to add more warnings and
// troubleshooting information for the `create-guten-block` command.
//
// Do not make breaking changes! We absolutely don't want to have to
// tell people to update their global version of create-guten-block.
//
// Also be careful with new language features.
// This file must work on Node 0.10+.
//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   /!\ DO NOT MODIFY THIS FILE /!\
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

( 'use strict' );

const chalk = require( 'chalk' );
const currentNodeVersion = process.versions.node;
const semver = currentNodeVersion.split( '.' );
const major = semver[ 0 ];

// If below Node 8.
if ( major < 8 ) {
	console.error(
		chalk.red(
			'You are running Node ' +
				currentNodeVersion +
				'.\n' +
				'Create Guten Block requires Node 8 or higher. \n' +
				'Kindly, update your version of Node.'
		)
	);
	process.exit( 1 );
}

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on( 'unhandledRejection', err => {
	throw err;
} );

/**
 * Run the entire program.
 *
 * Runs all the functions with async/await.
 */
const run = require( './app/run' );
run();
