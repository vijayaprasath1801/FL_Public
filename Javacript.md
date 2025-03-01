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
## JavaScript Essentials

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

## Promises & Async/Await
### Explanation
Promises provide a way to handle asynchronous operations in JavaScript, avoiding callback hell. Async/Await simplifies working with Promises by allowing us to write asynchronous code in a synchronous style.

### Example
```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched successfully"), 2000);
  });
}

async function fetchAndLogData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
fetchAndLogData();
```

### Use Case
- Used in fetching data from APIs
- Handling file reading operations
- Managing database queries

---

## Classes and Inheritance
### Explanation
ES6 introduced the `class` syntax, making object-oriented programming easier in JavaScript. Inheritance allows one class to inherit properties and methods from another.

### Example
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy");
dog.speak();
```

### Use Case
- Used in frameworks like React to create reusable components
- Helps in creating modular, maintainable code

---

## Symbols & Iterators
### Explanation
Symbols are unique and immutable values often used as object keys. Iterators allow objects to be traversed using a standard protocol.

### Example
```javascript
const uniqueKey = Symbol("id");
const user = {
  [uniqueKey]: 123,
  name: "Alice",
};
console.log(user[uniqueKey]); // 123
```

Iterator Example:
```javascript
const iterable = {
  [Symbol.iterator]: function () {
    let step = 0;
    return {
      next() {
        step++;
        return step <= 3 ? { value: step, done: false } : { done: true };
      },
    };
  },
};
for (const num of iterable) {
  console.log(num); // 1, 2, 3
}
```

### Use Case
- Symbols are used for private properties in objects
- Iterators are useful for custom data structures and loops

---

## Generators
### Explanation
Generators provide a way to pause and resume execution of a function using the `yield` keyword.

### Example
```javascript
function* generatorExample() {
  yield "Hello";
  yield "World";
}
const gen = generatorExample();
console.log(gen.next().value); // Hello
console.log(gen.next().value); // World
```

### Use Case
- Used in implementing iterators
- Managing async operations efficiently

---

## Set and Map
### Explanation
`Set` stores unique values, while `Map` holds key-value pairs.

### Example
```javascript
const mySet = new Set([1, 2, 3, 3]);
console.log(mySet); // Set {1, 2, 3}

const myMap = new Map();
myMap.set("name", "Alice");
console.log(myMap.get("name")); // Alice
```

### Use Case
- Removing duplicate values
- Efficiently storing and retrieving key-value data

---

## WeakSet and WeakMap
### Explanation
WeakSet and WeakMap are similar to Set and Map but store only weakly held objects.

### Example
```javascript
let obj = { name: "John" };
const weakMap = new WeakMap();
weakMap.set(obj, "private data");
console.log(weakMap.get(obj)); // private data
```

### Use Case
- Used for memory optimization
- Avoiding memory leaks

---

## ES6 String & Number Methods
### Explanation
New methods introduced for string and number manipulation.

### Example
```javascript
console.log("Hello".repeat(3)); // HelloHelloHello
console.log(Number.isInteger(5.5)); // false
```

### Use Case
- Formatting strings
- Validating numbers

---

## ES6 Array Methods
### Explanation
New array methods provide easy manipulation of array data.

### Example
```javascript
const numbers = [1, 2, 3, 4];
console.log(numbers.map((num) => num * 2)); // [2, 4, 6, 8]
console.log(numbers.filter((num) => num > 2)); // [3, 4]
```

### Use Case
- Transforming and filtering data in applications

---

## ES6 Object Methods
### Explanation
Methods like `Object.assign` and `Object.entries` make working with objects easier.

### Example
```javascript
const obj = { name: "Alice", age: 25 };
console.log(Object.entries(obj)); // [["name", "Alice"], ["age", 25]]
```

### Use Case
- Copying and merging objects efficiently

---

## New ES6 Features
### Explanation
Other improvements include default parameters, template literals, and destructuring.

### Example
```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet(); // Hello, Guest!
```

### Use Case
- Writing cleaner and more readable code

---

## Objects

### What are Objects?
Objects in JavaScript are collections of key-value pairs. They allow us to store, organize, and manipulate data efficiently.

### Syntax
```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet: function() {
    return `Hello, my name is ${this.firstName} ${this.lastName}.`;
  }
};
console.log(person.greet());
```

### Use Case
Objects are useful when dealing with structured data, such as representing users, products, or configurations.

```js
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  displayInfo: function() {
    return `${this.brand} ${this.model}, ${this.year}`;
  }
};

console.log(car.displayInfo());
```

---

## Constructors

### What are Constructors?
A constructor function is a special type of function used to create multiple object instances with the same structure.

### Syntax
```js
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.greet = function() {
    return `Hello, I'm ${this.firstName} ${this.lastName}.`;
  };
}

const john = new Person("John", "Doe", 30);
console.log(john.greet());
```

### Use Case
Constructors are useful when creating multiple instances of objects with the same structure, like users in an application.

```js
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.getDetails = function() {
    return `${this.brand} ${this.model} (${this.year})`;
  };
}

const car1 = new Car("Honda", "Civic", 2023);
const car2 = new Car("Tesla", "Model 3", 2022);

console.log(car1.getDetails());
console.log(car2.getDetails());
```

---

## Prototypes

### What are Prototypes?
In JavaScript, prototypes allow objects to inherit properties and methods from a shared prototype object, reducing memory usage.

### Syntax
```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return `${this.name} makes a noise.`;
};

const dog = new Animal("Dog");
console.log(dog.speak());
```

### Use Case
Prototypes help share methods between object instances, reducing memory overhead and improving performance.

```js
function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.getDetails = function() {
  return `${this.title} by ${this.author}`;
};

const book1 = new Book("1984", "George Orwell");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");

console.log(book1.getDetails());
console.log(book2.getDetails());
```

---

## Inheritance

### What is Inheritance?
Inheritance allows an object to derive properties and methods from another object, enabling code reuse and modularity.

### Syntax
```js
function Employee(name, jobTitle) {
  this.name = name;
  this.jobTitle = jobTitle;
}

Employee.prototype.getDetails = function() {
  return `${this.name} works as a ${this.jobTitle}.`;
};

function Manager(name, jobTitle, department) {
  Employee.call(this, name, jobTitle);
  this.department = department;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

const manager = new Manager("Alice", "Project Manager", "IT");
console.log(manager.getDetails());
```

### Use Case
Inheritance is useful when creating specialized objects based on a common structure.

```js
function Vehicle(type, brand) {
  this.type = type;
  this.brand = brand;
}

Vehicle.prototype.getInfo = function() {
  return `This is a ${this.brand} ${this.type}.`;
};

function Truck(brand, loadCapacity) {
  Vehicle.call(this, "Truck", brand);
  this.loadCapacity = loadCapacity;
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

const truck = new Truck("Ford", "10 tons");
console.log(truck.getInfo());
```

## Properties

## Arrays
### Introduction
An **array** in JavaScript is a special variable that can hold multiple values at once. Unlike traditional variables that store a single value, arrays allow for grouping related items together.

### Syntax
```javascript
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // ["Apple", "Banana", "Cherry"]
```

### Use Cases
1. **Storing multiple values:** Instead of declaring multiple variables, arrays can store related data in an organized way.
2. **Iterating over data:** Arrays allow looping through values efficiently.
3. **Manipulating data dynamically:** JavaScript provides many built-in methods to modify arrays, such as `push()`, `pop()`, `map()`, `filter()`, etc.

### Example: Using Array Methods
```javascript
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]
```

## Attributes
### Introduction
In JavaScript, **attributes** refer to properties that belong to HTML elements or objects. They provide additional metadata about the element or object, such as `id`, `class`, `name`, etc.

### Syntax
```javascript
let element = document.getElementById("myElement");
console.log(element.getAttribute("class")); // Output: some-class-name
```

### Use Cases
1. **Manipulating HTML elements dynamically:** Attributes allow JavaScript to modify the behavior and styling of elements.
2. **Accessing and setting custom data attributes:** Custom attributes store extra information about an element.
3. **Controlling element properties:** Attributes control behaviors like `disabled`, `readonly`, `checked`, etc.

### Example: Changing an Attribute
```javascript
let button = document.getElementById("submitButton");
button.setAttribute("disabled", "true"); // Disables the button
```

## Special Types
### Introduction
JavaScript includes **special types** such as `null`, `undefined`, `Symbol`, and `BigInt`. These types serve specific purposes and differ from primitive data types like `string` or `number`.

### Special Types in JavaScript
1. **null:** Represents an explicitly empty or non-existent value.
2. **undefined:** Represents an uninitialized variable.
3. **Symbol:** A unique and immutable identifier.
4. **BigInt:** Allows representation of integers larger than `Number.MAX_SAFE_INTEGER`.

### Example: Special Types in Action
```javascript
let emptyValue = null;
let notDefined;
let uniqueId = Symbol("id");
let bigNumber = BigInt(9007199254740991);

console.log(emptyValue); // null
console.log(notDefined); // undefined
console.log(uniqueId); // Symbol(id)
console.log(bigNumber); // 9007199254740991n
```

### Use Cases
1. **Using `null` for intentional absence of values.**
2. **Checking for undefined variables before accessing properties.**
3. **Using `Symbol` to create unique object keys.**
4. **Handling large integers beyond standard numeric limits with `BigInt`.**

---

## Miscellaneous Topics


## Comparison Operators
Comparison operators are used to compare values in JavaScript. They return boolean results (`true` or `false`).

### Types of Comparison Operators
- `==` (Equality): Checks if values are equal but does not check types.
- `===` (Strict Equality): Checks if values and types are equal.
- `!=` (Inequality): Checks if values are not equal.
- `!==` (Strict Inequality): Checks if values and types are not equal.
- `>` (Greater than)
- `<` (Less than)
- `>=` (Greater than or equal to)
- `<=` (Less than or equal to)

### Example
```javascript
console.log(5 == '5');  // true (only checks value)
console.log(5 === '5'); // false (checks value and type)
console.log(10 > 5);    // true
console.log(10 !== 5);  // true
```

### Use Case
Strict equality (`===`) is recommended to avoid unexpected type coercion.

---

## Variable Scope
Scope determines the accessibility of variables.

### Types of Scope
- **Global Scope**: Variables declared outside functions are accessible anywhere.
- **Function Scope**: Variables declared inside a function are accessible only within that function.
- **Block Scope** (introduced in ES6): Variables declared with `let` or `const` inside a block `{}` are limited to that block.

### Example
```javascript
let globalVar = "I'm global";

function testScope() {
    let functionVar = "I'm inside a function";
    console.log(globalVar);  // Accessible
    console.log(functionVar); // Accessible
}

console.log(globalVar);  // Accessible
console.log(functionVar); // Error: functionVar is not defined
```

### Use Case
Use `let` and `const` instead of `var` to avoid accidental global variable declarations.

---

## Strict Mode
Strict mode helps catch common coding errors and prevents unsafe actions.

### Enabling Strict Mode
```javascript
"use strict";

x = 5; // Error: x is not defined
```

### Use Case
Use strict mode in production code to avoid accidental bugs and enforce better coding practices.

---

## Functions
Functions are blocks of reusable code.

### Types of Functions
- **Function Declarations**
- **Function Expressions**
- **Arrow Functions**

### Example
```javascript
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Output: 8
```

### Use Case
Functions are useful for modular and reusable code.

---

## Context (`this` Keyword)
`this` refers to the execution context of a function.

### Example
```javascript
const obj = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};
obj.greet(); // Output: Hello, Alice
```

### Use Case
Use `this` to refer to an object inside its method.

---

## Immediately Invoked Function Expressions (IIFE)
IIFE is a function that executes immediately after being defined.

### Example
```javascript
(function() {
    console.log("I run immediately!");
})();
```

### Use Case
Used to prevent global namespace pollution.

---

## Namespaces
JavaScript does not have built-in namespaces, but objects can be used to group related functions.

### Example
```javascript
const MyNamespace = {
    sayHello: function() {
        console.log("Hello from MyNamespace!");
    }
};
MyNamespace.sayHello();
```

### Use Case
Avoid naming conflicts in large applications.

---

## Exceptions
Exceptions handle errors in a structured way using `try...catch`.

### Example
```javascript
try {
    let x = y; // Error: y is not defined
} catch (error) {
    console.log("An error occurred: " + error.message);
}
```

### Use Case
Use exception handling to prevent application crashes.

---

## Promises
Promises handle asynchronous operations.

### Example
```javascript
let myPromise = new Promise((resolve, reject) => {
    let success = true;
    success ? resolve("Success!") : reject("Failure!");
});

myPromise.then(result => console.log(result))
         .catch(error => console.log(error));
```

### Use Case
Promises are used for handling API calls and asynchronous tasks.

---

## Array Methods

## Accessing Elements

### Explanation
Arrays store multiple values in a single variable, and accessing elements in an array is done using index notation. JavaScript arrays are zero-based, meaning the first element has an index of `0`.

### Example
```javascript
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Cherry
```

### Use Case
Accessing elements is useful when you need to retrieve specific data from an array, such as getting the first or last item.

---

## Outputting an Array

### Explanation
Displaying the contents of an array can be done using loops or built-in methods like `join()` and `toString()`.

### Example
```javascript
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.toString()); // Output: "1,2,3,4,5"
console.log(numbers.join(" - ")); // Output: "1 - 2 - 3 - 4 - 5"
```

### Use Case
Useful for displaying data to users or formatting output for reports and logs.

---

## Manipulating Elements

### Explanation
Elements in an array can be added, removed, or updated using various methods like `push()`, `pop()`, `shift()`, `unshift()`, and `splice()`.

### Example
```javascript
let colors = ["Red", "Green", "Blue"];
colors.push("Yellow"); // Adds an element at the end
console.log(colors); // Output: ["Red", "Green", "Blue", "Yellow"]

colors.pop(); // Removes the last element
console.log(colors); // Output: ["Red", "Green", "Blue"]

colors.shift(); // Removes the first element
console.log(colors); // Output: ["Green", "Blue"]

colors.unshift("Purple"); // Adds an element at the beginning
console.log(colors); // Output: ["Purple", "Green", "Blue"]
```

### Use Case
Manipulating elements is essential when modifying dynamic lists such as shopping carts or user selections.

---

## Searching

### Explanation
JavaScript provides methods like `indexOf()`, `lastIndexOf()`, and `includes()` to search for elements in an array.

### Example
```javascript
let animals = ["Cat", "Dog", "Elephant", "Dog"];
console.log(animals.indexOf("Dog")); // Output: 1 (first occurrence)
console.log(animals.lastIndexOf("Dog")); // Output: 3 (last occurrence)
console.log(animals.includes("Cat")); // Output: true
```

### Use Case
Searching is useful for checking if an item exists in a dataset or finding specific records.

---

## Creating Subsets

### Explanation
Creating subsets of an array can be done using methods like `slice()` and `filter()`.

### Example
```javascript
let numbers = [10, 20, 30, 40, 50];
let subset = numbers.slice(1, 4); // Extracts elements from index 1 to 3
console.log(subset); // Output: [20, 30, 40]

let evenNumbers = numbers.filter(num => num % 20 === 0);
console.log(evenNumbers); // Output: [20, 40]
```

### Use Case
Useful for pagination, filtering data, or extracting relevant information from a dataset.

---

## Processing

### Explanation
Processing elements in an array often involves iterating through elements using methods like `map()`, `forEach()`, and `reduce()`.

### Example
```javascript
let prices = [10, 20, 30];
let updatedPrices = prices.map(price => price * 1.1); // Increases prices by 10%
console.log(updatedPrices); // Output: [11, 22, 33]

prices.forEach(price => console.log("Price: $" + price));

let total = prices.reduce((acc, price) => acc + price, 0);
console.log("Total price:", total); // Output: Total price: 60
```

### Use Case
Processing arrays is crucial in data manipulation tasks, such as applying discounts to prices, summarizing reports, or iterating over lists of items.

---

# Browser Environment

## Browser Object Model (BOM)

### Introduction
The Browser Object Model (BOM) represents additional objects provided by the browser (apart from the Document Object Model) to interact with the browser window. Unlike the DOM, the BOM is not standardized and can vary slightly between different browsers.

### Use Case
The BOM is primarily used for interacting with browser properties such as navigating between pages, handling cookies, and working with browser-specific features.

### Example
```javascript
// Open a new window
window.open("https://www.example.com", "_blank");

// Close the current window
window.close();

// Alert message
window.alert("Welcome to JavaScript!");

// Get the browser's inner height and width
console.log(window.innerHeight, window.innerWidth);
```

---

## Screen

### Introduction
The `screen` object provides information about the user's screen dimensions. It helps in making web applications responsive by adjusting layouts dynamically based on the screen size.

### Use Case
Used for detecting screen resolution and optimizing web layouts dynamically.

### Example
```javascript
console.log("Screen Width: " + screen.width);
console.log("Screen Height: " + screen.height);
console.log("Available Width: " + screen.availWidth);
console.log("Available Height: " + screen.availHeight);
console.log("Color Depth: " + screen.colorDepth);
```

---

## Location

### Introduction
The `location` object contains information about the current URL of the browser and allows navigation to new URLs.

### Use Case
It is used to get or change the current URL and reload the page.

### Example
```javascript
// Get the current URL
console.log(window.location.href);

// Redirect to another page
window.location.href = "https://www.google.com";

// Reload the current page
window.location.reload();

// Get protocol
console.log(window.location.protocol);
```

---

## History

### Introduction
The `history` object provides access to the user's browsing history and allows navigation through it.

### Use Case
Used for implementing browser navigation functionality within a web application.

### Example
```javascript
// Go back one page
window.history.back();

// Go forward one page
window.history.forward();

// Go n steps back/forward
window.history.go(-2); // Goes back 2 pages
```

---

## Navigator

### Introduction
The `navigator` object contains information about the browser, such as its name, version, and platform details.

### Use Case
Useful for detecting browser type, version, and checking if specific features are available.

### Example
```javascript
console.log("Browser Name: " + navigator.appName);
console.log("Browser Version: " + navigator.appVersion);
console.log("User-Agent: " + navigator.userAgent);
console.log("Platform: " + navigator.platform);
console.log("Cookies Enabled: " + navigator.cookieEnabled);
```

## Document Object Model (DOM)

## Introduction
The **Document Object Model (DOM)** is a programming interface that represents the structure of a web document. It allows developers to interact with and manipulate HTML and XML documents programmatically using JavaScript.

The DOM represents the document as a tree structure where each element, attribute, and text is a node in the tree. By using JavaScript, we can traverse, modify, and manipulate these nodes dynamically.

## Why Use the DOM?
- **Dynamically Update Content:** Change HTML and CSS properties without reloading the page.
- **Interactive Web Pages:** Handle user events like clicks, inputs, and form submissions.
- **Modify Document Structure:** Add, remove, and rearrange elements dynamically.
- **Access Element Attributes:** Retrieve and modify attribute values programmatically.

## DOM Structure
A simple HTML document and its corresponding DOM tree:

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Example</title>
</head>
<body>
    <h1 id="title">Hello World</h1>
    <p class="content">This is a paragraph.</p>
</body>
</html>
```

### Corresponding DOM Tree
```
Document
 ├── <html>
 │    ├── <head>
 │    │    ├── <title>
 │    │    │    └── "DOM Example"
 │    ├── <body>
 │         ├── <h1 id="title">
 │         │    └── "Hello World"
 │         ├── <p class="content">
 │              └── "This is a paragraph."
```

## Accessing DOM Elements
We can access elements using JavaScript methods like `getElementById`, `getElementsByClassName`, `querySelector`, etc.

### Example:
```javascript
// Access an element by ID
let titleElement = document.getElementById("title");
console.log(titleElement.innerText); // Output: Hello World

// Access elements by class
let paragraphElement = document.querySelector(".content");
console.log(paragraphElement.innerText); // Output: This is a paragraph.
```

## Modifying DOM Elements
We can change element content, styles, and attributes dynamically.

### Example:
```javascript
// Change text content
document.getElementById("title").innerText = "Welcome to DOM!";

// Change style
document.querySelector(".content").style.color = "blue";
```

---

# Element Inheritance

## What is Element Inheritance?
Element inheritance in the DOM refers to how child elements inherit certain properties, styles, and behaviors from their parent elements.

## Types of Inheritance in the DOM
1. **CSS Inheritance**: Some CSS properties are automatically inherited by child elements, such as text color and font.
2. **Prototype-based Inheritance**: DOM elements inherit methods and properties from their respective prototypes.

## CSS Inheritance Example
```html
<style>
    body {
        color: red; /* Inherited by child elements */
    }
</style>
<body>
    <p>This text will be red because it inherits from body.</p>
</body>
```

### Overriding Inherited Styles
To override inherited styles, explicitly define them.
```html
<style>
    body {
        color: red;
    }
    p {
        color: blue; /* Overrides inherited color */
    }
</style>
```

## Prototype-based Inheritance in the DOM
Every HTML element is an object that inherits from a prototype chain. For example, an `<h1>` element inherits properties from `HTMLElement`, which in turn inherits from `Element` and `Node`.

### Example:
```javascript
let heading = document.querySelector("h1");
console.log(heading instanceof HTMLElement); // true
console.log(heading instanceof Element); // true
console.log(heading instanceof Node); // true
```

## Use Cases of Inheritance in the DOM
- **Reusing CSS properties**: Ensures consistency in styles without duplicating code.
- **Prototype-based methods**: Allows easy access to common properties like `innerText`, `style`, and `classList`.

---

# Summary
- The DOM represents HTML as a tree structure, enabling dynamic interaction with web pages.
- We can manipulate elements, attributes, and styles using JavaScript.
- Inheritance in the DOM occurs both in CSS (style inheritance) and in JavaScript (prototype-based inheritance).
- Understanding DOM manipulation and inheritance is essential for creating dynamic and interactive web applications.

---




 




