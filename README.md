>🚧 **WORK IN PROGRESS!** 🚧

>DO NOT INSTALL OR DOWNLOAD UNTIL I REMOVE THIS NOTICE.

> Launching `2018-01-16` ‼️

---
<br><br><br>

![CGB-logo](http://on.ahmda.ws/orxb/c)

<table width='100%'>
    <tr>
        <td align='left' width='100%' colspan='2'>
            <strong><code>create-guten-block</code></strong><br />
            A zero-configuration developer toolkit for building WordPress Gutenberg block plugins.
        </td>
    </tr>
    <tr>
        <td>
            A FOSS (Free & Open Source Software) project developed by <a href='https://github.com/ahmadawais'>Ahmad Awais</a>.
        </td>
        <td align='center'>
            <a href='https://AhmadAwais.com/'>
                <img src='https://i.imgur.com/Asg4d3k.png' width='100' />
            </a>
        </td>
    </tr>
    <tr><td><sup> Follow Ahmad's #FOSS work on GitHub <a href='https://github.com/ahmadawais'>@AhmadAwais</a> —   Say Hi on Twitter <a href="https://twitter.com/mrahmadawais/">@MrAhmadAwais</a></sup></td><td  align='center'>👋</td></tr>
</table>
<br>

# 📦 `create-guten-block`

>`create-guten-block` is _zero configuration dev-toolkit_ to develop WordPress Gutenberg blocks in a matter of minutes without configuring `React`, `Webpack`, `ES6/7/8/Next`, `ESLint`, `Babel`, etc.

Create Guten Block is not like other [starter-kits](https://github.com/ahmadawais/wpgulp) or [boilerplates](https://github.com/ahmadawais/Gutenberg-boilerplate). It's a developer's toolbox which is constantly updated. Since it has zero-configurations, you can always update it without any changes in your code.

`create-guten-block` is:
- Versioned ✓
- Updatable ✓
- Set of sane-defaults ✓
- ONE single `cgb-scripts` dependency ✓



<br>

![Start](http://on.ahmda.ws/osd3/c)

## GETTING STARTED!

It's really easy to get started with `create-guten-block`. Just install it as a global module and run it to create your next-gen Gutenberg block plugin for WordPress.

_Let's get you started!_

<details>
 <summary><strong> STEP #0</strong> — If you don't have <code>Node.js</code> + <code>npm</code> installed then read this. (CLICK TO EXPAND!)</summary>

In case you are an absolute beginner to the world of `Node.js`, JavaScript, and `npm` packages — all you need to do is go to the Node's site [download + install](https://nodejs.org/en/download/) Node on your system. This will install both `Node.js` and `npm` i.e. node package manager — the command line interface of Node.js.

You can verify the install by opening your terminal app and typing...

```sh
node -v
# Results into v9.1.0 — make sure you have Node >= 8 installed.

npm -v
# Results into 5.6.0 — make sure you have npm >= 5.2 installed.
```

</details>

### ⚙ STEP #1

Install `create-guten-block` globally on your system.

You’ll need to have Node >= 8 on your local development machine (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to easily switch Node versions between different projects.


```sh
npm install create-guten-block --global
```

_It'll take a couple of minutes to install._

### ⚙ STEP #2

Now all you have to do is create a gutenberg block and start building. It's done by running `create-guten-block` command and providing it with a unique name for a WordPress plugin that will get created.

> ⚠️ Make sure run this command in your local WordPress install's plugins folder i.e. `/local_dev_site.tld/wp-content/plugins/` folder — since this command will produce a WordPress plugin that you can go to `WP Admin` ▶︎ `Plugins` to activate.

```sh
create-guten-block my-block
```

It will create a directory called `my-block` inside the current folder.
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```sh
INSIDE: /local_dev_site.tld/wp-content/plugins/my-block

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

### ⚙ STEP #3

Once the installation is done, you can open your project folder and run the start script.

_Let's do that._

```sh
cd my-block
npm start
```
_You can also use `yarn start` if that's your jam_

This runs the plugin in development mode.
You will see the build messages, errors, and lint warnings in the console.

>And just like that you're building your next WordPress plugin with Gutenberg, React.js, ES 6/7/8/Next, transpiled with Babel, which also has ESLint configurations for your code editor to automatically pick up and use.

<br>

![More](http://on.ahmda.ws/orsm/c)

### Workflow!

There are just three scripts that you can use in your `create-guten-block` workflow. With these three scripts you can develop, build, and eject your plugin.


#### 👉  `npm start`
- Use to compile and run the block in development mode.
- Watches for any changes and reports back any errors in your code.

#### 👉  `npm run build`
- Use to build production code for your block inside `dist` folder.
- Runs once and reports back the gzip file sizes of the produced code.

#### 👉  `npm run eject`
- Use to eject your plugin out of `create-guten-block`.
- Provides all the configurations so you can customize the project as you want.
- It's a one way street, `eject` and you have to maintain everything yourself.
- You don't normally have to `eject` a project because by ejecting you lose the connection with `create-guten-block` and from there onwards you have to update and maintain all the dependencies on your own.

_That's about it._

<br>

![included](http://on.ahmda.ws/orOe/c)

## What’s Included?

Your environment will have everything you need to build a modern next-gen WordPress Gutenberg plugin:

* React, JSX, and ES6 syntax support.
* Webpack dev/production build process behind the scene.
* Language extras beyond ES6 like the object spread operator.
* Auto-prefixed CSS, so you don’t need `-webkit` or other prefixes.
* A build script to bundle JS, CSS, and images for production with source-maps.
* Hassle-free updates for the above tools with a single dependency `cgb-scripts`.

The tradeoff is that **these tools are preconfigured to work in a specific way**. If your project needs more customization, you can ["eject"](https://github.com/ahmadawais/create-guten-block#--npm-run-eject) and customize it, but then you will need to maintain this configuration.


<br>

![Philosophy](http://on.ahmda.ws/orq5/c)

## Philosophy

* **One Dependency:** There is just one build dependency. It uses Webpack, Babel, ESLint, and other amazing projects, but provides a cohesive curated experience on top of them.

* **No Configuration Required:** You don't need to configure anything. Reasonably good configuration of both development and production builds is handled for you, so you can focus on writing code.

* **No Lock-In:** You can `eject` to a custom setup at any time. Run a single command, and all the configuration and build dependencies will be moved directly into your project, so you can pick up right where you left off.

<br>

![Why](http://on.ahmda.ws/orvy/c)

## Why `create-guten-block`?

Well, it's really hard to configure things like Webpack, React, ES 6/7/8/Next, ESLint, Babel, etc. before you even start writing a Hello World gutenberg block. Then there's the fact that you have to maintain and constantly update your configuration with all the new tools and growth in the JavaScript community.

`create-guten-block` hides all this configuration away in an optimized pacakge that we call `cgb-scripts`. This package is the only dependency in your projects. We keep `cgb-scripts` up to date while you go ahead and create the next best WordPress themes and plugins.

<br>

![tldr](http://on.ahmda.ws/osPO/c)

## TL;DR

>Too long, didn't read? Here's a shorter version.

Open the terminal app and run the following commands.

- **Install/Update**: `npm install create-guten-block --global`
- **Create**: `create-guten-block my-block` — Run inside local WP install   E.g. `/wp.local/wp-content/plugins/` directory.
- **Browse**: `cd my-block` — Open the newly created plugin directory.
- **Run**: `npm start` — For development.
- **Run**: `npm run build` — For production build.
- **Run**: `npm run eject` — To customize, update, and maintain all by yourself.

Create-Guten-Block has been tested to work on macOS, but must also work on Windows, and Linux.
If something doesn’t work, kindly file [an issue →](https://github.com/ahmadawais/create-guten-block/issues/new)

<!-- ![Create-guten-block](http://on.ahmda.ws/okiU/c) -->

<br>

![update](http://on.ahmda.ws/osO7/c)

## Updating to New Releases

Create Guten Block is divided into two packages:

1. **`create-guten-block`** is a global command-line utility that you use to create new WP Gutenberg plugins.
1. **`cgb-scripts`** is a development dependency in the generated plugin projects.

<!-- You almost never need to update `create-guten-block` itself: it delegates all the setup to `cgb-scripts`. -->

When you run `create-guten-block`, it always creates the project with the latest version of `cgb-scripts` so you’ll get all the new features and improvements in newly created plugins automatically.

To update an existing project to a new version of `cgb-scripts`, open the [changelog](https://github.com/ahmadawais/create-guten-block#changelog), find the version you’re currently on (check package.json in your plugin's folder if you’re not sure), and apply the migration instructions for the newer versions.

In most cases bumping the `cgb-scripts` version in package.json and running `npm install` in this folder should be enough, but it’s good to consult the [changelog](https://github.com/ahmadawais/create-guten-block#changelog) for potential breaking changes.

We commit to keeping the breaking changes minimal so you can upgrade `cgb-scripts` painlessly.

<br>

![Log](http://on.ahmda.ws/osUz/c)

## Changelog

Read what's 📦 new, 👌 improved, 🐛 fixed, and  if 📖 docs got updated.

👉 Go read the entire changelog at this link — [CGB Changelog →](https://github.com/ahmadawais/create-guten-block/blob/master/CHANGELOG.md)

Nothing's ever complete, so bear with while we keep iterating towards a better future.

>   'Cause every night I lie in bed
    The brightest colors fill my head
    A million dreams are keeping me awake
    I think of what the world could be
    A vision of the one I see
    A million dreams is all it's gonna take
    A million dreams for the world we're gonna make ...
    ... _listen to → [A million dreams!](https://www.youtube.com/watch?v=pSQk-4fddDI)_

<br>

![Hello](http://on.ahmda.ws/os6O/c)

#### **Hello, we're the [WordPress Couple](https://WPCouple.com)**!

I ([Ahmad Awais](https://twitter.com/mrahmadawais/)) am a Full Stack Web Developer and a regular core contributor at WordPress. My significant other ([Maedah Batool](https://twitter.com/MaedahBatool/)) is a Technical Project Manager and she's also a WordPress Core Contributor. Together with our [team](https://WPCouple.com/team) we run the [WPCouple.com](https://WPCouple.com/).

If you'd like to get insights into our love for open source software, professional full stack development, WordPress community, growth of JavaScript or growing a family, building, and bootstrapping a business then subscribe to our premium newsletter called ↣ [The WordPress Takeaway](https://WPTakeaway.club)!

#### [**Support our Open Source Projects!**](https://pay.paddle.com/checkout/515568) 🎩

If you'd like us to keep producing professional free and open source software (FOSS). Consider [paying for an hour of my dev-time](https://pay.paddle.com/checkout/515568). We'll spend two hours on open source for each contribution. Yeah, that's right, you pay for one hour and get both of us to spend an hour as a thank you.

<br>

![Partners](http://on.ahmda.ws/osEJ/c)

### Project Backers & [WPCouple Partners](https://WPCouple.com/partners) ⚡️

This FOSS (free and open source software) project is updated and maintained by the help of awesome businesses listed below. Without the support from these amazing companies/individuals, this project would not have been possible.

— _What/How? [Read more about it →](https://WPCouple.com/partners)_

<table width='100%'>
	<tr>
		<td width='333.33'><a target='_blank' href='https://www.gravityforms.com/?utm_source=WPCouple&utm_medium=Partner'><img src='http://on.ahmda.ws/mtrE/c' /></a></td>
		<td width='333.33'><a target='_blank' href='https://kinsta.com/?utm_source=WPCouple&utm_medium=Partner'><img src='http://on.ahmda.ws/mu5O/c' /></a></td>
		<td width='333.33'><a target='_blank' href='https://wpengine.com/?utm_source=WPCouple&utm_medium=Partner'><img src='http://on.ahmda.ws/mto3/c' /></a></td>
	</tr>
	<tr>
		<td width='333.33'><a target='_blank' href='https://www.sitelock.com/?utm_source=WPCouple&utm_medium=Partner'><img src='http://on.ahmda.ws/mtyZ/c' /></a></td>
		<td width='333.33'><a target='_blank' href='https://wp-rocket.me/?utm_source=WPCouple&utm_medium=Partner'><img src='http://on.ahmda.ws/mtrv/c' /></a></td>
		<td width='333.33'><a target='_blank' href='https://blogvault.net/?utm_source=WPCouple&utm_medium=Partner'><img src='http://on.ahmda.ws/mtph/c' /></a></td>
	</tr>
	<tr>
		<td width='333.33'><a target='_blank' href='http://cridio.com/?utm_source=WPCouple&utm_medium=Partner'><img src='http://on.ahmda.ws/mtmy/c' /></a></td>
		<td width='333.33'><a target='_blank' href='http://wecobble.com/?utm_source=WPCouple&utm_medium=Partner'><img src='http://on.ahmda.ws/mtrW/c' /></a></td>
		<td width='333.33'><a target='_blank' href='https://www.cloudways.com/?utm_source=WPCouple&utm_medium=Partner'><img src='http://on.ahmda.ws/mu0C/c' /></a></td>
	</tr>
	<tr>
		<td width='333.33'><a target='_blank' href='https://www.cozmoslabs.com/?utm_source=WPCouple&utm_medium=Partner'><img src='http://on.ahmda.ws/mu9W/c' /></a></td>
		<td width='333.33'><a target='_blank' href='https://wpgeodirectory.com/?utm_source=WPCouple&utm_medium=Partner'><img src='http://on.ahmda.ws/mtwv/c' /></a></td>
		<td width='333.33'><a target='_blank' href='https://www.wpsecurityauditlog.com/?utm_source=WPCouple&utm_medium=Partner'><img src='http://on.ahmda.ws/mtkh/c' /></a></td>
	</tr>
	<tr>
		<td width='333.33'><a target='_blank' href='https://mythemeshop.com/?utm_source=WPCouple&utm_medium=Partner'><img src='http://on.ahmda.ws/n3ug/c' /></a></td>
		<td width='333.33'><a target='_blank' href='https://www.liquidweb.com/?utm_source=WPCouple&utm_medium=Partner'><img src='http://on.ahmda.ws/mtnt/c' /></a></td>
		<td width='333.33'><a target='_blank' href='https://WPCouple.com/contact?utm_source=WPCouple&utm_medium=Partner'><img src='http://on.ahmda.ws/mu3F/c' /></a></td>
	</tr>
</table>

<br>

![Thanks](http://on.ahmda.ws/orkW/c)

## License & Attribution

MIT © [Ahmad Awais](https://AhmadAwais.com/).

This project is inspired by the work of more people than I could mention here. But thank you [Dan Abramov](https://twitter.com/dan_abramov) for Create React App, [Andrew Clark](https://twitter.com/acdlite), [Sophie Alpert](https://twitter.com/sophiebits) from React.j team, [Wes Bos](https://twitter.com/wesbos) for awesome courses for [React](https://ReactForBeginners.com/friend/AHMADAWAIS), [ES6](https://ES6.io/friend/AHMADAWAIS), and [Node](https://LearnNode.com/friend/AHMADAWAIS) beginners. [Kent C. Dodds](https://twitter.com/kentcdodds) for his open source evangelism, [Matias](https://twitter.com/matias_ventura), [Riad](https://github.com/youknowriad), [Andrew](https://github.com/aduth), [Joen](https://github.com/jasmussen), [Greg](https://twitter.com/gziolo), WordPress Core Contributors, [Gary](https://twitter.com/GaryPendergast) for keeping everyone sane, [Gutenberg](http://github.com/wordpress/gutenberg) developers and contributors, [Morten](https://twitter.com/mor10) for motivation, [Icons8](https://icons8.com/) for the awesome icons, [Maedah](https://twitter.com/MaedahBatool/) for managing this project, and to everyone I forgot.
