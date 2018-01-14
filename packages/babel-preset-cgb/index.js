/**
 * Basically the .babelrc file.
 */
module.exports = {
	presets: [
		[
			// 'env',
			require.resolve( 'babel-preset-env' ),
			{
				// Do not transform modules to CJS.
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
		// class { handleClick = () => { } }.
		[ require.resolve( 'babel-plugin-transform-class-properties' ) ],
		// The following two plugins use Object.assign directly, instead of Babel's
		// extends helper. Note that this assumes `Object.assign` is available.
		// { ...todo, completed: true }
		[
			require.resolve( 'babel-plugin-transform-object-rest-spread' ),
			{
				useBuiltIns: true,
			},
		],
		[
			// Transforms JSX Syntax.
			// 'transform-react-jsx',
			require.resolve( 'babel-plugin-transform-react-jsx' ),
			{
				pragma: 'wp.element.createElement',
			},
		],
		// Polyfills the runtime needed for async/await and generators.
		[
			require.resolve( 'babel-plugin-transform-runtime' ),
			{
				helpers: false,
				polyfill: false,
				regenerator: true,
			},
		],
	],
};
