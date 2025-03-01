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
#& JavaScript Essentials

Welcome to **JavaScript Essentials**! This guide is designed for beginners to learn modern JavaScript (ES6+) with detailed explanations, code examples, and practical use cases.

## 1. Introducing JavaScript
JavaScript is a versatile and widely used programming language that enables interactive web development. It is executed in the browser and allows developers to create dynamic web pages, handle user interactions, and communicate with servers.

### Why Use JavaScript?
- JavaScript is supported by all modern web browsers.
- It allows manipulation of HTML and CSS in real time.
- It enables client-side validation, enhancing user experience.
- JavaScript frameworks like React, Angular, and Vue simplify application development.

### Example
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

### Use Case
JavaScript is used to create interactive web pages, from form validation to building entire web applications like Gmail and Facebook.

---

## 2. Introduction to ES6
ECMAScript 6 (ES6), released in 2015, introduced several new features that made JavaScript more readable, maintainable, and powerful.

### Key Features of ES6
- **Block-scoped variables (`let`, `const`)**: Prevents unintended modifications.
- **Arrow functions**: Provides a more concise syntax for writing functions.
- **Template literals**: Makes string handling easier with backticks.
- **Destructuring**: Allows unpacking values from arrays and objects.
- **Modules**: Enables code organization with `import` and `export`.

### Example
```js
const name = "Alice";
console.log(`Hello, ${name}!`); // Template literal
```

### Use Case
ES6 is the standard for modern JavaScript applications, providing better syntax and functionality for efficient coding.

---

## 3. Let, Const, and Var
JavaScript uses three ways to declare variables: `var`, `let`, and `const`. Understanding their differences is crucial for writing bug-free code.

### `var`
- Function-scoped.
- Can be redeclared and reassigned.
- Not recommended due to potential scope issues.

#### Example
```js
var x = 10;
var x = 20; // Allowed
console.log(x);
```

### `let`
- Block-scoped.
- Cannot be redeclared in the same scope.

#### Example
```js
let y = 10;
y = 20; // Allowed
console.log(y);
```

### `const`
- Block-scoped.
- Cannot be reassigned after declaration.

#### Example
```js
const z = 10;
z = 20; // Error: Assignment to constant variable.
```

### Use Case
Use `let` when reassignment is needed and `const` when values should remain constant.

---

## 4. Template Literals
Template literals allow for easier string manipulation using backticks (`` ` ``) instead of quotes.

### Benefits
- Supports multi-line strings without `\n`.
- Enables variable interpolation with `${}`.
- Improves readability.

#### Example
```js
const name = "Alice";
console.log(`Hello, ${name}!`);
```

### Use Case
Template literals simplify string operations, especially in UI frameworks like React.

---

## 5. Arrow Functions
Arrow functions provide a concise way to write functions.

### Benefits
- Shorter syntax.
- Implicit `return` if there is no `{}`.
- No binding of `this` (useful in event handlers and callbacks).

#### Example
```js
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8
```

### Use Case
Ideal for callback functions, array operations (`map`, `filter`), and functional programming.

---

## 6. Default Parameters
Functions can have default values for parameters to handle missing arguments.

#### Example
```js
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet(); // Hello, Guest!
```

### Use Case
Ensures functions have default behavior even when arguments are omitted.

---

## 7. Rest and Spread Operators
Both operators (`...`) enhance handling of function arguments and array manipulations.

### Spread (`...`)
Expands array elements or object properties.

#### Example
```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]
```

### Rest (`...`)
Collects multiple arguments into an array.

#### Example
```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```

### Use Case
Spread simplifies merging arrays, while rest allows flexible function arguments.

---

## 8. Destructuring Assignment
Extracts values from objects and arrays efficiently.

#### Example
```js
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name, age);
```

### Use Case
Simplifies variable assignments from objects or function returns.

---

## 9. Enhanced Object Literals
Provides shorthand for defining object properties and methods.

#### Example
```js
const name = "Alice";
const user = { name, greet() { console.log(`Hello, ${this.name}!`); } };
user.greet();
```

### Use Case
Improves readability and efficiency in object creation.

---

## 10. Modules (Import & Export)
ES6 modules help in structuring and reusing code.

#### Example
```js
// math.js
export const add = (a, b) => a + b;

// main.js
import { add } from "./math.js";
console.log(add(2, 3));
```

### Use Case
Used in modern JavaScript applications to separate concerns and maintain code structure.

---
