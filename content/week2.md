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

- Hapi
- Koa.js
- LoopBack
- Restify
- Sails.js

---

# Express Exercises

- `npm i -g expressworks`
- `mkdir express-tutorial`, `cd express-tutorial`, `mkdir node_modules`
- Exercises:
 - Hello World!: Build a simple server using Express.
 - Static: Serve Static content.
 - Pug: Using a templating engine.
 - Good Old Form: How to process traditional web form.
 - Stylish CSS: Using middleware for CSS.
 - Param Pam Pam: Using URL parameters.
 - What's in Query: Process URL query.
 - Master Express: Example scenario.

---

# Express Generator

- Generator that generates specific project folder structure.
- `npm i -g express-generator`
- `express helloapp`


---
