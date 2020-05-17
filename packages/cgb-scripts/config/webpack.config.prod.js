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
 * TODO: Instructions.
 *
 * @since 1.0.0
 */

const paths = require( './paths' );
const externals = require( './externals' );
const postcssPresetEnv = require( 'postcss-preset-env' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const FixStyleOnlyEntriesPlugin = require( 'webpack-fix-style-only-entries' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const { mode, resolve, plugins, stats } = defaultConfig;

// Source maps are resource heavy and can cause out of memory issue for large source files.
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP === 'true';

module.exports = {
	mode,
	entry: {
		'blocks.build': paths.pluginBlocksJs,
	},
	output: {
		filename: '[name].js',
		path: paths.pluginDist,
		pathinfo: true,
	},
	resolve,
	// You may want 'eval' instead if you prefer to see the compiled output in DevTools.
	devtool: shouldUseSourceMap ? 'source-map' : false,
	optimization: {
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				editor: {
					name: 'editor',
					test: /editor\.(sc|sa|c)ss$/,
					enforce: true,
				},
				style: {
					name: 'style',
					test: /style\.(sc|sa|c)ss$/,
					enforce: true,
				},
				default: false,
			},
		},
	},
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: () => [
								postcssPresetEnv( {
									stage: 3,
									browsers: [
										'>1%',
										'last 4 versions',
										'Firefox ESR',
										'not ie < 9', // React doesn't support IE8 anyway
									],
								} ),
							],
						},
					},
					{
						loader: 'sass-loader',
						options: {
							prependData: '@import "./src/common.scss";',
							sassOptions: {
								outputStyle: 'compressed',
							},
						},
					},
				],
			},
		],
	},
	// Add plugins.
	plugins: [
		new FixStyleOnlyEntriesPlugin( {
			silent: false,
		} ),

		// Extract CSS into individual files.
		new MiniCssExtractPlugin( {
			filename: 'blocks.[name].build.css',
			chunkFilename: 'blocks.[name].build.css',
		} ),

		// Extract @wordpress/scripts plugins.
		...plugins,
	],
	stats,
	// Add externals.
	externals: externals,
};
