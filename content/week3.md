class: center, middle

# Beginners Node.js
## Week 3

---

# Agenda

- Scoping
- Callbacks
- Promises
- Async/Await

---

# Scoping

- Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime.
- Three scopes in JavaScript: `var`, `let`, and `const`.
  - For global variables add to the `global` object.
- For each of the following examples I recommend creating a file e.g. `scoping.js` and executing the code with `node scoping.js`.
- Alternatively, use the Node.JS REPL - access it by typing `node` in your terminal.

---

# 'use strict'

- Protects you against the worst excesses of JavaScript.
- Put it at the top of every file (configure your linter to require it).


- Accidental global variable:

```js
var a=1, b=2
var c=3; d=4
```

- ReferenceError:

```js
'use strict'

var a=1, b=2
var c=3; d=4
```

---

# let keyword

```js
'use strict'

for(let i = 0; i<10; i++) {
  console.log(i) // prints values 0-9
}
console.log(i) // ReferenceError
```

- `let` variables are block scoped (scoped in the braces `{}`).
- It will print 0–9 then throw a reference error as i is not in scope outside the braces.

---

# variable shadowing

```js
'use strict'

let i = 34;
for(let i = 0; i<10; i++) {
 console.log(i) // prints 0-9
}
console.log(i) // prints 34
```

- In this example `let i = 34` has been shadowed by `let i = 0` in the for loop.

---

# var keyword

```js
'use strict'

for(var i = 0; i<10; i++) {
  console.log(i) // print values 0-9
}
console.log(i) // print value 10
```

- `var` declarations are function scoped. Scope of `i` is not bounded by `{}`.


- These two are equivalent:

```js
function foo() {
  {
    var i = 1;
  }
}
```

```js
function foo() {
  let i = undefined;
  {
    i = 1;
  }
}
```

---

# var keyword

```js
'use strict'

function varKeyword(){
  for(var i = 0; i<10; i++) {
    console.log(i)  // print values 0-9
  }
  console.log(i)  // print values 10
}
varKeyword();
```

- Same output as previous example.

---

# var keyword

```js
'use strict'

function printing(){
  for(var i = 0; i<10; i++) {
    console.log(i) // prints values 0-9
  }
}
printing()
console.log(i) // undefined
```

- `i` is only available within the function.

---

# var keyword - closures

```js
'use strict'

for(var i = 0; i<10; i++) {
  console.log(i) // print values 0-9
}
```

```js
'use strict'

(function (){
  for(var i = 0; i<10; i++) {
    console.log(i) // prints values 0-9
  }

})()

console.log(i) // prints undefined
```

- Used to keep variables in scope to only the function.
- Sometimes called an immediately invoked function expression (IIFE).

---

# const keyword

```js
'use strict'

const number = 42;

try {
  number = 99;
} catch(err) {
  console.log(err);
}

console.log(number); // expected output: 42
```

- Once the variable is assigned it cannot be assigned again, and an attempt to do so will throw an error.
- Always have a reference to the same object or primitive value.

---

# const keyword

```js
'use strict'

const dog = {
  age: 3
};
dog.age = 5;
dog = { name: 'biko'};
```

- `const` does not make the variable immutable, `dog.age` can change.
- The `dog = { name: 'biko' }` will throw an error as `dog` cannot be assigned to another object.

---

# Callbacks


```js
'use strict'

getData('example.com/weather.json', function(err, data) {
    console.log('Got weather data:', data);
});
```

```js
'use strict'

getData('example.com/data.json', function(err, data) {
    console.log('Got data:', data);
    getMoreData('example.com/moreData.json', function(err, data) {
      console.log('Got more data:', data);
    });
});
```

---

# Callback Hell / Pyramid of Doom

```js
'use strict'

getData(function(a){
    getMoreData(a, function(b){
        getMoreData(b, function(c){
            getMoreData(c, function(d){
                getMoreData(d, function(e){
                    ...
                });
            });
        });
    });
});
```

---

# How to avoid Callback Hell - The Problem

```js
'use strict'

const fs = require('fs');

const myFile = '/tmp/test';
fs.readFile(myFile, 'utf8', function(err, txt) {
    if (err) return console.log(err);
    txt = txt + '\nAppended something!';
    fs.writeFile(myFile, txt, function(err) {
        if(err) return console.log(err);
        console.log('Appended text!');
    });
});
```

---

# How to avoid Callback Hell - Improvement

```js
'use strict'

const fs = require('fs');

function notifyUser(err) {
    if(err) return console.log(err);
    console.log('Appended text!');
};

function appendText(err, txt) {
  if (err) return console.log(err);
  txt = txt + '\nAppended something!';
  fs.writeFile(myFile, txt, notifyUser);
}

const myFile = '/tmp/test';
fs.readFile(myFile, 'utf8', appendText);
```

---

# Promises - Create your own

- A promise is an object which can be returned synchronously from an asynchronous function.
- A promise will be in one of 3 possible states:
 - Fulfilled: onFulfilled() will be called (e.g., resolve() was called)
 - Rejected: onRejected() will be called (e.g., reject() was called)
 - Pending: not yet fulfilled or rejected
- The `.then()` function is called if the promise resolves.
- The `.catch()` function is called if the promise rejects.

```js
'use strict'

// Define a promise:
const p = new Promise(function(resolve, reject) {
  const itWorked = true; // Do something Async.
  if(itWorked) {
    resolve('Success!');
  } else {
    reject(Error('Failure!'));
  }
});

// Use the promise:
p.then(function(result) { console.log('Promise result was:', result); })
  .catch(function(error) { console.error('Promise errored:', error); })
```

---

# Promises - use them in your APIs

- Instead of providing an async function that takes a callback, return a Promise.

```js
'use strict'

// Provide a function that returns a Promise:
function doAsyncStuff() {
  return new Promise(function(resolve, reject) {
    // Do an async task and then...
    if(true) { // Try changing this to false.
      resolve('Success!');
    }
    else {
      reject(Error('Failure!'));
    }
  });
}

// This is how someone would use your function:
doAsyncStuff()
  .then(console.log)
  .catch(console.error)
```

---

# Promises - Bluebird

- The module bluebird can 'promisify' built in module functions.

```js
'use strict'

const Promise = require('bluebird');
const fs = require('fs');
Promise.promisifyAll(fs);

const myFile = '/tmp/test';
fs.readFileAsync(myFile, 'utf8').then(function(txt) {
    txt = txt + '\nAppended something!';
    fs.writeFile(myFile, txt);
}).then(function() {
    console.log('Appended text!');
}).catch(function(err) {
    console.log(err);
});
```

- `mkdir promise; cd promise; npm init -y; npm i --save bluebird`

---

# Promise tutorial

- `npm install -g promise-it-wont-hurt`

---

# Async/Await

- Async/await is a new syntax that lets you write asynchronous code.
- Built on top of promises.
- Cannot be used with plain callbacks.
- Async/await is, like promises, non-blocking.
- Makes asynchronous code look and behave a little more like synchronous code.
- Note: Node 8 and above.
- You can only `await` inside an `async` function.

---

# Async/await example

```js
'use strict'

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  var result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();

```

---

# Further examples

- This fails with `await is only valid inside an async function`:

```js
'use strict'

const p = Promise.resolve('I never reject');

await p
```

- This works:

```js
'use strict'

const p = Promise.resolve('I never reject');

async function main() {
  const val = await p
  console.log(val);
}

main();
```

---

# Fixing unhandled promise rejection errors

- When you run the previous example you should get an `UnhandledPromiseRejectionWarning`.
- Fix it by adding this to the top of your code:

```js
// Catch rejected promises and throw straight away
// (remove once this is standard in node).
process.on('unhandledRejection', (reason, p) => {
  console.error('Rejected promise:', p);
  throw reason;
});
```
