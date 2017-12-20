#!/usr/bin/env node
let path = require('path');
let shell = require('shelljs');
let colors = require('colors');
let fs = require('fs');
let files = path.join(__dirname, '/files/');
let appName = process.argv[2];
let appDirectory = `${process.cwd()}/${appName}`;

colors.setTheme({
	cs: ['black', 'bgGreen'],
	ce: ['black', 'bgRed'],
	ci: ['black', 'bgYellow']
});

console.clear();
console.log();

const run = async () => {
	let success = await createGutenBlock();
	if (!success) {
		console.log(' Something went wrong...'.error);
		return false;
	}

	await buildPluginFolder();
	await installPackages();
	await finalHelp();
};

const createGutenBlock = () => {
	return new Promise(resolve => {
		if (appName) {
			shell.exec(`mkdir -p ${appName}`, code => {
				console.log(`\n— `, ` Created a WordPress plugin: ${appName} `.ci);
				resolve(true);
			});
		} else {
			console.log(' No plugin name was provided! '.ci);
			console.log('\n Provide a plugin name in the following format: '.yellow);
			console.log('\ncreate-guten-block ', ' plugin-name \n'.ci);
			resolve(false);
		}
	});
};

const buildPluginFolder = () => {
	return new Promise(resolve => {
		shell.cd(appDirectory);
		shell.cp('-RL', `${files}*`, './');
		shell.cp('-RL', `${files}.*`, './');
		resolve();
	});
};

const installPackages = () => {
	return new Promise(resolve => {
		console.log('\nInstalling dependencies...\n'.cyan);
		shell.exec(`npm install && npm run build`, () => {
			console.log('\nFinished installing NPM packages\n'.cyan);
			resolve();
		});
	});
};

// const runBuild = () => {
// 	return new Promise(resolve => {
// 		console.log('\n Building the block...\n'.cyan);
// 		shell.exec(`npm run build`, () => {
// 			console.log('\nFinished building the your block.\n'.cyan);
// 			resolve();
// 		});
// 	});
// };

const finalHelp = () => {
	console.log(`\n✅ `, ` All done! Go build some Gutenberg blocks.\n`.cs);
	console.log(`\n—`, ` What's Next: `);
	console.log(`\n👉 `, ` Use`, ` npm run dev `.ci, `to build and watch your block.`);
	console.log(
		`\n👉 `,
		` Use`,
		` npm run build `.ci,
		`to build production code for your block.\n`
	);
};
run();
