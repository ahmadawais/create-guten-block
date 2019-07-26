/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * BLOCK: Basic with ESNext
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 *
 * Using inline styles - no external stylesheet needed.  Not recommended!
 * because all of these styles will appear in `post_content`.
 */

var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    AlignmentToolbar = _wp$blocks.AlignmentToolbar,
    Editable = _wp$blocks.Editable,
    BlockControls = _wp$blocks.BlockControls;

var children = wp.blocks.source.children; // The children() function to extract child nodes from a paragraph of rich text.

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
registerBlockType('gb/editable-esnext-controls-05', { // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('GB Editable ESNext + Controls', 'GB'), // Block title.
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
		content: children('p') // Content: Extract child nodes from a paragraph of rich text.
	},

	// The "edit" property must be a valid function.
	edit: function edit(props) {
		var content = props.attributes.content; // Content in our block.
		var alignment = props.attributes.alignment; // Alignment controls of our block.
		var focus = props.focus; // Focus — should be truthy.
		var setFocus = props.setFocus; // Sets focus on block.
		var className = props.className; // The class="wp-editor-gb-03-block-editable".

		/**
   * Update content on change.
   */
		var onChangeContent = function onChangeContent(newContent) {
			props.setAttributes({ content: newContent });
		};

		/**
   * Update alignment on change.
   */
		var onChangeAlignment = function onChangeAlignment(newAlignment) {
			props.setAttributes({ alignment: newAlignment });
		};

		// The editable content.
		return wp.element.createElement(
			'div',
			null,
			focus && // If focussed show block controls.
			wp.element.createElement(
				BlockControls,
				null,
				wp.element.createElement(AlignmentToolbar // Alignment option in block controls.
				, { value: alignment // Alignment of block content. i.e props.attributes.alignment.
					, onChange: onChangeAlignment // Run onChangeAlignment() function onChane of Alignment.
				})
			),
			wp.element.createElement(Editable // Editable react component
			, { className: className // The class="wp-editor-gb-editable-esnext-controls-05".
				, style: { textAlign: alignment } // The style='textAlign: {Alignment}' <-- From controls.
				, onChange: onChangeContent // Run the onChangeContent() function onChange of content.
				, value: content // Content in our block. i.e. props.attributes.content;
				, focus: focus // Focus — should be truthy. i.e. props.focus;
				, onFocus: setFocus // Sets focus on block.
			})
		);
	},

	// The "save" property must be specified and must be a valid function.
	save: function save(props) {
		var classes = ''; // To hold class name, in case if alignment is changed.
		if (props.attributes.alignment) {
			// If alignment is set, i.e. props.attributes.alignment.
			classes = 'gb-basic-align-' + props.attributes.alignment; // Set class name according to alignment.
		}
		console.log(classes);
		return wp.element.createElement(
			'p',
			{ className: classes },
			props.attributes.content
		);
	}
});

/***/ })
/******/ ]);