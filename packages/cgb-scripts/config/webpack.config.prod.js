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
// const webpack = require( 'webpack' );
const externals = require( './externals' );
const autoprefixer = require( 'autoprefixer' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const FixStyleOnlyEntriesPlugin = require( 'webpack-fix-style-only-entries' );
const UglifyJsPlugin = require( 'uglifyjs-webpack-plugin' );
// const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

// Source maps are resource heavy and can cause out of memory issue for large source files.
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP === 'true';

// Extract block stylesheets.
const blocksCSSPlugin = new MiniCssExtractPlugin( {
	filename: './dist/[name].css',
} );

// Extract style.css for both editor and frontend styles.
// const blocksCSSPlugin = new ExtractTextPlugin( {
// 	filename: './dist/blocks.style.build.css',
// } );

// Extract editor.css for editor styles.
// const editBlocksCSSPlugin = new ExtractTextPlugin( {
// 	filename: './dist/blocks.editor.build.css',
// } );

// Configuration for the ExtractTextPlugin — DRY rule.
const extractConfig = {
	use: [
		// "postcss" loader applies autoprefixer to our CSS.
		// { loader: require.resolve('raw-loader') },
		MiniCssExtractPlugin.loader,
		{ loader: require.resolve( 'css-loader' ) },
		{
			loader: require.resolve( 'postcss-loader' ),
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
		// "sass" loader converts SCSS to CSS.
		{
			loader: require.resolve( 'sass-loader' ),
			options: {
				// Add common CSS file for variables and mixins.
				data: '@import "./src/common.scss";\n',
				outputStyle: 'compressed',
			},
		},
	],
};

const recursiveIssuer = ( m ) => {
	if ( m.issuer ) {
		return recursiveIssuer( m.issuer );
	} else if ( m.name ) {
		return m.name;
	}
	return false;
};

// Export configuration.
module.exports = {
	entry: {
		'./dist/blocks.build': paths.pluginBlocksJs, // 'name' : 'path/file.ext'.
		'blocks.editor.build': paths.pluginEditorCss, // 'name' : 'path/file.ext'.
		'blocks.style.build': paths.pluginStyleCss, // 'name' : 'path/file.ext'.
	},
	output: {
		// Add /* filename */ comments to generated require()s in the output.
		pathinfo: true,
		// The dist folder.
		path: paths.pluginDist,
		filename: '[name].js', // [name] = './dist/blocks.build' as defined above.
	},
	// You may want 'eval' instead if you prefer to see the compiled output in DevTools.
	devtool: shouldUseSourceMap ? 'source-map' : false,
	module: {
		rules: [
			{
				test: /\.(js|jsx|mjs)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: require.resolve( 'babel-loader' ),
					options: {
						// @remove-on-eject-begin
						babelrc: false,
						presets: [ require.resolve( 'babel-preset-cgb' ) ],
						// @remove-on-eject-end
						// This is a feature of `babel-loader` for webpack (not Babel itself).
						// It enables caching results in ./node_modules/.cache/babel-loader/
						// directory for faster rebuilds.
						cacheDirectory: true,
					},
				},
			},
			{
				test: /\.s?css$/,
				exclude: /(node_modules|bower_components)/,
				use: extractConfig.use,
			},
		],
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				editorStyles: {
					name: 'blocks.editor.build',
					test: ( m, c, entry = 'blocks.editor.build' ) => 'CssModule' === m.constructor.name && recursiveIssuer( m ) === entry,
					chunks: 'all',
					enforce: true,
				},
				blockStyles: {
					name: 'blocks.style.build',
					test: ( m, c, entry = 'blocks.style.build' ) => 'CssModule' === m.constructor.name && recursiveIssuer( m ) === entry,
					chunks: 'all',
					enforce: true,
				},
			},
		},
		// Minify the code.
		minimizer: [
			new UglifyJsPlugin( {
				uglifyOptions: {
					compress: {
						warnings: false,
						// Disabled because of an issue with Uglify breaking seemingly valid code:
						// https://github.com/facebookincubator/create-react-app/issues/2376
						// Pending further investigation:
						// https://github.com/mishoo/UglifyJS2/issues/2011
						comparisons: false,
					},
					mangle: true,
					output: {
						comments: false,
						// Turned on because emoji and regex is not minified properly using default
						// https://github.com/facebookincubator/create-react-app/issues/2488
						ascii_only: true,
					},
					sourceMap: shouldUseSourceMap,
				},
			} ),
		],
	},
	// Add plugins.
	plugins: [
		blocksCSSPlugin,
		new FixStyleOnlyEntriesPlugin(),
	],
	stats: 'minimal',
	// stats: 'errors-only',
	// Add externals.
	externals: externals,
};
