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
- For each of the following examples I recommend creating a file e.g. `scoping.js` and executing the code with `node scoping.js`.
- Alternatively, use the Node.JS REPL - access it by typing `node` in your terminal.

---

# var keyword

```
for(var i = 0; i<10; i++) {
  console.log(i) // print values 0-9
}
console.log(i) // print value 10
```

- Scope of `i` is not bounded by `{}`.

---

# var keyword

```
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

```
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

```
for(var i = 0; i<10; i++) {
  console.log(i) // print values 0-9
}
```

```
(function (){
  for(var i = 0; i<10; i++) {
    console.log(i) // prints values 0-9
  }

})()

console.log(i) // prints undefined
```

- Used to keep variables in scope to only the function.
- Sometimes called an immediately invoked function expression.

---

# let keyword

```
for(let i = 0; i<10; i++) {
  console.log(i) // prints values 0-9
}
console.log(i) // undefined
```

- `let` variables are scoped in the braces `{}`.
- It will print 0–9 then throw a reference error as i is not in scope outside the braces.

---

# variable shadowing

```
let i = 34;
for(let i = 0; i<10; i++) {
 console.log(i) // prints 0-9
}
console.log(i) // prints 34
```

- In this example `let i = 34` has been shadowed by `let i = 0` in the for loop.

---

# const keyword

```
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

```
const dog = {
  age: 3
};
dog.age = 5;
dog = { name: 'biko'};
```

- `const` does not make the variable immutable, `dog.age` will change.
- The `dog = { name: 'biko' }` will throw an error as `dog` cannot be assigned to another object.  

---

# Callbacks


```
getData('example.com/weather.json', function(err, data) {  
    console.log('Got weather data:', data);
});
```

```
getData('example.com/data.json', function(err, data) {  
    console.log('Got data:', data);
    getMoreData('example.com/moreData.json', function(err, data) {  
      console.log('Got more data:', data);
    });
});
```

---

# Callback Hell / Pyramid of Doom

```
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

# How to avoid callback Hell - Example

```
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

# How to avoid callback hell - Improvement

```
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

```
let p = new Promise(function(resolve, reject) {

	// Do an async task async task and then...

	if(/* good condition */) {
		resolve('Success!');
	}
	else {
		reject('Failure!');
	}
});

p.then(function() {
	/* do something with the result */
}).catch(function() {
	/* error :( */
})
```

---

# Promises - Bluebird

- The module bluebird can 'promisify' built in module functions.

```
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

- Async/await is a new way to write asynchronous code as an alternative to callbacks and promises.
- Built on top of promises.
- It cannot be used with plain callbacks.
- Async/await is, like promises, non-blocking.
- Makes asynchronous code look and behave a little more like synchronous code.
- Note: Node 7.6.0 and above only.
---

# Async/await example

```
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
