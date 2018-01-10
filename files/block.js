/**
 * BLOCK: <% blockName %>
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 *
 * Using inline styles - no external stylesheet needed.  Not recommended!
 * because all of these styles will appear in `post_content`.
 */

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: <% blockName %> Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made available as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-<% blockName %>', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'CGB <% blockName %>', 'CGB' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.

	// The "edit" property must be a valid function.
	edit: function( props ) {
		// Creates a <p class='wp-block-cgb-block-<% blockName %>'></p>.
		return (
			<div>
				<p className={ props.className }>
					<% blockName %> BLOCK: Hello from the editor.
				</p>
			</div>
		);
	},

	// The "save" property must be specified and must be a valid function.
	save: function( props ) {
		return (
			<div>
				<p className={ props.className }>
					<% blockName %> BLOCK: Hello from the frontend.
				</p>
			</div>
		);
	},
} );
