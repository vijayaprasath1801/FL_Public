# JavaScript Training Guide

## Table of Contents

1. [JavaScript Essentials](#javascript-essentials)
   - [Introducing JavaScript](#introducing-javascript)
   - [Introduction to ES6](#introduction-to-es6)
   - [Let, Const, and Var](#let-const-and-var)
   - [Template Literals](#template-literals)
   - [Arrow Functions](#arrow-functions)
   - [Default Parameters](#default-parameters)
   - [Rest and Spread Operators](#rest-and-spread-operators)
   - [Destructuring Assignment](#destructuring-assignment)
   - [Enhanced Object Literals](#enhanced-object-literals)
   - [Modules (Import & Export)](#modules-import--export)
   - [Promises & Async/Await](#promises--asyncawait)
   - [Classes and Inheritance](#classes-and-inheritance)
   - [Symbols & Iterators](#symbols--iterators)
   - [Generators](#generators)
   - [Set and Map](#set-and-map)
   - [WeakSet and WeakMap](#weakset-and-weakmap)
   - [ES6 String & Number Methods](#es6-string--number-methods)
   - [ES6 Array Methods](#es6-array-methods)
   - [ES6 Object Methods](#es6-object-methods)
   - [New ES6 Features](#new-es6-features)

2. [Objects](#objects)
   - [Constructors](#constructors)
   - [Prototypes](#prototypes)
   - [Inheritance](#inheritance)

3. [Properties](#properties)
   - [Arrays](#arrays)
   - [Attributes](#attributes)
   - [Special Types](#special-types)

4. [Miscellaneous Topics](#miscellaneous-topics)
   - [Comparison Operators](#comparison-operators)
   - [Variable Scope](#variable-scope)
   - [Strict Mode](#strict-mode)
   - [Functions](#functions)
   - [Context](#context)
   - [Immediately Invoked Functions](#immediately-invoked-functions)
   - [Namespaces](#namespaces)
   - [Exceptions](#exceptions)
   - [Promises](#promises)

5. [Array Methods](#array-methods)
   - [Accessing Elements](#accessing-elements)
   - [Outputting an Array](#outputting-an-array)
   - [Manipulating Elements](#manipulating-elements)
   - [Searching](#searching)
   - [Creating Subsets](#creating-subsets)
   - [Processing](#processing)

6. [Browser Environment](#browser-environment)
   - [Browser Object Model](#browser-object-model)
   - [Screen](#screen)
   - [Location](#location)
   - [History](#history)
   - [Navigator](#navigator)

7. [DOM Elements](#dom-elements)
   - [Document Object Model](#document-object-model)
   - [Element Inheritance](#element-inheritance)

8. [Basic DOM Manipulation](#basic-dom-manipulation)
   - [Finding Elements](#finding-elements)
   - [Creating Elements](#creating-elements)
   - [Moving Elements](#moving-elements)
   - [Modifying Elements](#modifying-elements)

9. [Dynamic Styling](#dynamic-styling)
   - [Changing Style Sheets](#changing-style-sheets)
   - [Enabling Style Sheets](#enabling-style-sheets)
   - [Choosing a Style Sheet](#choosing-a-style-sheet)
   - [Alternate Style Sheets](#alternate-style-sheets)
   - [Using Style Elements](#using-style-elements)
   - [Modifying Rules](#modifying-rules)
   - [Modifying Classes](#modifying-classes)
   - [Modifying Inline Styles](#modifying-inline-styles)
   - [Computed Style](#computed-style)

10. [Events](#events)
   - [Event Registration](#event-registration)
   - [Event Propagation](#event-propagation)
   - [Unregistering Events](#unregistering-events)
   - [Event Interface](#event-interface)
   - [Common Event Properties](#common-event-properties)
   - [Cancelling Events](#cancelling-events)
   - [Exploring Events](#exploring-events)

---

# JavaScript Essentials

Welcome to **JavaScript Essentials**! This guide is designed for beginners to learn modern JavaScript (ES6+) with detailed explanations, code examples, and practical use cases.

## 1. Introducing JavaScript
JavaScript is a lightweight, interpreted programming language that enables interactivity in web pages. It is an essential part of web development along with HTML and CSS.

**Example:**
```html
<!DOCTYPE html>
<html>
<body>
  <h2>JavaScript Example</h2>
  <button onclick="greet()">Click Me</button>
  <script>
    function greet() {
      alert("Hello, JavaScript!");
    }
  </script>
</body>
</html>
```

**Use Case:** Used for adding dynamic behavior to web pages.

---

## 2. Introduction to ES6
ES6 (ECMAScript 2015) introduced significant enhancements like `let`, `const`, arrow functions, template literals, and more, making JavaScript more powerful and readable.

**Example:**
```js
const name = "Alice";
console.log(`Hello, ${name}!`); // Template literal
```

**Use Case:** Modern web applications leverage ES6 features for cleaner and more maintainable code.

---

## 3. Let, Const, and Var
### `var`
- Function-scoped
- Can be redeclared and reassigned

**Example:**
```js
var x = 10;
var x = 20; // Allowed
console.log(x);
```

### `let`
- Block-scoped
- Cannot be redeclared in the same scope

**Example:**
```js
let y = 10;
y = 20; // Allowed
console.log(y);
```

### `const`
- Block-scoped
- Cannot be reassigned

**Example:**
```js
const z = 10;
z = 20; // Error
```

**Use Case:** `let` and `const` are preferred over `var` for safer and cleaner code.

---

## 4. Template Literals
Allows multi-line strings and string interpolation using backticks (`).

**Example:**
```js
const name = "Alice";
console.log(`Hello, ${name}!`);
```

**Use Case:** Used for cleaner string concatenation.

---

## 5. Arrow Functions
A concise way to write functions.

**Example:**
```js
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8
```

**Use Case:** Useful in callbacks and concise function expressions.

---

## 6. Default Parameters
Allows setting default values for function parameters.

**Example:**
```js
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet(); // Hello, Guest!
```

**Use Case:** Ensures functions have default values when arguments are missing.

---

## 7. Rest and Spread Operators
### Spread (`...`)
Expands elements of an array or object.

**Example:**
```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]
```

### Rest (`...`)
Gathers multiple arguments into an array.

**Example:**
```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```

**Use Case:** Useful for handling multiple function arguments dynamically.

---

## 8. Destructuring Assignment
Extract values from arrays and objects easily.

**Example:**
```js
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name, age);
```

**Use Case:** Makes working with objects and arrays easier.

---

## 9. Enhanced Object Literals
Shorthand for defining object properties and methods.

**Example:**
```js
const name = "Alice";
const user = { name, greet() { console.log(`Hello, ${this.name}!`); } };
user.greet();
```

**Use Case:** Cleaner and more readable object definitions.

---

## 10. Modules (Import & Export)
ES6 introduced modules for better code organization.

**Example:**
```js
// math.js
export const add = (a, b) => a + b;

// main.js
import { add } from "./math.js";
console.log(add(2, 3));
```

**Use Case:** Helps in structuring code in large applications.

---

## 11. Promises & Async/Await
Handles asynchronous operations efficiently.

**Example:**
```js
const fetchData = () => new Promise(resolve => setTimeout(() => resolve("Data Loaded"), 2000));

async function loadData() {
  const data = await fetchData();
  console.log(data);
}
loadData();
```

**Use Case:** Used in API calls and handling async operations gracefully.

---

## 12. Classes and Inheritance
Introduces OOP in JavaScript.

**Example:**
```js
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}
class Student extends Person {}
const student = new Student("Alice");
student.greet();
```

**Use Case:** Used in building reusable and structured code.

---

## 13. Symbols & Iterators
Symbols create unique properties, iterators handle custom iteration.

**Example:**
```js
const uniqueKey = Symbol("id");
const obj = { [uniqueKey]: 123 };
console.log(obj[uniqueKey]); // 123
```

**Use Case:** Used for private object properties and custom iteration behavior.

---

## 14. Generators
Allows pausing and resuming function execution.

**Example:**
```js
function* generator() {
  yield 1;
  yield 2;
}
const gen = generator();
console.log(gen.next().value); // 1
```

**Use Case:** Used for handling sequences and async operations.

---

## 15. Set and Map
Provides unique collections (`Set`) and key-value pairs (`Map`).

**Example:**
```js
const set = new Set([1, 2, 3, 3]);
console.log(set); // {1, 2, 3}
```

**Use Case:** Used when handling unique values efficiently.

---



---

 

