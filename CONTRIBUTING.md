# CONTRIBUTING to `create-guten-block`

First of all, I'd like to welcome you for thinking about contributing to this project. I'd rather explain the flow of this project and explain all that in a later release (as right now I am focused at an early release).


- `git clone https://github.com/ahmadawais/create-guten-block/`
- `yarn` or `sudo yarn`
    - Installs all the node packages and deps/devDeps in all the workspaces.
- `yarn create-guten-block demo-block`
    - This will run `tasks/cgb.js` file
    - Which will run `./packages/create-guten-block/index.js`
    - Which in turns runs `./packages/create-guten-block/createGutenBlock.js`
    - That runs these functions
        - `createPluginDir()`
        - `copyTemplateToPluginDir()`
        - `npmInstallBuild`
        - And your new block plugin called `demo-block` gets added at the root of this project.
- Now go to `cd demo-block`
- Run `npm start` or `yarn start`
- This will compile your code in `dist` and you're good to go.