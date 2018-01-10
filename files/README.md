# Custom Gutenberg Block

This is a basic custom Gutenberg block. Files explained below.

- [`block.js`](https://github.com/ahmadawais/Gutenberg-Boilerplate/blob/master/block/02-basic-esnext/block.js) — We register Custom Gutenberg block here.
- [`block.build.js`](https://github.com/ahmadawais/Gutenberg-Boilerplate/blob/master/block/02-basic-esnext/block.build.js) — Built file from `block.js` via NPM Script and Webpack.
- [`editor.css`](https://github.com/ahmadawais/Gutenberg-Boilerplate/blob/master/block/02-basic-esnext/editor.css) _ Block CSS for the editor.
- [`style.css`](https://github.com/ahmadawais/Gutenberg-Boilerplate/blob/master/block/02-basic-esnext/style.css) — Block CSS for the front end.
- [`index.php`](https://github.com/ahmadawais/Gutenberg-Boilerplate/blob/master/block/02-basic-esnext/index.php) — Enqueue block's assets for the editor and the front end.
- [`.babelrc`](./.babelrc) — Babel custom configuration.
- [`.gitignore`](./.gitignore) — Git ignore file to ignore node_modules and such other files.
- [`package.json`](https://github.com/ahmadawais/Gutenberg-Boilerplate/blob/master/block/02-basic-esnext/package.json) & [`package-lock.json`](https://github.com/ahmadawais/Gutenberg-Boilerplate/blob/master/block/02-basic-esnext/package-lock.json) — NPM related file for holding NPM related metadata and `build`/`dev` NPM scripts.
- [`webpack.config.js`](https://github.com/ahmadawais/Gutenberg-Boilerplate/blob/master/block/02-basic-esnext/webpack.config.js) — Webpack configuration file.


## Getting Started!

Read the files explained above. All of the files are heavily inline documented. All you have to do is following:

- Open up your favorite terminal app.
- Makes sure [NodeJS and NPM](https://nodejs.org/) are installed by running `node -v` or `npm -v` to check their versions.
- Access this directory `cd /path/to/gutenberg-boilerplate/block/02-basic-esnext/`
- Install node dependencies by running `node install` or `sudo node install`
- For building the [`block.js`](https://github.com/ahmadawais/Gutenberg-Boilerplate/blob/master/block/02-basic-esnext/block.js) file into [`block.build.js`](https://github.com/ahmadawais/Gutenberg-Boilerplate/blob/master/block/02-basic-esnext/block.build.js) you can use run npm scripts.
- To watch and build run `npm run dev`
- To build for production run `npm run build`

