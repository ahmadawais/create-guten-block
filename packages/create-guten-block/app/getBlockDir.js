/**
 * Get block directory.
 *
 * @param {string} blockName The block name.
 * @return {string} The block directory.
 */

module.exports = blockName => {
	return `${ process.cwd() }/${ blockName }`;
};
