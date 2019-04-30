/**
 * Basically the .babelrc file.
 */

// Update notifier.
const updateNotifier = require( 'update-notifier' );
const pkg = require( './package.json' );
updateNotifier( { pkg } ).notify();

module.exports = {
	presets: [
		'@babel/react',
		[
			'@babel/env',
			{
				modules: false,
				targets: {
					browsers: [
						'last 2 Chrome versions',
						'last 2 Firefox versions',
						'last 2 Safari versions',
						'last 2 iOS versions',
						'last 1 Android version',
						'last 1 ChromeAndroid version',
						'ie 11',
					],
				},
			},
		],
	],
	plugins: [
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-syntax-import-meta',
		[
			'@babel/plugin-proposal-object-rest-spread',
			{
				useBuiltIns: true,
			},
		],
		[
			'@babel/plugin-proposal-class-properties',
			{
				loose: true,
			},
		],
		'@babel/plugin-proposal-json-strings',
		[
			'@babel/plugin-proposal-decorators',
			{
				legacy: true,
			},
		],
		[
			'babel-plugin-transform-runtime',
			{
				helpers: false,
				polyfill: false,
				regenerator: true,
			},
		],
		'@babel/plugin-proposal-function-sent',
		'@babel/plugin-proposal-export-namespace-from',
		'@babel/plugin-proposal-numeric-separator',
		'@babel/plugin-proposal-throw-expressions',
	],
};
