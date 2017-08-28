/**
 * BLOCK: Tweet
 *
 * Registering a basic editable block with Gutenberg.
 * Introduces the concept of attributes and extracting
 * them while processing a completly different output
 * for the frontend.
 *
 * Styles:
 *        editor.css — Editor styles for the block.
 *        style.css — Frontend styles for the block.
 */
( function() {
	var __ = wp.i18n.__; // The __() for internationalization.
	var el = wp.element.createElement; // The wp.element.createElement() function to create elements.
	var Editable = wp.blocks.Editable; // Editable component of React.
	var children = wp.blocks.source.children; // The children() function to extract child nodes from a paragraph of rich text.
	var registerBlockType = wp.blocks.registerBlockType; // The registerBlockType() to register blocks.

	/**
	 * Register The Block.
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
	registerBlockType( 'gb/04-tweet', { // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
		title: __( 'Tweet', 'GB' ), // Block title.
		icon: 'twitter', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
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
			content: children( 'a' ), // Content: Extract child nodes from an anchor tag's content.
		},

		// The "edit" property must be a valid function.
		edit: function( props ) {
			var content = props.attributes.content; // Content in our block.
			var focus = props.focus; // Focus — should be truthy.

			/**
			 * Update content on change.
			 */
			function onChangeContent( newContent ) {
				// Console Log.
				console.log( 'newContent: ', newContent  );
				console.info( 'NEW: ', {__html: newContent} );

				props.setAttributes( { content: newContent } );
			}

			// The editable content.
			return el(
				Editable, // Editable React component.
				{ // Creates <div class="wp-block-gb-04-tweet"><a></a></div>
					tagName: 'a', // <a></a>.
					className: props.className, // The class="wp-editor-gb-04-tweet".
					onChange: onChangeContent, // Run the onChangeContent() function onChange of content.
					value: content, // Content in our block. i.e. props.attributes.content;
					focus: null, // Focus — should be truthy. i.e. props.focus; I have set it null to disable the toolbar. Hacky. There must be a better way.
					onFocus: props.setFocus,
					// placeholder: __( 'Write a tweet…' ), // Commented coz of a CSS issue probably will be fixed in future Gutenberg versions.
				}
			);
		},

		// The "save" property must be specified and must be a valid function.
		save: function( props ) {
			/**
			 * Remove HTML tags from tweet's content.
			 *
			 * @param  {mixed}  html.
			 * @return {text}
			 * @since  1.0.0
			 */

			var tweetContent = props.attributes.content; // Content in our block.
			// Console Log.
			console.log( 'tweetContent: ', tweetContent  );


			var tweetURI = 'https://twitter.com/home?status=' + encodeURIComponent( tweetContent ); // Encodes a Uniform Resource Identifier (URI) component — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent.
			var attrs = {
				href: tweetURI,
				className: props.className, // Class would be → wp-block-gb-04-tweet
				target: '_blank',
			};

			// The frontend content.
			return el( 'a', attrs, tweetContent ); // Returns <a href="https://twitter.com/home?status={tweetContent}" class="wp-block-gb-04-tweet" target="_blank">{tweetContent}</a>.
		},
	} );
} )();
