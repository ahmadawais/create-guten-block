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
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function <% blockNamePHPLower %>_cgb_block_assets() { // phpcs:ignore
	// Styles.
	wp_register_style(
		'<% blockNamePHPLower %>-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-editor' ), // Dependency to include the CSS after it.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);

	// Block scripts.
	wp_register_script(
		'<% blockNamePHPLower %>-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ), // Dependencies, defined above.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Block editor styles.
	wp_register_style(
		'<% blockNamePHPLower %>-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	/**
	 * Register the block scripts and styles for both frontend and
	 * backend to ensure they are enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type/
	 */
	register_block_type( 'cgb/block-<% blockName %>', array(
		'style'         => '<% blockNamePHPLower %>-cgb-style-css', // Enqueue blocks.style.build.css on both frontend & backend.
		'editor_script' => '<% blockNamePHPLower %>-cgb-block-js', // Enqueue blocks.build.js in the editor only.
		'editor_style'  => '<% blockNamePHPLower %>-cgb-block-editor-css', // Enqueue blocks.editor.build.css in the editor only.
	) );
}

// Hook: Block assets.
add_action( 'init', '<% blockNamePHPLower %>_cgb_block_assets' );
