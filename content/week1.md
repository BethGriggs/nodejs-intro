class: center, middle

# Beginners Node.js
## Week 1

---

# Sessions

 - Week 1: Basic JavaScript & Introduction to Node.js
 - Week 2: Modules and Express
 - Week 3: Callbacks, Promises, Async/Await
 - Week 4: Debugging Node.js applications

---

# Agenda

1. Prerequisites/Installation
2. What is Node.js and NPM?
3. Using NodeSchool.io
4. JavaScript tutorials
5. Non-blocking Model
6. Node.js tutorials

---

# Prerequisites/Installation

- Installed Node.js (preferably the latest Node8)
 - Install a single version of Node.js from https://nodejs.org/en/
 - Install a Node Version manager - only if you want to switch between Node versions
   - UNIX: https://github.com/creationix/nvm
   - Cross-platform: https://github.com/jasongin/nvs
- Editor of some kind (atom / VSCode / Vim)
- Confirm by typing `node --version`, `npm --version` in terminal.

Note: On Linux you should either install to `/usr/local/bin` or add the directory you installed to to your `$PATH`.

---

# What is Node.js?

- Cross-platform JavaScript runtime environment for executing server-side JavaScript.
- They took Google Chromes V8 Engine and allowed it to run on your computer.
- Allows you to read files/http requests/access databases directly, providing abilities similar to PHP/Ruby.  
- Open-source (Github: https://github.com/nodejs/node)

---

# What is Node.js used for?

- REST APIs and Backend Applications
- Real-Time services (Chat, Games etc)
- Blogs, CMS, Social Applications.
- Command Line Utilities and Tools.
- Anything that is not CPU intensive (e.g. Fibonacci sequence algorithm).


---
# Who uses Node.js?

- GoDaddy
- Groupon
- IBM
- LinkedIn
- Microsoft
- Netflix - See conference talk: [Slaying Monoliths with Docker and Node.js](https://www.youtube.com/watch?v=H_iK7jww_j8&t=66s)
- PayPal
- Rakuten
- Walmart
- Yahoo!
- Cisco Systems
- General Motors
---

# What is NPM?

- npm is the default package manager for JavaScript.
- Worlds largest software registry - approx 600K packages and 6bn downloads a week
- npm allows you to install reusable packages as dependencies to your application
- No vetting process - potential to use malicious/untrusted/unmaintained packages.
---

# Using NodeSchool.io

- NodeSchool is community driven open source provider of workshops to teach web software skills.
- `npm install --global javascripting  # npm i -g javascripting`
- Provides an interactive interface learn
- Complete the 'INTRODUCTION' activity
- `javascripting`


Note: If you hit `Error: EPERM, Operation not permitted`
 - `sudo chown -R $USER:$(id -gn) /usr/local/lib/node_modules` should fix this

---

# JavaScript recap
- String length
- Rounding numbers
- If Statement
- For Loop
- Objects
- Function Arguments

---

# Blocking vs Non-blocking

- Node.js has both blocking and non-blocking calls.
- Blocking is when execution of JS in the Node.js process must wait until a non-JavaScript operation completes. This happens because the 'event loop' is unable to continue running JS while a blocking operation is occurring.

---

# Blocking vs Non-blocking: Example

- Synchronous:

```
var fs = require('fs');
var data = fs.readFileSync('/file.md'); // blocks here until file is read
console.log(data);
// moreWork(); will run after console.log
```

- Asynchronous:

```
var fs = require('fs');
fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
// moreWork(); will run before console.log
```

---

# Node.js exercises
- `npm i -g learnyounode`
- Baby Steps
- My first I/O
- My first Async I/O

---
