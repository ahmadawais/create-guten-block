<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function <% blockNamePHPLower %>_cgb_block_assets() {
	// Block frontend styles.
	wp_enqueue_style(
		'<% blockNamePHPLower %>-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' ) // Version: filemtime — Gets file modification time.
	);

	// Block scripts.
	wp_enqueue_script(
		'<% blockNamePHPLower %>-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ) // Dependencies, defined above.
		// filemtime( plugin_dir_path( __FILE__ ) . 'block.js' ) // Version: filemtime — Gets file modification time.
	);

	// Block backend styles.
	wp_enqueue_style(
		'<% blockNamePHPLower %>-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' ) // Version: filemtime — Gets file modification time.
	);

	/**
	 * Register the block scripts and styles on server-side
	 * to ensure they are enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type/
	 */
	register_block_type( 'cgb/block-<% blockName %>', array(
		'style' => '<% blockNamePHPLower %>-cgb-style-css',
		'editor_script' => '<% blockNamePHPLower %>-cgb-block-js',
		'editor_style' => '<% blockNamePHPLower %>-cgb-block-editor-css',
	) );
} // End function <% blockNamePHPLower %>_cgb_block_assets().

// Hook: Block assets.
add_action( 'init', '<% blockNamePHPLower %>_cgb_block_assets' );
