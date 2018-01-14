console.log( 'MANNUAL TEST!' );

// const resolvePkg = require( 'resolve-pkg' );
// console.log( resolvePkg( 'cgb-scripts/template', { cwd: __dirname } ) );

const directoryExists = require( 'directory-exists' );

console.log( directoryExists.sync( './node_modules' ) ); //retuns boolean
console.log( directoryExists.sync( './demo' ) ); //retuns boolean
