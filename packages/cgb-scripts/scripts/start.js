/**
 * Start
 *
 * The create-guten-block CLI starts here.
 *
 * TODO:
 *  - checkRequiredFiles
 *  - printBuildError
 */
'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on( 'unhandledRejection', err => {
	throw err;
} );

const chalk = require( 'chalk' );
const webpack = require( 'webpack' );
const config = require( '../config/webpack.config.dev' );
const clearConsole = require( '../../cgb-dev-utils/clearConsole' );
const formatWebpackMessages = require( '../../cgb-dev-utils/formatWebpackMessages' );

clearConsole();
// console.log( 'Webpack starting' );

// const compiler = webpack( config );

// compiler.run( ( err, stats ) => {
// 	// ...
// } );

// Create the production build and print the deployment instructions.
function build( webpackConfig ) {
	console.log( 'Creating an optimized production build...' );

	// Compiler Instance.
	const compiler = webpack( webpackConfig );

	// Promise.
	return new Promise( ( resolve, reject ) => {
		compiler.run( ( err, stats ) => {
			if ( err ) {
				return reject( err );
			}
			const messages = formatWebpackMessages( stats.toJson( {}, true ) );
			if ( messages.errors.length ) {
				// Only keep the first error. Others are often indicative
				// of the same problem, but confuse the reader with noise.
				if ( messages.errors.length > 1 ) {
					messages.errors.length = 1;
				}
				return reject( new Error( messages.errors.join( '\n\n' ) ) );
			}
			if (
				process.env.CI &&
				( typeof process.env.CI !== 'string' ||
					process.env.CI.toLowerCase() !== 'false' ) &&
				messages.warnings.length
			) {
				console.log(
					chalk.yellow(
						'\nTreating warnings as errors because process.env.CI = true.\n' +
							'Most CI servers set it automatically.\n'
					)
				);
				return reject( new Error( messages.warnings.join( '\n\n' ) ) );
			}
			return resolve( {
				stats,
				warnings: messages.warnings,
			} );
		} );
	} );
}

build( config );
