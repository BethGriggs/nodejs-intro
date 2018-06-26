class: center, middle

# Beginners Node.js
## Week 4

---

# Agenda

1. Basic Console Debug
2. Using --inspect
3. Appmetrics
4. Bug Clinic tutorial
5. Additional tutorials

---

# Basic Console Debug

As well as `console.log()` there are a number of simple functions on the console object you can use:

- `console.dir(obj)`
  Format an object for display, recursing through it's fields.

- `console.trace()`
  Output a stack trace for the location console.trace is called.

---

# Invoking the Debugger

Node.js supports connecting a debugger. The debugger is the embedded debugger in the Chrome web browser, Node.js uses Googles V8 Javascript engine which is also found in Chrome.

You can start Node.js with the debugger enabled or put Node.js into debug mode by sending it `SIGUSR1`.
 - Full details are here: https://nodejs.org/en/docs/inspector/

Once Node.js is in debug mode you can go to `chrome://inspect` in your browser and select the Node.js process to connect to.

You can set breakpoints, view source files, use the console to run code in the context of your process, take heap dumps and profile CPU and memory usage.

---

# Invoking the Debugger - Exercises/Demos

- Putting Node.js into debug node
- Attaching and using the console.
- Setting breakpoint and using the console in the context of an incoming request to display the request.

---

# Enabling Debug

- Startup `helloWorld.js` from the express tutorials - [code here](https://github.ibm.com/dev-dojo/nodejs-intro/blob/master/tutorials/expressworks/helloWorld.js).
- Find the pid of the node process.
- Send it the `SIGUSR1` signal by doing `$ kill -SIGUSR1 <pid>`
- *Shortcut* On Mac or Linux (assuming you aren't running any other node applications) use pkill to signal processes by name:`$ pkill -SIGUSR1 node`

---

# Attaching to the Debugger

- In Chrome browse to `chrome://inspect/` (You have to use Chrome.)
- You should see your Node.js process in the list of available targets.
- Select it to connect inspector.

---

# Debugger Tabs

The main tabs for debugging are the `Console` and `Sources` tab. These let you do the main tasks you associate with a debugger, setting breakpoints, stepping through code, evaluating expressions. The are also two other tabs for Memory and CPU profiling.

---

# Debugger Tabs - Console

- In the console view you can run code an evaluate expressions in the context of your Node.js application.
 - Type `console.log("Hello World!");` and press return. You will see "Hello World!" printed on inspectors console *and* on the terminal running your application.
 - Messages written to the terminal via `console.log('..');` will also be shown on the inspector console.
 - You can view the results of expressions you evaluate so to view a global object just type it's name and press return. Try type `process` and pressing return. Try `process.cwd()` to call the `cwd()` function on the process object.

---

# Debugger Tabs - Sources

- Here you can view the source files loaded by your program.
 - Open up `helloWorld.js` and set a breakpoint inside the `/home` handler.
 - Refresh the page at `http://127.0.0.1:3000/home`
 - The console will jump to the break point line and show you the call stack, variables in scope, currently set breakpoints and more.
 - Return to the console and type `req`. The `req` object from the current call will be printed. Expressions are evaluated in the current scope.

---

## Debugger Tabs - Memory & Profiler

- Memory
 - Profile memory and take heap snapshots.
 - Heap snapshots are stored in a JSON format and can be very large.

- Profiler
 - Create a CPU profile of your application while it is running.

---

# Using appmetrics-dash

[Appmetrics-dash](https://www.npmjs.com/package/appmetrics-dash) is an npm module you can use to monitor the performance of your node process. It adds a dashboard to your application at `/appmetrics-dash` that you can use to monitor performance metrics.

It has three main tabs, a Dashboard tab with graphs for monitoring basic metrics, a Profiling tab to display method profiling data as a flame graph and a Summary tab displaying system wide information and response time statistics.

---

# Using appmetrics-dash - Example

Add it to a simple express app by running `npm install appmetrics-dash --save` and requiring it at the top of the file. For example, to modify the example `helloWorld.js`:

```js
require('appmetrics-dash').attach();
var express = require('express')
var app = express()

app.get('/home', function(req, res) {
  res.end('Hello World!')
})

app.listen(process.argv[2])
```

Run with:
`$ node helloWorld.js 3000`

---

# Using appmetrics-dash - Example

Browse to: http://127.0.0.1:3000/appmetrics-dash/

If you go to http://127.0.0.1:3000/home and make requests you can see the response time statistics. You can also enable profiling to see a flamegraph of your applications performance.

You can test driving load through the "Hello World!" app with a simple command line:

```sh
$ true; while (($?==0)); do curl http://127.0.0.1:3000/home ; done;
```

and then see the effect this has on the graphs or enable profiling.

---

# Bug Clinic tutorial

- `npm i -g bug-clinic`
 - *Note*: you need to type `:q` to exit the tutorial info.
- `Intake`: Basic Logging with `console.log` and `console.error`.
- `Triage`: Addition `console.` logging options.
- `Disinfect`: Using JSHint, a tool that helps detect errors.

---

# Additional Tutorials

- `npm install -g count-to-6`: ES6 JavaScript features including Arrow Functions.
- `npm install -g js-best-practices`: best practices of writing clean JavaScript code woth a sample app.
- `npm install -g functional-javascript-workshop`: functional programming features of JavaScript.
- ` npm install -g learnyoumongo`: Learn MongoDB and Node.js (Part of MEAN/MERN stacks).
- See https://nodeschool.io/#workshoppers for all available tutorials. They include Git/Bash
---
