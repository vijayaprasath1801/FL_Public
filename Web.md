# Web Development Training Guide

## Table of Contents

1. [HTML 5](#html-5)
   - [Grouping Elements](#grouping-elements)
     - Paragraph
     - Horizontal Rule
   - [Listing Elements](#listing-elements)
     - List
     - Description List
   - [Inline Frames](#inline-frames)
   - [Table HTML Elements](#table-html-elements)
     - Simple Table
     - Column and Row Headings
     - Column Groups
     - Table Heading and Footer
     - Spanning Cells
   - [Embedded HTML Elements](#embedded-html-elements)
     - Anchor
     - Images
   - [Form Element](#form-element)
     - Form Action
     - Form Method
     - Additional Attributes
   - [Button Types](#button-types)

2. [CSS](#css)
   - [CSS Selectors](#css-selectors)
     - Selector Overview
       - Element Selectors
       - Class Selectors
       - ID Selectors
       - Attribute Selectors
       - Pseudo-Class Selectors
       - Pseudo-Elements
   - [Using Combinators](#using-combinators)
     - Combining Element and Class Selectors
     - Pseudo-Selectors
     - Combinator Operators
     - The Not Selector
     - Group Operator
     - Resolving Conflicts
   - [Media Queries](#media-queries)
     - Media Attributes
     - Using Media Queries
     - UI Breakpoints and Media Queries
   - [Positioning Content](#positioning-content)
   - [Display](#display)
   - [Defining Sizes](#defining-sizes)
     - Absolute Size
     - Relative Size
     - Setting Maximum Values
     - Content-Based
     - Box Sizing
   - [Float](#float)
     - Clearing Floats
     - Containing Floats
   - [Inline Block](#inline-block)
   - [Position](#position)
     - Relative Positioning
     - Absolute Positioning
     - Fixed Positioning
   - [Z-Index](#z-index)
   - [Centering Content](#centering-content)
   - [Text Styles](#text-styles)
     - Fonts
       - Font Families
       - Font Settings
     - Text Formatting
       - Horizontal Alignment
       - Indent
       - Overflow
       - Quotes
       - Shadow
       - Capitalization
   - [Spacing and Alignment](#spacing-and-alignment)
     - Handling Whitespace
     - Vertical Alignment
     - Break
     - Word Wrap
     - Page Break
     - Cursor
   - [Flexbox](#flexbox)
     - Container Configuration
       - Flex Direction
       - Flex Wrap
       - Justification
       - Aligning Items
     - Item Configuration
       - Grow and Shrink
       - Order
     - Overriding Alignment

3. [JavaScript](#javascript)
   - [JavaScript Essentials](#javascript-essentials)
     - Introducing JavaScript
       - Objects
       - Constructors
       - Prototypes
   - [Inheritance](#inheritance)
     - Using Prototypes
     - Using Create
     - Using the Class Keyword
     - Overriding Members
   - [Properties](#properties)
     - Arrays
     - Attributes
     - Special Types
   - [Miscellaneous Topics](#miscellaneous-topics)
     - Comparison Operators
     - Variable Scope
     - Strict Mode
     - Functions
     - Context
     - Immediately Invoked Functions
     - Namespaces
     - Exceptions
     - Promises
   - [Array Methods](#array-methods)
     - Accessing Elements
     - Outputting an Array
     - Manipulating Element
     - Searching
     - Creating Subsets
     - Processing
   - [Browser Environment](#browser-environment)
     - Browser Object Model
       - Screen
       - Location
       - History
       - Navigator
   - [DOM Elements](#dom-elements)
     - Document Object Model
     - Element Inheritance
     - Basic DOM Manipulation
       - Finding Elements
       - Creating Elements
       - Moving Elements
       - Modifying Elements
     - Dynamic Styling
       - Changing Style Sheets
       - Enabling Style Sheets
       - Choosing a Style Sheet
       - Alternate Style Sheets
       - Using Style Elements
       - Modifying Rules
       - Modifying Classes
       - Modifying Inline Styles
         - Using CSSStyle Declaration
         - Setting Style Properties
         - Using setAttribute
       - Computed Style
     - Events
       - Event Registration
       - Event Propagation
       - Unregistering Events
       - Event Interface
         - Common Event Properties
         - Cancelling Events
       - Exploring Events

---

## HTML 5

### Grouping Elements
**Paragraph:** Used to define blocks of text.
```html
<p>This is a paragraph.</p>
```
**Horizontal Rule:** Adds a thematic break.
```html
<hr />
```

### Listing Elements
**List:** Creates ordered or unordered lists.
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```
**Description List:** Pairs terms with descriptions.
```html
<dl>
  <dt>HTML</dt>
  <dd>A markup language for web pages.</dd>
</dl>
```

### Inline Frames
Used to embed another document within the current HTML.
```html
<iframe src="https://example.com" width="300" height="200"></iframe>
```

# CSS

## CSS Selectors

### Selector Overview

**Element Selectors:** Target HTML elements directly.
```css
p {
  color: blue;
}
```

**Class Selectors:** Target elements with a specific class.
```css
.highlight {
  background-color: yellow;
}
```

**ID Selectors:** Target elements with a specific ID.
```css
#main-title {
  font-size: 24px;
}
```

**Attribute Selectors:** Target elements based on attributes.
```css
a[target="_blank"] {
  color: red;
}
```

**Pseudo-Class Selectors:** Style elements in a specific state.
```css
a:hover {
  text-decoration: underline;
}
```

**Pseudo-Elements:** Style parts of elements.
```css
p::first-line {
  font-weight: bold;
}
```

### Using Combinators

**Combining Element and Class Selectors:**
```css
div.card {
  padding: 20px;
}
```

**Combinator Operators:**
```css
div > p {
  color: green;
}
```

### Media Queries

**Using Media Queries:**
```css
@media (max-width: 600px) {
  body {
    background-color: lightgray;
  }
}
```

### Positioning Content

**Relative Positioning:**
```css
.element {
  position: relative;
  top: 10px;
}
```

**Absolute Positioning:**
```css
.element {
  position: absolute;
  left: 50px;
}
```

### Flexbox

**Container Configuration:**
```css
.container {
  display: flex;
  justify-content: space-between;
}
```

**Item Configuration:**
```css
.item {
  flex-grow: 1;
}
```

---

# JavaScript

## JavaScript Essentials

### Introducing JavaScript

**Objects:**
```js
const person = {
  name: "John",
  age: 30
};
```

**Constructors:**
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
```

**Prototypes:**
```js
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};
```

## Inheritance

**Using Class Keyword:**
```js
class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Bark");
  }
}
```

## Array Methods

**Manipulating Elements:**
```js
const numbers = [1, 2, 3];
numbers.push(4); // [1, 2, 3, 4]
```

**Searching:**
```js
const found = numbers.find(num => num === 2);
```

## DOM Elements

**Finding Elements:**
```js
const button = document.getElementById('myButton');
```

**Modifying Elements:**
```js
button.textContent = 'Clicked!';
```

## Events

**Event Registration:**
```js
button.addEventListener('click', () => {
  alert('Button clicked!');
});
```

# Display in CSS

## Introduction

The `display` property in CSS is one of the most important properties for determining how elements are rendered on a web page. It controls the layout behavior of an element, dictating how it interacts with other elements and how it appears in the document flow.

Understanding `display` is essential for designing layouts, organizing content, and creating responsive designs.

---

## Common Display Values

### 1. `block`
Elements with `display: block` take up the full width of their container by default, starting on a new line.

**Examples of block elements:** `<div>`, `<p>`, `<h1>` - `<h6>`, `<section>`

**CSS Example:**
```css
.block-element {
  display: block;
  background-color: lightblue;
  padding: 10px;
  margin-bottom: 10px;
}
```
**When to use:** Use `block` when you want elements to stack vertically and occupy the full width of the container.

---

### 2. `inline`
Elements with `display: inline` do not start on a new line and only take up as much width as necessary.

**Examples of inline elements:** `<span>`, `<a>`, `<strong>`

**CSS Example:**
```css
.inline-element {
  display: inline;
  color: red;
}
```
**When to use:** Use `inline` when you want elements to flow within the text without breaking the line.

---

### 3. `inline-block`
Similar to `inline`, but allows you to set width and height.

**CSS Example:**
```css
.inline-block-element {
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: coral;
  margin: 5px;
}
```
**When to use:** Useful for creating layouts where elements should sit side by side but still respect width and height properties.

---

### 4. `none`
Removes the element from the document flow entirely; it will not appear on the page.

**CSS Example:**
```css
.hidden-element {
  display: none;
}
```
**When to use:** Use `none` to hide elements completely without removing them from the HTML.

---

### 5. `flex`
Enables a flex container for flexible layouts using the Flexbox model.

**CSS Example:**
```css
.flex-container {
  display: flex;
  justify-content: space-between;
}

.flex-item {
  background-color: lightgreen;
  padding: 20px;
}
```
**When to use:** Ideal for creating responsive layouts and aligning items dynamically within a container.

---

### 6. `grid`
Enables a grid layout system for two-dimensional designs.

**CSS Example:**
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.grid-item {
  background-color: lightcoral;
  padding: 20px;
}
```
**When to use:** Perfect for creating complex layouts with rows and columns.

---

## Advanced Display Values

### 1. `table`
Makes an element behave like a table.

**CSS Example:**
```css
.table-style {
  display: table;
  width: 100%;
  border: 1px solid black;
}
```
**When to use:** Use when you need table-like behavior without using actual HTML table elements.

### 2. `list-item`
Displays the element as a list item with a bullet or number.

**CSS Example:**
```css
.custom-list {
  display: list-item;
  list-style-type: square;
}
```
**When to use:** For custom lists or when creating list structures without using `<ul>` or `<ol>`.

---

## Best Practices

1. **Use semantic HTML:** Only override default display values when necessary.
2. **Minimize `display: none`:** Overusing it can confuse screen readers and accessibility tools.
3. **Leverage Flexbox and Grid:** These provide modern, responsive layout techniques.
4. **Test Responsiveness:** Always check how your display settings work on different screen sizes.

---



