<?php
/**
 * Plugin Name: Gutenberg Boilerplate
 * Plugin URI: https://AhmadAwais.com/
 * Description: An ever growing Gutenberg boilerplate to help developers with extending Gutenberg editor. It's open source and hosted on GitHub. Consider to <a href="https://github.com/ahmadawais/Gutenberg-Boilerplate">🌟 Star it on GitHub</a> | <a href="https://github.com/ahmadawais">🎩 Follow Ahmad's Open Source Projects</a>.
 * Author: mrahmadawais, maedahbatool, WPTie
 * Author URI: https://AhmadAwais.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package GB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Define global constants.
 *
 * @since 1.0.0
 */
// Plugin version.
if ( ! defined( 'GB_VERSION' ) ) {
	define( 'GB_VERSION', '1.0.0' );
}

if ( ! defined( 'GB_NAME' ) ) {
	define( 'GB_NAME', trim( dirname( plugin_basename( __FILE__ ) ), '/' ) );
}

if ( ! defined( 'GB_DIR' ) ) {
	define( 'GB_DIR', WP_PLUGIN_DIR . '/' . GB_NAME );
}

if ( ! defined( 'GB_URL' ) ) {
	define( 'GB_URL', WP_PLUGIN_URL . '/' . GB_NAME );
}

/**
 * BLOCK: Basic Block.
 */
require_once( GB_DIR . '/block/01-basic/index.php' );

/**
 * BLOCK: Basic Block ESNext + Webpack Build Process.
 */
require_once( GB_DIR . '/block/02-basic-esnext/index.php' );

/**
 * BLOCK: Editable.
 */
require_once( GB_DIR . '/block/03-block-editable/index.php' );

/**
 * BLOCK: Tweet.
 */
require_once( GB_DIR . '/block/04-tweet/index.php' );

/**
 * BLOCK: Editable Block with controls (ESNext)
 */
require_once( GB_DIR . '/block/05-editable-with-controls-esnext/index.php' );