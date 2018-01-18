'use strict';

const ora = require( 'ora' );
const path = require( 'path' );
const chalk = require( 'chalk' );
const shell = require( 'shelljs' );

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on( 'unhandledRejection', err => {
	throw err;
} );

/**
 * Copy template to the plugin dir.
 *
 * @param {string} blockName The block name.
 * @param  {string} blockDir The block directory.
 * @param  {string} blockNamePHPLower The block name for PHP files in lowercase.
 * @param  {string} blockNamePHPUpper The block name for PHP files in uppercase.
 * @return {promise} promise resolved.
 */
const copyTemplateFiles = (
	blockName,
	blockDir,
	blockNamePHPLower,
	blockNamePHPUpper
) => {
	// Since we ran npm install cgb-scripts we have it in the node_modules now.
	const template = path.join(
		blockDir,
		'node_modules',
		'cgb-scripts',
		'template'
	);

	return new Promise( resolve => {
		shell.cd( blockDir );
		// Create a tmp folder to avoid globbing through node_modules.
		shell.exec( 'mkdir -p ./tmp' );
		shell.cp( '-RL', `${ template }/*`, './tmp' );
		shell.cp( '-RL', `${ template }/.*`, './tmp' );

		// Replace dynamic content for block name in the code.
		shell.ls( 'tmp/**/**.*' ).forEach( function( file ) {
			shell.sed( '-i', '<% blockName %>', `${ blockName }`, file );
			shell.sed( '-i', '<% blockName % >', `${ blockName }`, file );
			shell.sed( '-i', '<% blockNamePHPLower %>', `${ blockNamePHPLower }`, file );
			shell.sed( '-i', '<% blockNamePHPLower % >', `${ blockNamePHPLower }`, file );
			shell.sed( '-i', '<% blockNamePHPUpper %>', `${ blockNamePHPUpper }`, file );
			shell.sed( '-i', '<% blockNamePHPUpper % >', `${ blockNamePHPUpper }`, file );
		} );

		// Move all processed files back to the main folder.
		shell.cp( '-RL', `${ blockDir }/tmp/*`, './' );
		shell.cp( '-RL', `${ blockDir }/tmp/.*`, './' );

		// Thank you, tmp — you've been a useful friend.
		shell.rm( '-rf', './tmp' );
		resolve( true );
	} );
};

/**
 * Prints next steps.
 *
 * @param {string} blockName The block name.
 * @param  {string} blockDir The block directory.
 */
const printNextSteps = ( blockName, blockDir ) => {
	console.log(
		'\n\n✅ ',
		chalk.black.bgGreen( ' All done! Go build some Gutenberg blocks. \n' )
	);
	console.log(
		`CGB ${ chalk.dim(
			'(create-guten-block)'
		) } has created a WordPress plugin called `,
		chalk.dim( blockName ),
		' that you can use with zero configurations #0CJS to build Gutenberg blocks with ESNext (i.e. ES6/7/8), React.js, JSX, Webpack, ESLint, etc.'
	);
	console.log(
		`\nCreated ${ chalk.dim( blockName ) } plugin at: ${ chalk.dim( blockDir ) }`,
		'\nInside that directory, you can run several commands:\n'
	);

	console.log(
		'\n👉 ',
		' Type',
		chalk.black.bgWhite( ' npm start ' ),
		'\n\n',
		'     Use to compile and run the block in development mode.',
		'\n',
		'     Watches for any changes and reports back any errors in your code.'
	);
	console.log(
		'\n\n👉 ',
		' Type',
		chalk.black.bgWhite( ' npm run build ' ),
		'\n\n',
		'     Use to build production code for your block inside dist folder.',
		'\n',
		'     Runs once and reports back the gzip file sizes of the produced code.'
	);

	console.log(
		'\n👉 ',
		' Type',
		chalk.black.bgWhite( ' npm run eject ' ),
		'\n\n',
		'     Removes this tool and copies build dependencies, configuration files',
		'\n',
		'     and scripts into the plugin folder. ⚠️  It\'s a one way street.',
		'\n',
		'     If you do this, you can’t go back!'
	);

	console.log( '\n\n', chalk.black.bgGreen( ' Get Started → \n' ) );
	console.log( ' We suggest that you begin by typing: \n' );
	console.log(
		`  ${ chalk.green( 'cd' ) } ${ blockName }`,
		'\n',
		` ${ chalk.green( 'npm' ) } start`,
		'\n\n'
	);
};

/**
 * Initializer function.
 *
 * - Copy templates to the appPath
 * - Print final instructions.
 *
 * @param {string} root The process.cwd() of where the cgb ran.
 * @param {string} blockName The block name.
 * @param  {string} blockDir The block directory.
 */
module.exports = async( root, blockName, blockDir ) => {
	// 0. Create block name for PHP functions.
	const blockNamePHPLower = blockName
		.toLowerCase()
		.split( '-' )
		.join( '_' );

	// 0. Create block name for PHP functions.
	const blockNamePHPUpper = blockNamePHPLower.toUpperCase();

	// 1.Copy template to the plugin dir.
	// Init the spinner.
	const spinner = new ora( { text: '', enabled: true } );
	spinner.start( '3. Creating plugin files...' );
	await copyTemplateFiles(
		blockName,
		blockDir,
		blockNamePHPLower,
		blockNamePHPUpper
	);
	spinner.succeed();

	// 2. Prints next steps.
	await printNextSteps( blockName, blockDir );
};
