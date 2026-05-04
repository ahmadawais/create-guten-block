# CONTRIBUTING to `create-guten-block`

First of all, I'd like to welcome you for thinking about contributing to this project. I'd rather explain the flow of this project and explain all that in a later release.

## 🔥 TL;DR

- Git Clone `git clone https://github.com/ahmadawais/create-guten-block/`
- `yarn`
- `yarn create-guten-block demo-block`
- `yarn updated`

## 📖 Details

- `git clone https://github.com/ahmadawais/create-guten-block/`
- `yarn` or `sudo yarn`
    - Installs all the node packages and deps/devDeps in all the workspaces.
- `yarn create-guten-block demo-block`
    - This will run `tasks/cgb.js` file
    - Which will run `./packages/create-guten-block/index.js`
    - And your new block plugin called `demo-block` gets added at the root of this project (which you should delete after testing).
- Now go to `cd demo-block`
- Run `npm start` or `yarn start`
- This will compile your code in `dist` and you're good to go.
- Run `yarn updated` to check which npm packages were updated
- Finally publish with 'yarn publishNPM' since yarn has some issues with publishing with lerna not sure why.
- Check caveats for publishing.

### 🤔 Caveats

- Some issue with yarn not being able to publish via lerna
- Use yarn with everything else but lerna
- To publish always run via `npm` this command `npm run lerna` (Only for maintainers)


### 🐵 Other Stuff

- Use `// @remove-file-on-eject` to do just that.
- Use `// @remove-on-eject-begin` to do just that.
- Use `// @remove-on-eject-end` to do just that.

### 🌟 Always use Emoji Log Messages

What is that? I like emoji and I have invented a way to keep the git log clean and simple. Read this [Emoji-log](https://github.com/ahmadawais/Emoji-Log) to learn more.

### 🎯 New Workflow

There's a new workflow for core developers of `create-guten-block`.

- Git Clone `git clone https://github.com/ahmadawais/create-guten-block/`
- You need to have both `yarn` and `npm` then run `yarn` in the root of  `create-guten-block` folder
- You also need publishing access to all the `npm` packages in CGB so ask for that from @AhmadAwais
- Now create your branch `git checkout -b githubname/feaure` and commit all changes in it
- Then publish all changes as `canary` changes which are not distrubted to production sites and are meant for testing while developing `npm` packages.
- To publish canary package run `npm run releaseCanary` type `y` to confirm
- Now you can test changes by using `-c` or `--canary` flag `npx create-guten-block blockName -c`
- I recommend that you run the latest `create-guten-block` CLI if you changed anything there. You can do that by installing the latest `create-guten-block` that you published as canary e.g. `npx create-guten-block@1.12.0-alpha.148a0211 -c blockName`
