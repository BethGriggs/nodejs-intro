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

- `var`
- `const`
- `let`
---

# var keyword

```
for(var i = 0; i<10; i++) {
  console.log(i) // print values 0-9
}
console.log(i)  // will print value 10
```

- Scope of i is not bounded by `{}`

---

# var keyword

```
function varKeyword(){
  for(var i = 0; i<10; i++) {
    console.log(i)
  }
  console.log(i)
}
varKeyword();
```

---

# var keyword

```
function printing(){
  for(var i = 0; i<10; i++) {
    console.log(i)
  }
}
printing()
console.log(i)
```

- undefined, i is only available within the function

---

# var keyword - closures

```
(function (){
  for(var i = 0; i<10; i++) {
    console.log(i)
  }
})()
```

- Attempt to keep variables in scope to the functions, this is usually called immediately invoked function expression.

---

# let keyword

```
for(let i = 0; i<10; i++) {
  console.log(i)
}
console.log(i)
```

- Its the solution to the madness in the var variables. These variables are scoped in the braces {}.
- It will print 0–9 then throw a reference error as i is not in scope outside the braces.

---

# const keyword

```
const multiplier = 3.4
discount = 5.6 // this will throw an error
[23, 56, 67].map((num)=> num * discount)
```

- means that once the variable is assigned it cannot be assigned again and an attempt to do so will throw an error.

---

# const keyword

```
const dog={
  age: 3
}
dog.age = 5
dog = { name: 'biko'}
```

- `const` does not make the variable immutable, `dog.age` will change.
- The `dog = { name: 'biko' }` will throw an error as the dog cannot be assigned to another variable.  

---
# variable shadowing

```
var i
i = 34
for(let i =0; i<4; i++){
 console.log(i)
}
console.log(i)
```

---

# Callbacks

```
downloadFile('example.com/weather.json', function(err, data) {  
    console.log('Got weather data:', data);
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

# How to avoid Callback Hell

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

# Promises

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
