>🚧 **WORK IN PROGRESS!** 🚧
>DO NOT INSTALL OR DOWNLOAD UNTIL I REMOVE THIS NOTICE.

![CGB-logo](http://on.ahmda.ws/orxb/c)

<table width='100%'>
    <tr>
        <td align='left' width='100%' colspan='2'>
            <strong><code>create-guten-block</code></strong><br />
            A zero-configuration developer toolkit for building WordPress Gutenberg block plugins with React, Webpack, ES 6/7/8/Next, ESLint, Babel, etc.
        </td>
    </tr>
    <tr>
        <td>
            A FOSS (Free & Open Source Software) project developed by Ahmad Awais. <br/><small> 🙌 Follow Ahmad on GitHub (<a href='https://github.com/ahmadawais'>@AhmadAwais</a>)  OR  👋 Say Hi on Twitter (<a href="https://twitter.com/mrahmadawais/">@MrAhmadAwais</a>).</small>
        </td>
        <td align='center'>
            <a href='https://AhmadAwais.com/'>
                <img src='https://i.imgur.com/Asg4d3k.png' width='100' />
            </a>
        </td>
    </tr>
</table>

# 📦 Create-Guten-Block

Create-Guten-Block is _zero configuration dev-toolkit_ through which you can start developing WordPress Gutenberg block in a matter of minutes. It's not like other starter-kits or boilerplates. It's a versioned, updateable, sane-defaults CLI utility which is constantly updated.

## 👌 GETTING STARTED!

It's really easy to get started with `create-guen-block`. Just install it as a global module and you're in business. Let's start by doing that.


<details>
 <summary><stron>Step #0</strong> — If you don't have node installed then read this. (CLICK TO EXPAND!)</summary>

In case you are an absolute beginner to the world of Node.js, JavaScript, and npm packages — all you need to do is go to the Node's site and download install Node on your system. This will install both Node.js and `npm` i.e. node package manager — the command line interface of Node.js.
</details>

###  Step #1

Install `create-guen-block` globally on your system. Make sure you are using at least Node >= 8. You can use nvm to use different versions of Node at the same time.

```sh
npm install --global create-guen-block
```

###  Step #2

Now all you have to do is create a gutenberg block and start building. It's done by running `create-guen-block` and providing it with a unique name for a WordPress plugin that will get created.

```sh
create-guen-block my-block
```

> Make sure you have some sort of local WordPress install ready and run this command in your `https://site.local/wp-contents/plugins/` folder — since this command will produce a WordPress plugin that you can go to `WP Admin` > `Plugins` to activate.


### ️ STEP #3

From here on out you can browse your plugin and run the start script. Let's do that.

```sh
cd my-block
npm start
```

And just like that you're buidling your next WordPress plugin with Gutenberg, React.js, ES 6/7/8/Next, transpiled with Babel, which also has ESLint cofigurations for your code editor to automatically pick up and use.

### ✅ More Scripts!

There are just three scripts that you can use.


#### 👉 `npm start`
- Used to compile and develop your block.
- Watches for any changes and reports back any errors in your code.
<!-- --- -->

#### 👉 `npm run build`
- Used to build production code for your block.
- Runs once and reports back the gzip filesizes of produced code.

<!-- --- -->

#### 👉 `npm run eject`
- Used to eject your plugin out of `create-guen-block`.
- Provides all the configurations so you can customize the project as you want.
- It's a one way street, `eject` and you have to maintain everything yourself.

<!-- --- -->

That's basically it.

## 🔥 Why `create-guen-block`?

Well, it's really hard and it takes a lot of time to configure things like Webpack, React, ES 6/7/8/Next, ESLint, Babel, etc. before you even start writing a Hello World gutenberg block. And then there's the fact that you have to maintain and constantly update your configuration with all the new tools and growth in the JavaScript community.

`create-guen-block` hides all this configuration away in an optimized pacakge that we call `cgb-scripts`. That package is the only dependency in your projects. We keep `cgb-scripts` up to date while you go ahead and create the next best WordPress themes and plugins.s

## 🎯 TL;DR

>Too long, didn't read? Here's a shroter version.

- Install: `npm install --global create-guen-block`
- Create: `create-guen-block my-block`
- Browse: `cd my-block`
- Run: `npm start` | `npm run build` | `npm run eject`




---







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

### VERSION 2.0.0

🚧 Work in Progress! 🚧

### VERSION 1.0.0

- ⚡️ NEW: NPM Module `create-guten-block`
- ⚡️ NEW: Create WordPress plugin folder
- ⚡️ NEW: Building WordPress plugin files
- ⚡️ NEW: Build custom Gutenberg Block
- ⚡️ NEW: Basic Webpack configurations
- ⚡️ NEW: Dynamic WP Pluing and Gutenberg Block Names


---

🙌 Hello, from the [WPCouple](https://WPCouple.com)! I ([Ahmad Awais](https://AhmadAwais.com/)) am a Full Stack Web Developer and a regular core contributor at WordPress. My wife ([Maedah Batool](https://MaedahBatool.com/)) is a WordPress Journalist/Dev/Core Contributor. If you'd like to get insights into professional full stack development, DevOps, WordPress community news, growing up a family, building and bootstrapping a business then subscribe to our premium newsletter called ↣ [The WordPress Takeaway](https://WPTakeaway.club)!


---

🎩 [**Support Ahmad's Open Source Projects!**](https://pay.paddle.com/checkout/515568)

If you'd like me to keep producing professional free and open source software (FOSS). Consider [paying for an hour of my time](https://pay.paddle.com/checkout/515568). I'll spend two hours on open source for each contribution.


---
### 🙌 [WPCOUPLE PARTNERS](https://WPCouple.com/partners):
This open source project is maintained by the help of awesome businesses listed below. What? [Read more about it →](https://WPCouple.com/partners)

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