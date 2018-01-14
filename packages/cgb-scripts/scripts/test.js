console.log( 'MANUAL TEST!' );

const resolvePkg = require( 'resolve-pkg' );
const cgbDevUtils = resolvePkg( 'cgb-dev-utils', { cwd: __dirname } );

console.log( cgbDevUtils );
