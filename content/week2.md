class: center, middle

# Beginners Node.js
## Week 2

---

# Agenda

1. Using Modules
2. Built-in Modules
3. What is Express?
4. Express exercises

---

# Using Modules

 - JavaScript libraries: set of functions you want to include in your application.
   - The module will provide an API to expose functionality.
 - Javascript binaries: packages you run from the command line
   - One or more executables will be added to your path.
   - Try `npm i -g lolcatjs; lolcatjs --help`

---

# package.json

- Lists the packages that your project depends on.
- Allows you to specify the versions of a package that your project can use using [semantic versioning](https://semver.org/) rules.
- Makes your build reproducible, and therefore much easier to share with other developers.
- Create one manually or by typing `npm init` in your new project directory.

---
# package.json

```
{
  "name": "test",
  "version": "0.0.0",
  "dependencies": {
    "body-parser": "~1.18.2",
    "cookie-parser": "~1.4.3",
    "debug": "~2.6.9",
    "express": "~4.15.5",
    "jade": "~1.11.0",
    "morgan": "~1.9.0",
    "serve-favicon": "~2.4.5"
  }
}
```
---

# Built-in Modules

 - Node.js provides several built-in modules, which differ between versions.
 - Core modules are always preferentially loaded if their identifier is passed to `require()`.
   - E.g. `require('os')`, `require('assert')`, `require('fs')`
   - Check out the [Node API docs](https://nodejs.org/docs/latest-v8.x/api/fs.html), they cover all the core modules.
 - Two ways to require:
   - `require('foo')` looks for a node core module, then checks `node_modules`
     folders
   - `require('./path/to/foo')` looks for a `foo.js` at the specified path.
   - For more info see [the docs](https://nodejs.org/api/modules.html).

---

# What is Express?

 - Node.js web and mobile application framework
 - Express.js allows you to build:
  - Single-page, multi-page, and hybrid mobile and web apps
  - Common back-end functions for web applications
  - Web APIs (application programming interfaces)
 - Templating engines: Jade, EJS, Handlebars etc.
 - Used in the MEAN/MERN stack.
 - Free and Open Source.
 - Owned by StrongLoop, acquired by IBM. Project is part of the Node.js Foundation.

---

# Alternatives

- [Hapi](https://hapijs.com/)
- [Koa.js](http://koajs.com/)
- [LoopBack](https://loopback.io/) - Also by StrongLoop/IBM
- [Restify](http://restify.com/)
- [Sails.js](https://sailsjs.com/)

---

# Express Exercises

- `npm i -g expressworks`, then run the interactive tutorial with `expressworks`
- `mkdir express-tutorial; cd express-tutorial; npm init -y`
- Exercises:
  - `Hello World!`: Build a simple server using Express.
  - `Static`: Serve static content.
  - `Pug`: Using a templating engine.
  - `Good Old Form`: How to process traditional web form.
  - `Stylish CSS`: Using middleware for CSS.
  - `Param Pam Pam`: Using URL parameters.
  - `What's in Query`: Process URL query.
  - `Master Express`: Example scenario.

---

# Express Generator

- Generator that generates specific project folder structure.
- `npm i -g express-generator`
- `express helloapp`
- `npm install`
- `npm start`
- Go to `localhost:3000` in the browser.
- Try using `nodemon` for hot reload:
  - `npm install -g nodemon`
  - `nodemon` (runs your app and reloads it when any of the files change).
  - Edit `routes/index.js` and change `title: 'Express'` to `title: 'YourName'`
  - Reload the browser
- Further reading:
  - Check out `npm test` [here](https://coderwall.com/p/pcvwuw/working-with-npm-test)
  - Run `npm help run` to learn more about run scripts.
