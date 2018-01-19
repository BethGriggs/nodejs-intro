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

# var keyword

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

# Callbacks

- Callbacks
- Promises
- Async Await

---
