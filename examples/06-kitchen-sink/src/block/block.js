/**
 * BLOCK: kitchen-sink
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import "./style.scss";
import "./editor.scss";

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

// Register editor components
const {
	RichText,
	PlainText,
	AlignmentToolbar,
	BlockControls,
	MediaUpload,
	InnerBlocks,
	PanelColorSettings,
	InspectorControls,
	URLInput
} = wp.editor;

// Import Inspector components
const {
	IconButton,
	Toolbar,
	Button,
	PanelBody,
	PanelRow,
	ToggleControl,
	RangeControl,
	TextControl,
	TextareaControl,
	SelectControl
} = wp.components;

/**
 * Register: Kitchen Sink Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType("cgb/block-kitchen-sink", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("kitchen-sink - CGB Block"), // Block title.
	icon: "shield", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "create-guten-block-kitchen", // Custom Block category: Look in src/init.php on Line 67. You can also use default groups E.g. common, formatting, layout widgets, embed.
	keywords: [
		__("kitchen-sink — CGB Block"),
		__("CGB Example"),
		__("create-guten-block")
	],
	/**
	 * Block Support
	 *
	 * Properties that add various functionality to the block.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/#supports-optional
	 */
	supports: {
		align: true,
		alignWide: true,
		anchor: false,
		customClassName: true,
		className: true,
		html: true,
		inserter: true,
		multiple: true,
		reusable: true
	},
	/**
	 * Attributes
	 *
	 * Sources of values that represent the block data that is going to be managed.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-attributes/
	 */
	attributes: {
		// Declare attributes to save various data in block:
		exampleToggle: {
			type: "boolean",
			default: false
		},
		exampleRange: {
			type: "number",
			default: 18
		},
		exampleSelect: {
			type: "string",
			default: "option_1"
		},
		exampleText: {
			type: "string"
		},
		exampleTextarea: {
			type: "string"
		},
		exampleColor: {
			type: "string",
			default: "#FFFFFF"
		},
		exampleAlignment: {
			type: "string"
		},
		exampleRichH2: {
			type: "string",
			source: "children",
			selector: "h2"
		},
		exampleRichParagraph: {
			type: "string",
			source: "html",
			selector: "p"
		},
		exampleRichList: {
			type: "string",
			selector: "ul"
		},
		examplePlainText: {
			type: "string"
		},
		exampleLink: {
			type: "string"
		},
		exampleImageAlt: {
			type: "string"
		},
		exampleImageURL: {
			type: "string",
			source: "attribute",
			attribute: "src",
			selector: "img"
		},
		exampleWidth: {
			type: "string",
			default: ""
		}
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function(props) {
		// Setup the attributes.
		const {
			attributes: {
				exampleToggle,
				exampleRange,
				exampleSelect,
				exampleText,
				exampleTextarea,
				exampleColor,
				exampleAlignment,
				exampleRichH2,
				exampleRichParagraph,
				exampleRichList,
				examplePlainText,
				exampleLink,
				exampleImage,
				exampleImageURL,
				exampleImageAlt
			},
			isSelected,
			editable,
			className,
			setAttributes
		} = props;
		// example options for SelectControl
		const exampleOptions = [
			{ value: "option_1", label: __("Option 1") },
			{ value: "option_2", label: __("Option 2") }
		];

		return [
			<BlockControls key="controls">
				<Toolbar>
					<IconButton label={__("Tooltip for toolbar Icon")} icon="update" />
				</Toolbar>
				<AlignmentToolbar
					value={exampleAlignment}
					onChange={value => setAttributes({ exampleAlignment: value })}
				/>
			</BlockControls>,
			<InspectorControls key="inspector">
				{/* Create 'Example Settings' panel that wraps components in inspector */}
				<PanelBody title={__("Example Settings")}>
					<PanelRow>
						{/* Toggle Switch */}
						<ToggleControl
							label={__("Example Toggle")}
							checked={!!exampleToggle} // make sure exampleToggle is a boolean set to false and not undefined or null
							onChange={() => setAttributes({ exampleToggle: !exampleToggle })}
						/>
					</PanelRow>
					{/* Range Slider */}
					<RangeControl
						label={__("Example Range")}
						value={exampleRange}
						onChange={value => setAttributes({ exampleRange: value })}
						min={14}
						max={24}
						step={1}
					/>
					{/* Selection */}
					<SelectControl
						label={__("Example Select")}
						description={__("Select description")}
						options={exampleOptions}
						value={exampleSelect}
						onChange={value => setAttributes({ exampleSelect: value })}
					/>
					{/* Text Field */}
					<TextControl
						label={__("Example Text")}
						description={__("Text description")}
						value={exampleText}
						onChange={value => setAttributes({ exampleText: value })}
					/>
					{/* Textarea  */}
					<TextareaControl
						label={__("Example Textarea")}
						description={__("Textarea description")}
						value={exampleTextarea}
						onChange={value => setAttributes({ exampleTextarea: value })}
					/>
					{/* Color Picker */}
					<PanelColorSettings
						title={__("Example Color")}
						colorValue={exampleColor}
						initialOpen={false}
						colorSettings={[
							{
								value: exampleColor,
								onChange: value => setAttributes({ exampleColor: value }),
								label: __("Example Color")
							}
						]}
					/>
				</PanelBody>
			</InspectorControls>,

			<div key="" className={props.className}>
				<p>— Hello from the backend.</p>
				<p>
					CGB BLOCK: <code>kitchen-sink</code> is a new Gutenberg block
				</p>
				<p>
					It was created via{" "}
					<code>
						<a href="https://github.com/ahmadawais/create-guten-block">
							create-guten-block
						</a>
					</code>
					.
				</p>
				<hr />
				<h2>Kitchen Sink </h2>
				<div class="example-block" style={{ backgroundColor: exampleColor }}>
					<h3>Settings from Inspector</h3>
					<p>Toggle: {exampleToggle ? "yes" : "no"}</p>
					<p>Range: {exampleRange}</p>
					<p>Select: {exampleSelect}</p>
					<p>Text: {exampleText}</p>
					<p>Textarea: {exampleTextarea}</p>
					<p>Color: {exampleColor}</p>
				</div>
				<div class="example-block">
					<h3>Heading</h3>
					<RichText
						tagName="h2"
						className={[className, "example-h2"].join(" ")}
						value={exampleRichH2}
						style={{ textAlign: exampleAlignment }}
						onChange={value => setAttributes({ exampleRichH2: value })}
						placeholder={__("Enter Heading ", "create-guten-block")}
						keepPlaceholderOnFocus={true}
					/>
				</div>
				<div class="example-block">
					<h3>Paragraph</h3>
					<RichText
						key="editable"
						tagName="p"
						className={[className, "example-paragraph"].join(" ")}
						style={{ textAlign: exampleAlignment }}
						onChange={value => setAttributes({ exampleRichParagraph: value })}
						value={exampleRichParagraph}
						placeholder={__("Enter paragraph text...", "create-guten-block")}
					/>
				</div>
				<div class="example-block">
					<h3>Unordered List</h3>
					<RichText
						tagName="ul"
						multiline="li"
						className={[className, "example-ul"].join(" ")}
						value={exampleRichList}
						onChange={value => setAttributes({ exampleRichList: value })}
						placeholder={__("Enter list item..", "create-guten-block")}
						keepPlaceholderOnFocus={true}
					/>
				</div>
				<div class="example-block">
					<h3>Plain Text</h3>
					<PlainText
						onChange={value => setAttributes({ examplePlainText: value })}
						value={examplePlainText}
						placeholder="Plain Text"
						className={[className, "example-plain"].join(" ")}
					/>
				</div>
				<div class="example-block">
					<h3>URL Input</h3>
					<URLInput
						value={exampleLink}
						onChange={value => setAttributes({ exampleLink: value })}
						autoFocus={false}
					/>
				</div>
				<div class="example-block">
					<h3>Image Upload</h3>
					<MediaUpload
						onSelect={value => {
							setAttributes({
								exampleImageAlt: value.alt,
								exampleImageURL: value.url
							});
						}}
						type="image"
						value={exampleImage}
						render={({ open }) => (
							<Button onClick={open}>
								{!exampleImageURL ? (
									<IconButton
										label={__("Upload Image")}
										icon="edit"
										onClick={open}
									>
										{__("Upload Image")}
									</IconButton>
								) : (
									<img
										class="image-class"
										src={exampleImageURL}
										alt={exampleImageAlt}
									/>
								)}
							</Button>
						)}
					/>
				</div>
				<div class="example-block">
					<h3>Allow Default Blocks</h3>
					<InnerBlocks />
				</div>
			</div>
		];
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function(props) {
		// Attributes for the frontend
		const {
			attributes: {
				exampleToggle,
				exampleRange,
				exampleSelect,
				exampleText,
				exampleTextarea,
				exampleColor,
				exampleAlignment,
				exampleRichH2,
				exampleRichParagraph,
				exampleRichList,
				examplePlainText,
				exampleLink,
				exampleImage,
				exampleImageURL,
				exampleImageAlt
			},
			className
		} = props;

		return (
			<div>
				<p>— Hello from the frontend.</p>
				<p>
					CGB BLOCK: <code>kitchen-sink</code> is a new Gutenberg block.
				</p>
				<p>
					It was created via{" "}
					<code>
						<a href="https://github.com/ahmadawais/create-guten-block">
							create-guten-block
						</a>
					</code>
					.
				</p>
				<hr />
				<h2>Kitchen Sink </h2>
				<div class="example-block" style={{ backgroundColor: exampleColor }}>
					<h3>Settings from Inspector</h3>
					<p>Toggle: {exampleToggle ? "yes" : "no"}</p>
					<p>Range: {exampleRange}</p>
					<p>Select: {exampleSelect}</p>
					<p>Text: {exampleText}</p>
					<p>Textarea: {exampleTextarea}</p>
					<p>Color: {exampleColor}</p>
				</div>
				<div class="example-block">
					<h3>Heading</h3>
					<RichText.Content
						tagName="h2"
						className="example-h2"
						value={exampleRichH2}
						style={{ textAlign: exampleAlignment }}
					/>
				</div>
				<div class="example-block">
					<h3>Paragraph</h3>
					<RichText.Content
						tagName="p"
						className="example-paragraph"
						value={exampleRichParagraph}
						style={{ textAlign: exampleAlignment }}
					/>
				</div>
				<div class="example-block">
					<h3>Unordered List</h3>
					<RichText.Content
						tagName="ul"
						multiline="li"
						className="example-ul"
						value={exampleRichList}
					/>
				</div>
				<div class="example-block">
					<h3>Plain Text</h3>
					<p>{examplePlainText}</p>
				</div>
				<div class="example-block">
					<h3>URL</h3>
					<a className="example-ul" href={exampleLink}>
						{exampleLink}
					</a>
				</div>

				<div class="example-block">
					<h3>Image</h3>
					{exampleImageURL && (
						<img
							className="example-img"
							src={exampleImageURL}
							alt={exampleImageAlt}
						/>
					)}
				</div>

				<div class="example-block">
					<h3>Default Blocks</h3>
					<InnerBlocks.Content />
				</div>
			</div>
		);
	}
});
