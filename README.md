# Create-Guten-Block

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

Then open your WordPress installation with Gutenberg plugin active and activate the `CGB: my-block Gutenberg Block` plugin you just created.
When you’re ready to deploy to production, create a minified bundle with `npm run build`.