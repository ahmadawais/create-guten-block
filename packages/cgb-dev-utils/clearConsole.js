/**
 * Clear console
 *
 * Cross platform clear console.
 * TODO:
 * @credits CRA
 */

'use strict';

/**
 * Cross platform clear console.
 */
function clearConsole() {
	process.stdout.write(
		process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H'
	);
}

module.exports = clearConsole;
