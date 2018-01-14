console.log( 'RUNNING TEST!' );
// /node_modules/cgb-scripts/template/plugin.php

// const findNodeModules = require( 'find-node-modules' );
// console.log( findNodeModules() );
// [
// 	'node_modules',
// 	'../../node_modules',
// 	'../../../../../../../../../../../../node_modules',
// ];

// const findPkg = require( 'find-pkg' );
// const fp = findPkg.sync( '.' );
// console.log( fp );
// cgb/packages/create-guten-block/package.json

// const root = require( 'module-root' );
// console.log( root( 'cgb-scripts' ) );
// unable to find.

// const resolveFrom = require( 'resolve-from' );
// console.log( resolveFrom( 'cgb-scripts', 'plugin.php' ) );
// There is a file at `./foo/bar.js`
//=> '/Users/sindresorhus/dev/test/foo/bar.js'
// unable to find.

const resolvePkg = require( 'resolve-pkg' );
console.log( resolvePkg( 'cgb-scripts/template', { cwd: __dirname } ) );
