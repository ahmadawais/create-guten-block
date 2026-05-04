const clearConsole = require( './consoleClear' );
const path = require( 'path' );

clearConsole();

const blockName = 'my-block';
console.log( `${ process.cwd() }/${ blockName }` );

console.log( path.join( process.cwd(), blockName ) );
