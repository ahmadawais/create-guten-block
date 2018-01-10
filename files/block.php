<?php
/**
 * Plugin Name: CGB: <% blockName %> Gutenberg Block
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: <% blockName %> is a Gutenberg block created via create-guten-block.
 * Author: mrahmadawais, maedahbatool
 * Author URI: https://AhmadAwais.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CBG
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', '<% blockNameForPHP %>_cgb_editor_assets' );

/**
 * Enqueue the block's assets for the editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function <% blockNameForPHP %>_cgb_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'<% blockName %>-cgb-block', // Handle.
		plugins_url( 'block.build.js', __FILE__ ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ), // Dependencies, defined above.
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' ) // filemtime — Gets file modification time.
	);

	// Styles.
	wp_enqueue_style(
		'<% blockName %>-cgb-block-css', // Handle.
		plugins_url( 'editor.css', __FILE__ ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' ) // filemtime — Gets file modification time.
	);
} // End function <% blockNameForPHP %>_cgb_editor_assets().


// Hook: Frontend assets.
add_action( 'enqueue_block_assets', '<% blockNameForPHP %>_cgb_frontend_assets' );

/**
 * Enqueue the block's assets for the frontend.
 *
 * @since 1.0.0
 */
function <% blockNameForPHP %>_cgb_frontend_assets() {
	// Styles.
	wp_enqueue_style(
		'<% blockName %>-cgb-frontend-css', // Handle.
		plugins_url( 'style.css', __FILE__ ), // Block frontend CSS.
		array( 'wp-blocks' ), // Dependency to include the CSS after it.
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' ) // filemtime — Gets file modification time.
	);
} // End function <% blockNameForPHP %>_cgb_frontend_assets().
