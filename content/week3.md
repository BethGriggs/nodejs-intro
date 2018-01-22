class: center, middle

# Beginners Node.js
## Week 3

---

# Agenda

- Scoping
- Callbacks
- Promises
- Async Await

---

# Scoping

- Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime.
- Three scopes in JavaScript: `var`, `let`, and `const`.

---

# var keyword

```
for(var i = 0; i<10; i++) {
  console.log(i) // print values 0-9
}
console.log(i) // print value 10
```

- Scope of `i` is not bounded by `{}`

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

- `i` is only available within the function

---

# var keyword - closures

```
(function (){
  for(var i = 0; i<10; i++) {
    console.log(i) // prints values 0-9
  }
})()
```

- Used to keep variables in scope to the functions.
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
var i;
i = 34;
for(let i =0; i<10; i++) {
 console.log(i) // prints 0-9
}
console.log(i) // prints 34
```

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
- The `dog = { name: 'biko' }` will throw an error as the dog cannot be assigned to another variable.  

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

# How to avoid callback Hell - 1

```
var fs = require('fs');

var myFile = '/tmp/test';  
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

# How to avoid callback hell - 2

```
var fs = require('fs');

function notifyUser(err) {  
    if(err) return console.log(err);
    console.log('Appended text!');
};

function appendText(err, txt) {  
    if (err) return console.log(err);

    txt = txt + '\nAppended something!';
    fs.writeFile(myFile, txt, notifyUser);
}

var myFile = '/tmp/test';  
fs.readFile(myFile, 'utf8', appendText);  
```

---

# Promises - Bluebird

```
var Promise = require('bluebird');  
var fs = require('fs');  
Promise.promisifyAll(fs);

var myFile = '/tmp/test';  
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

# Promises - Create your own

```
var p = new Promise(function(resolve, reject) {

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

# Promise tutorial

- `npm install -g promise-it-wont-hurt`

---

# Async/Await

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
