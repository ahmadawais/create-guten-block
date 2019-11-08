/**
 * Utility methods for use when generating build configuration objects.
 */
const { join } = require( 'path' );

/**
 * Given a string, returns a new string with dash separators converted to
 * camel-case equivalent. This is not as aggressive as `_.camelCase`, which
 * which would also upper-case letters following numbers.
 *
 * @param {string} string Input dash-delimited string.
 *
 * @return {string} Camel-cased string.
 */
const camelCaseDash = string => string.replace( /-([a-z])/g, ( match, letter ) => letter.toUpperCase() );

/**
 * Define externals to load components through the wp global.
 */
const externals = [
	'components',
	'api-fetch',
	'edit-post',
	'element',
	'plugins',
	'editor',
	'block-editor',
	'blocks',
	'hooks',
	'utils',
	'date',
	'data',
	'i18n',
].reduce(
	( externals, name ) => ( {
		...externals,
		[ `@wordpress/${ name }` ]: `wp.${ camelCaseDash( name ) }`,
	} ),
	{
		wp: 'wp',
		ga: 'ga', // Old Google Analytics.
		gtag: 'gtag', // New Google Analytics.
		react: 'React', // React itself is there in Gutenberg.
		jquery: 'jQuery', // import $ from 'jquery'; // Use jQuery from WP after enqueuing it.
		'react-dom': 'ReactDOM',
		lodash: 'lodash', // Lodash is there in Gutenberg.
		cgbGlobal: 'cgbGlobal', // import globals from 'cgbGlobal'; // Localized data.
	}
);

module.exports = externals;
