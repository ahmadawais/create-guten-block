
> **[WORK-IN-PROGRESS] Stricly, WIP at the moment. Do NOT use it or announce, share it anywhere until I remove this notice and release it to the public.**

# Create-Guten-Block [WIP]

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

Create WordPress Gutenberg blocks with no build configuration.

Create-Guten-Block has been tested to work on macOS, but must also work on Windows, and Linux.
If something doesn’t work, please file [an issue](https://github.com/ahmadawais/create-guten-block/issues/new).

## Quick Overview

Go to your local WordPress installation and then in to the `wp-content/plugins` folder. As the `create-guten-block` cli will create a new ready to use WordPress plugin.

```shell
npm create-guten-block my-block
cd my-block
npm run dev
```

![Create-guten-block](http://on.ahmda.ws/okiU/c)

Then open your WordPress installation with Gutenberg plugin active and activate the `CGB: my-block Gutenberg Block` plugin you just created.
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

## Get Started Immediately

You don’t need to install or configure tools like Webpack or Babel.
They are preconfigured so that you can focus on the code.

Just create a project, and you’re good to go.

## Changelog

### VERSION 1.0.1

Work in progress.

### VERSION 1.0.0

- ⚡️ NEW: NPM Module `create-guten-block`
- ⚡️ NEW: Create WordPress plugin folder
- ⚡️ NEW: Building WordPress plugin files
- ⚡️ NEW: Build custom Gutenberg Block
- ⚡️ NEW: Basic Webpack configurations
- ⚡️ NEW: Dynamic WP Pluing and Gutenberg Block Names

### Docs Init

- Install globally `npm install --globally create-guten-block` (Run the same command again to update).
-