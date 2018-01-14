#!/usr/bin/env node
/**
 * Replace Deps
 *
 * Replaces internal dependencies in package.json with local package paths.
 *
 * TODO: Implement for all packages and with better flow control.
 */
'use strict';

const fs = require( 'fs' );
const path = require( 'path' );

const packagesDir = path.join( __dirname, '../packages' );
const pkgFilename = path.join( packagesDir, 'cgb-scripts/package.json' );
const data = require( pkgFilename );

fs.readdirSync( packagesDir ).forEach( name => {
	if ( data.dependencies[ name ] ) {
		data.dependencies[ name ] = 'file:' + path.join( packagesDir, name );
	}
} );

fs.writeFile( pkgFilename, JSON.stringify( data, null, 2 ), 'utf8', err => {
	if ( err ) {
		throw err;
	}
	console.log( 'Replaced local dependencies.' );
} );
