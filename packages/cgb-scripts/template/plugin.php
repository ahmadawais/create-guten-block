<?php
/**
 * Plugin Name: CGB Gutenberg Block
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: CGB* AA is a Gutenberg block created via create-guten-block.
 * Author: mrahmadawais, maedahbatool
 * Author URI: https://AhmadAwais.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
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
if ( ! defined( 'CGB_VERSION' ) ) {
	define( 'CGB_VERSION', '1.0.0' );
}

if ( ! defined( 'CGB_NAME' ) ) {
	define( 'CGB_NAME', trim( dirname( plugin_basename( __FILE__ ) ), '/' ) );
}

if ( ! defined( 'CGB_DIR' ) ) {
	define( 'CGB_DIR', WP_PLUGIN_DIR . '/' . CGB_NAME );
}

if ( ! defined( 'CGB_URL' ) ) {
	define( 'CGB_URL', WP_PLUGIN_URL . '/' . CGB_NAME );
}

/**
 * Block Initializer.
 */
require_once( CGB_DIR . '/src/init.php' );