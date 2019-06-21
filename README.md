<div align="center">
	<img width="300" src="https://on.ahmda.ws/osSb/c" alt="CGB Create Guten Block by Ahmad Awais">
	<br>
	<img src="https://on.ahmda.ws/orxb/c" alt="Create Guten Block">
	<br>
	<br>


[![npm](https://img.shields.io/npm/v/create-guten-block.svg?style=flat-square)](https://www.npmjs.com/package/create-guten-block) [![npm](https://img.shields.io/npm/dt/create-guten-block.svg?style=flat-square&label=downloads)](https://www.npmjs.com/package/create-guten-block) [![emoji-log](https://cdn.rawgit.com/ahmadawais/stuff/ca97874/emoji-log/flat.svg)](https://github.com/ahmadawais/Emoji-Log/) [![Tweet for help](https://img.shields.io/twitter/follow/mrahmadawais.svg?style=social&label=Tweet%20@MrAhmadAwais)](https://twitter.com/mrahmadawais/) [![GitHub stars](https://img.shields.io/github/stars/ahmadawais/create-guten-block.svg?style=social&label=Stars)](https://github.com/ahmadawais/create-guten-block/stargazers) [![GitHub followers](https://img.shields.io/github/followers/ahmadawais.svg?style=social&label=Follow)](https://github.com/ahmadawais?tab=followers) [![VSCode.pro](https://img.shields.io/badge/Supported%20by-VSCode%20Power%20User%20Course%20%E2%86%92-gray.svg?colorA=444444&colorB=4F44D6&style=flat-square)](https://VSCode.pro "This open source project is supported by VSCode.pro") 



<table width='100%' align="center">
    <tr align='center'>
        <td align='center' width='100%' colspan='2'>
           <strong><code>create-guten-block</code></strong><br />
            📦 A zero-configuration developer toolkit for building WordPress Gutenberg block plugins..
        </td>
    </tr>
    <tr align='center' >
        <td align='center'>
            A FOSS (Free & Open Source Software) project. Maintained by <a href='https://github.com/ahmadawais'>@AhmadAwais</a>.
        </td>
        <td align='center'>
            <a href='https://twitter.com/MrAhmadAwais/'>
                <img src='https://img.shields.io/badge/→-AHMAD%20AWAIS-gray.svg?colorB=1F6BFF&style=flat' width='100' />
            </a>
        </td>
    </tr>
<tr align='center'  width='100%'><td align='center'><sup> Follow Ahmad's #FOSS work on GitHub <a href='https://github.com/ahmadawais'>@AhmadAwais</a> —   Say Hi on Twitter <a href="https://twitter.com/mrahmadawais/">@MrAhmadAwais</a></sup></td><td align='center'>🙌</td></tr>
</table>

</div>


<br>

# 📦 `create-guten-block`

>`create-guten-block` is _zero configuration dev-toolkit_ (#0CJS) to develop WordPress Gutenberg blocks in a matter of minutes without configuring `React`, `webpack`, `ES6/7/8/Next`, `ESLint`, `Babel`, etc.

Create Guten Block is not like other [starter-kits](https://github.com/ahmadawais/wpgulp) or [boilerplates](https://github.com/ahmadawais/Gutenberg-boilerplate). It's a developer's toolbox which is continuously updated. Since it has zero-configuration, you can always update it without any changes in your code.

`create-guten-block` is:
- 🥞 Versioned ✓
- 🤠 Updatable ✓
- 🗃 Set of sane-defaults ✓
- 🐎 ONE single `cgb-scripts` dependency ✓

<br>

![Start](https://on.ahmda.ws/osd3/c)

## GETTING STARTED!

Let's create a WordPress block plugin...

#### ⚡️ Quick Overview

Run step `#1` and `#2` quickly in one go — Run inside local WP install   E.g. `/wp.local/wp-content/plugins/` directory.
```sh
npx create-guten-block my-block
cd my-block
npm start
```
([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/ahmadawais/e4c69b22561c7079c9d99faba90e3b23))


> 🎛   _If you want to study the detailed installation of step `#1` and `#2` — then take a look at the steps below_.


<details>
 <summary><strong> STEP #0</strong> — Don't have <code>Node.js</code> + <code>npm</code> installed? Read this. (CLICK TO EXPAND!)</summary>

In case you are an absolute beginner to the world of `Node.js`, JavaScript, and `npm` packages — all you need to do is go to the Node's site [download + install](https://nodejs.org/en/download/) Node on your system. This will install both `Node.js` and `npm`, i.e., node package manager — the command line interface of Node.js.

You can verify the install by opening your terminal app and typing...

```sh
node -v
# Results into v9.1.0 — make sure you have Node >= 8 installed.

npm -v
# Results into 5.6.0 — make sure you have npm >= 5.3 installed.
```

</details>

### → STEP #1

All you have to do is run the following command and it will create a WordPress block plugin. It's done by installing and running the `create-guten-block` command and providing it with a unique name for a WordPress plugin that will get created.


> ⚠️ Make sure run this command in your local WordPress install's plugins folder i.e. `/local_dev_site.tld/wp-content/plugins/` folder — since this command will produce a WordPress plugin that you can go to `WP Admin` ▶︎ `Plugins` to activate.

```sh
npx create-guten-block my-block
```
([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/ahmadawais/e4c69b22561c7079c9d99faba90e3b23))

![npx block](https://on.ahmda.ws/p89T/c)

_It'll take a couple of minutes to install._

>You’ll need to have Node >= 8 and npm >= 5.3 on your local development machine (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to easily switch Node versions between different projects.

It will create a directory called `my-block` inside the current folder.
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```sh
INSIDE: /local_dev_site.tld/wp-content/plugins/my-block

├── .gitignore
├── plugin.php
├── package.json
├── README.md
|
├── dist
|  ├── blocks.build.js
|  ├── blocks.editor.build.css
|  └── blocks.style.build.css
|
└── src
   ├── block
   |  ├── block.js
   |  ├── editor.scss
   |  └── style.scss
   |
   ├── blocks.js
   ├── common.scss
   └── init.php
```
No configuration or complicated folder structures, just the files you need to build your app.

### → STEP #2

Once the installation is done, you can open your project folder and run the start script.

_Let's do that._

```sh
cd my-block
npm start
```
_You can also use `yarn start` if that's your jam_.

![cgb-npm-start](https://on.ahmda.ws/orrh/c)

This runs the plugin in development mode. To produce production code run `npm run build`.
You will see the build messages, errors, and lint warnings in the console.

>And just like that, you're building your next WordPress plugin with Gutenberg, React.js, ES 6/7/8/Next, transpiled with Babel, which also has ESLint configurations for your code editor to pick up and use automatically.

<br>

![More](https://on.ahmda.ws/orsm/c)

### Workflow!

There are just three scripts that you can use in your `create-guten-block` workflow. With these three scripts, you can develop, build, and eject your plugin.

#### 👉  `npm start`
- Use to compile and run the block in development mode.
- Watches for any changes and reports back any errors in your code.

#### 👉  `npm run build`
- Use to build production code for your block inside `dist` folder.
- Runs once and reports back the gzip file sizes of the produced code.

#### 👉  `npm run eject`
- Use to eject your plugin out of `create-guten-block`.
- Provides all the configurations so you can customize the project as you want.
- It's a one-way street, `eject` and you have to maintain everything yourself.
- You don't normally have to `eject` a project because by ejecting you lose the connection with `create-guten-block` and from there onwards you have to update and maintain all the dependencies on your own.

_That's about it._

<br>

![included](https://on.ahmda.ws/orOe/c)

## What’s Included?

Your environment will have everything you need to build a modern next-gen WordPress Gutenberg plugin:

* React, JSX, and ES6 syntax support.
* webpack dev/production build process behind the scene.
* Language extras beyond ES6 like the object spread operator.
* Auto-prefixed CSS, so you don’t need `-webkit` or other prefixes.
* A build script to bundle JS, CSS, and images for production with source-maps.
* Hassle-free updates for the above tools with a single dependency `cgb-scripts`.

The tradeoff is that **these tools are preconfigured to work in a specific way**. If your project needs more customization, you can ["eject"](https://github.com/ahmadawais/create-guten-block#--npm-run-eject) and customize it, but then you will need to maintain this configuration.


<br>

![Philosophy](https://on.ahmda.ws/orq5/c)

## Philosophy

* **One Dependency:** There is just one build dependency. It uses webpack, Babel, ESLint, and other amazing projects, but provides a cohesive curated experience on top of them.

* **No Configuration Required:** You don't need to configure anything. A reasonably good configuration of both development and production builds is handled for you so you can focus on writing code.

* **No Lock-In:** You can `eject` to a custom setup at any time. Run a single command, and all the configuration and build dependencies will be moved directly into your project, so you can pick up right where you left off.

<br>

![Why](https://on.ahmda.ws/orvy/c)

## Why `create-guten-block`?

Well, it's really hard to configure things like webpack, React, ES 6/7/8/Next, ESLint, Babel, etc. before you even start writing a Hello World gutenberg block. Then there's the fact that you have to maintain and constantly update your configuration with all the new tools and growth in the JavaScript community.

`create-guten-block` hides all this configuration away in an optimized package that we call `cgb-scripts`. This package is the only dependency in your projects. We keep `cgb-scripts` up to date while you go ahead and create the next best WordPress themes and plugins.

<br>

![tldr](https://on.ahmda.ws/osPO/c)

## TL;DR

>Too long, didn't read? Here's a shorter version.

Open the terminal app and run the following commands.

- 🔰 **Install/Create**: `npx create-guten-block my-block` — Run inside local WP install   E.g. `/wp.local/wp-content/plugins/` directory.
- 📂 **Browse**: `cd my-block` — Open the newly created plugin directory.
- ♻️ **Run**: `npm start` — For development.
- 📦 **Run**: `npm run build` — For production build.
- ⏏ **Run**: `npm run eject` — To customize, update, and maintain all by yourself.

Create-Guten-Block has been tested to work on macOS, but must also work on Windows, and Linux.
If something doesn’t work, kindly file [an issue →](https://github.com/ahmadawais/create-guten-block/issues/new)

<!-- ![Create-guten-block](https://on.ahmda.ws/okiU/c) -->

<br>

![update](https://on.ahmda.ws/osO7/c)

## Updating to New Releases

Create Guten Block is divided into two packages:

1. **`create-guten-block`** is a command-line utility that you use to create new WP Gutenberg plugins.
1. **`cgb-scripts`** is a development dependency in the generated plugin projects.

You never need to update `create-guten-block` itself as it's run via [`npx`](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) and it delegates all the setup to `cgb-scripts`.

When you run `create-guten-block`, it always creates the project with the latest version of `cgb-scripts` so you’ll get all the new features and improvements in newly created plugins automatically.

To update an existing project to a new version of `cgb-scripts`, open the [changelog](https://github.com/ahmadawais/create-guten-block#changelog), find the version you’re currently on (check package.json in your plugin's folder if you’re not sure), and apply the migration instructions for the newer versions.

In most cases bumping the `cgb-scripts` version in package.json and running `npm install` in this folder should be enough, but it’s good to consult the [changelog](https://github.com/ahmadawais/create-guten-block#changelog) for potential breaking changes.

We commit to keeping the breaking changes minimal so you can upgrade `cgb-scripts` painlessly.

<br>

![Log](https://on.ahmda.ws/osUz/c)

## Changelog

Read what's 📦 new, 👌 improved, 🐛 fixed, and  if 📖 docs got updated.

👉 Go read the entire changelog at this link — [CGB Changelog →](https://github.com/ahmadawais/create-guten-block/blob/master/CHANGELOG.md)

Nothing's ever complete, so bear with us while we keep iterating towards a better future.

> ```html
> 'Coz every night I lie in bed
> The brightest colors fill my head
> A million dreams are keeping me awake
> I think of what the world could be
> A vision of the one I see
> A million dreams is all it's gonna take
> A million dreams for the world we're gonna make ...
> ```
> ... _listen to → [A million dreams!](https://www.youtube.com/watch?v=pSQk-4fddDI)_


<br>

![Hello](https://on.ahmda.ws/os6O/c)

#### **Hello, we're the [WordPress Couple](https://TheDevCouple.com)**!

I ([Ahmad Awais](https://twitter.com/mrahmadawais/)) am a Full Stack Web Developer and a regular core contributor at WordPress. My significant other ([Maedah Batool](https://twitter.com/MaedahBatool/)) is a Technical Project Manager, and she's also a WordPress Core Contributor. Together with our [team](https://TheDevCouple.com/team), we run the [TheDevCouple.com](https://TheDevCouple.com/).

If you'd like to get insights into our love for open source software, professional full stack development, WordPress community, the growth of JavaScript or growing a family, building, and bootstrapping a business, then subscribe to our premium newsletter called ↣ [The WordPress Takeaway](https://WPTakeaway.club)!

#### [**Support our Open Source Projects!**](https://pay.paddle.com/checkout/515568) 🎩

If you'd like us to keep producing professional free and open source software (FOSS). Consider [paying for an hour of my dev-time](https://pay.paddle.com/checkout/515568). We'll spend two hours on open source for each contribution. Yeah, that's right, you pay for one hour and get both of us to spend an hour as a thank you.

- 🌟  **RECOMMENDED**: $9.99/month — [Two coffees every month →](https://pay.paddle.com/checkout/540217)
- 🚀  **ONE TIME**: $99.99 — [Support for one hour or more →](https://pay.paddle.com/checkout/515568)
- 🔰  **ONE TIME**: $49.99 — [Support half an hour maintenance →](https://pay.paddle.com/checkout/527253)
- ☕️  **ONE TIME**: $9.99 — [Buy us lunch or coffee to keep us trucking #OpenSource →](https://pay.paddle.com/checkout/527254)

<br>

![Partners](https://on.ahmda.ws/osEJ/c)

### Project Backers & [TheDevCouple Partners](https://TheDevCouple.com/partners) ⚡️

This FOSS (free and open source software) project is updated and maintained with the help of awesome businesses listed below. Without the support from these amazing companies/individuals, this project would not have been possible.

— _What/How? [Read more about it →](https://TheDevCouple.com/partners)_

<table width='100%'>
	<tr>
		<td width='500'><a target='_blank' href='https://kinsta.com/?kaid=WMDAKYHJLNJX&utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/73cedc/c' /></a></td>
		<td width='500'><a target='_blank' href='https://ahmda.ws/USES_WPE?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/ff40fe/c' /></a></td>
	</tr>
	<tr>
		<td width='500'><a target='_blank' href='https://mythemeshop.com/?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/3166d9/c' /></a></td>
		<td width='500'><a target='_blank' href='https://ipapi.co/?utm_source=WPCouple&utm_medium=Partner'><img src='https://d2ddoduugvun08.cloudfront.net/items/1R190r2U0p3N3L0U0b2u/ip-api.png'/></a></td>
	</tr>
</table>
<br>

![Thanks](https://on.ahmda.ws/orkW/c)

## License & Attribution

MIT © [Ahmad Awais](https://AhmadAwais.com/).

This project is inspired by the work of more people than I could mention here. But thank you, [Dan Abramov](https://twitter.com/dan_abramov) for Create React App, [Andrew Clark](https://twitter.com/acdlite), and [Christopher Chedeau](https://twitter.com/vjeux), [Sophie Alpert](https://twitter.com/sophiebits) from React.js team, [Kent C. Dodds](https://twitter.com/kentcdodds) for his open source evangelism, WordPress Core Contributors, [Gary](https://twitter.com/GaryPendergast) for keeping everyone sane, [Gutenberg](https://github.com/wordpress/gutenberg) developers [Matias](https://twitter.com/matias_ventura), [Riad](https://github.com/youknowriad), [Andrew](https://github.com/aduth), [Ella](https://twitter.com/ellaiseulde), [Joen](https://github.com/jasmussen), [Tammie](https://twitter.com/karmatosed), [Greg](https://twitter.com/gziolo) and contributors, and other WordPress community members like [Zac](https://twitter.com/zgordon) for his [course on Gutenberg](https://ahmda.ws/ZacGutenbergCourse), and also my friend [Morten](https://twitter.com/mor10) for all the #Guten-motivation, [Icons8](https://icons8.com/) for the awesome icons, [Maedah](https://twitter.com/MaedahBatool/) for managing this project, and to everyone I forgot.


_Follow me 👋 on Twitter_ →  [![Tweet to say Hi](https://img.shields.io/twitter/follow/mrahmadawais.svg?style=social&label=Tweet%20@MrAhmadAwais)](https://twitter.com/mrahmadawais/)

<br />
<br />
<p align="center">
<strong>For anything else, tweet at <a href="https://twitter.com/MrAhmadAwais/" target="_blank" rel="noopener noreferrer">@MrAhmadAwais →</a></strong>
</p>

<div align="center">
	I have released a video course to help you become a better developer — <a href="https://VSCode.pro/?utm_source=GitHubFOSS" target="_blank">Become a VSCode Power User →</a>
  <a href="https://VSCode.pro/?utm_source=GitHubFOSS" target="_blank">
  <img src="https://raw.githubusercontent.com/ahmadawais/shades-of-purple-vscode/master/images/vscodeproPlay.jpg" /><br>VSCode</a>

  _<small><a href="https://VSCode.pro/?utm_source=GitHubFOSS" target="_blank">VSCode Power User Course →</a></small>_
</div>
