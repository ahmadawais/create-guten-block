/**
 * BLOCK: Basic with ESNext
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 *
 * Using inline styles - no external stylesheet needed.  Not recommended!
 * because all of these styles will appear in `post_content`.
 */

const { __ } = wp.i18n; // Import __() from wp.i18n
const {
	registerBlockType, // Import registerBlockType() from wp.blocks.
	AlignmentToolbar, // Import AlignmentToolbar component from wp.blocks.
	Editable, // Import Editable component from wp.blocks.
	BlockControls  // Import BlockControls component from wp.blocks.
} = wp.blocks;
const children = wp.blocks.source.children; // The children() function to extract child nodes from a paragraph of rich text.

/**
 * Register Basic Block.
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
registerBlockType( 'gb/editable-esnext-controls-05', { // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'GB Editable ESNext + Controls', 'GB' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.

	/**
	 * Attribute matchers!
	 *
	 * Attribute matchers are used to define the strategy by which block
	 * attribute values are extracted from saved post content. They provide
	 * a mechanism to map from the saved markup to a JavaScript representation
	 * of a block.
	 *
	 * children() — Use children to extract child nodes of the matched element,
	 * returned as an array of virtual elements. This is most commonly used in
	 * combination with the Editable component.
	 *
	 * Example: Extract child nodes from a paragraph of rich text.
	 */
	attributes: {
		content: children( 'p' ), // Content: Extract child nodes from a paragraph of rich text.
	},



	// The "edit" property must be a valid function.
	edit: props => {
		const content = props.attributes.content; // Content in our block.
		const alignment = props.attributes.alignment; // Alignment controls of our block.
		const focus = props.focus; // Focus — should be truthy.
		const setFocus = props.setFocus; // Sets focus on block.
		const className = props.className; // The class="wp-editor-gb-03-block-editable".

		/**
		 * Update content on change.
		 */
		const onChangeContent = newContent => {
			props.setAttributes( { content: newContent } );
		};

		/**
		 * Update alignment on change.
		 */
		const onChangeAlignment = newAlignment => {
			props.setAttributes( { alignment: newAlignment } );
		};

		// The editable content.
		return (
			<div>
				{
					focus && ( // If focussed show block controls.
						<BlockControls>
							<AlignmentToolbar // Alignment option in block controls.
								value={ alignment } // Alignment of block content. i.e props.attributes.alignment.
								onChange={ onChangeAlignment } // Run onChangeAlignment() function onChane of Alignment.
							/>
						</BlockControls>
					)
				}
				<Editable 	// Editable react component
					className={ className }	// The class="wp-editor-gb-editable-esnext-controls-05".
					style={ { textAlign: alignment } } // The style='textAlign: {Alignment}' <-- From controls.
					onChange={ onChangeContent } // Run the onChangeContent() function onChange of content.
					value={ content } // Content in our block. i.e. props.attributes.content;
					focus={ focus } // Focus — should be truthy. i.e. props.focus;
					onFocus={ setFocus } // Sets focus on block.
					/>
			</div>
		);
	},

	// The "save" property must be specified and must be a valid function.
	save: props => {
		let classes = ''; // To hold class name, in case if alignment is changed.
		if ( props.attributes.alignment ) { // If alignment is set, i.e. props.attributes.alignment.
			classes = 'gb-basic-align-' + props.attributes.alignment; // Set class name according to alignment.
		}
		console.log(classes);
		return (
			<p className={ classes }>{ props.attributes.content }</p>
		);
	},
} );
