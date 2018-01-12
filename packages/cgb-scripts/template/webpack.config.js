/**
 * Webpack Configuration
 *
 * Working of a Webpack can be very simple or complex. This is an intenally simple
 * build configuration.
 *
 * Webpack basics — If you are new the Webpack here's all you need to know:
 *     1. Webpack is a module bundler. It bundles different JS modules together.
 *     2. It needs and entry point and an ouput to process file(s) and bundle them.
 *     3. By default it only understands common JavaScript but you can make it
 *        understand other formats by way of adding a Webpack loader.
 *     4. In the file below you will find an entry point, an ouput, and a babel-loader
 *        that tests all .js files excluding the ones in node_modules to process the
 *        ESNext and make it compatible with older browsers i.e. it converts the
 *        ESNext (new standards of JavaScript) into old JavaScript through a loader
 *        by Babel.
 *
 * TODO: Instructions: How to build or develop with this Webpack config:
 *     1. In the command line browse the folder for this plugin where
 *        this `webpack.config.js` file is present.
 *     2. Run the `npm run dev` or `npm run build` for development or
 *        production respectively.
 *     3. To read what these NPM Scripts do, read the `package.json` file.
 *
 * @since 1.0.0
 */

const path = require( 'path' );
const autoprefixer = require( 'autoprefixer' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

// Extract style.css for both editor and frontend styles.
const blocksCSSPlugin = new ExtractTextPlugin( {
	filename: './dist/blocks.style.build.css',
} );

// Extract editor.css for editor styles.
const editBlocksCSSPlugin = new ExtractTextPlugin( {
	filename: './dist/blocks.editor.build.css',
} );

// Configuration for the ExtractTextPlugin — DRY rule.
const extractConfig = {
	use: [
		// "postcss" loader applies autoprefixer to our CSS.
		{ loader: 'raw-loader' },
		{
			loader: 'postcss-loader',
			options: {
				ident: 'postcss',
				plugins: [
					autoprefixer( {
						browsers: [
							'>1%',
							'last 4 versions',
							'Firefox ESR',
							'not ie < 9', // React doesn't support IE8 anyway
						],
						flexbox: 'no-2009',
					} ),
				],
			},
		},
		// "sass" loader converst SCSS to CSS.
		{
			loader: 'sass-loader',
			options: {
				// Add common CSS file for variables and mixins.
				data: '@import "./src/common.scss";\n',
				outputStyle:
					'production' === process.env.NODE_ENV ? 'compressed' : 'nested',
			},
		},
	],
};

// Export configuration.
module.exports = {
	entry: {
		'./dist/blocks.build': './src/blocks.js', // 'name' : 'path/file.ext'.
	},
	output: {
		path: path.resolve( __dirname ),
		filename: '[name].js', // [name] = './dist/blocks.build' as defined above.
	},
	watch: true,
	// You may want 'eval' instead if you prefer to see the compiled output in DevTools.
	devtool: 'cheap-eval-source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx|mjs)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /style\.s?css$/,
				exclude: /(node_modules|bower_components)/,
				use: blocksCSSPlugin.extract( extractConfig ),
			},
			{
				test: /editor\.s?css$/,
				exclude: /(node_modules|bower_components)/,
				use: editBlocksCSSPlugin.extract( extractConfig ),
			},
		],
	},
	// Add plugins.
	plugins: [ blocksCSSPlugin, editBlocksCSSPlugin ],
};
