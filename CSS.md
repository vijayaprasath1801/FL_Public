# CSS Training Guide for Beginners

## Table of Contents

1. [CSS Selectors](#css-selectors)
   - [Selector Overview](#selector-overview)
     - [Element Selectors](#element-selectors)
     - [Class Selectors](#class-selectors)
     - [ID Selectors](#id-selectors)
     - [Attribute Selectors](#attribute-selectors)
     - [Pseudo-Class Selectors](#pseudo-class-selectors)
     - [Pseudo-Elements](#pseudo-elements)
2. [Using Combinators](#using-combinators)
   - [Combining Element and Class Selectors](#combining-element-and-class-selectors)
   - [Pseudo-Selectors](#pseudo-selectors)
   - [Combinator Operators](#combinator-operators)
   - [The Not Selector](#the-not-selector)
   - [Group Operator](#group-operator)
   - [Resolving Conflicts](#resolving-conflicts)
3. [Media Queries](#media-queries)
   - [Media Attributes](#media-attributes)
   - [Using Media Queries](#using-media-queries)
   - [UI Breakpoints and Media Queries](#ui-breakpoints-and-media-queries)
4. [Positioning Content](#positioning-content)
5. [Display](#display)
6. [Defining Sizes](#defining-sizes)
   - [Absolute Size](#absolute-size)
   - [Relative Size](#relative-size)
   - [Setting Maximum Values](#setting-maximum-values)
   - [Content-Based](#content-based)
   - [Box Sizing](#box-sizing)
7. [Float](#float)
   - [Clearing Floats](#clearing-floats)
   - [Containing Floats](#containing-floats)
8. [Inline Block](#inline-block)
9. [Position](#position)
   - [Relative Positioning](#relative-positioning)
   - [Absolute Positioning](#absolute-positioning)
   - [Fixed Positioning](#fixed-positioning)
10. [Z-Index](#z-index)
11. [Centering Content](#centering-content)
12. [Text Styles](#text-styles)
    - [Fonts](#fonts)
      - [Font Families](#font-families)
      - [Font Settings](#font-settings)
    - [Text Formatting](#text-formatting)
      - [Horizontal Alignment](#horizontal-alignment)
      - [Indent](#indent)
      - [Overflow](#overflow)
      - [Quotes](#quotes)
      - [Shadow](#shadow)
      - [Capitalization](#capitalization)
13. [Spacing and Alignment](#spacing-and-alignment)
    - [Handling Whitespace](#handling-whitespace)
    - [Vertical Alignment](#vertical-alignment)
    - [Break](#break)
    - [Word Wrap](#word-wrap)
    - [Page Break](#page-break)
    - [Cursor](#cursor)
14. [Flexbox](#flexbox)
    - [Container Configuration](#container-configuration)
      - [Flex Direction](#flex-direction)
      - [Flex Wrap](#flex-wrap)
      - [Justification](#justification)
      - [Aligning Items](#aligning-items)
    - [Item Configuration](#item-configuration)
      - [Grow and Shrink](#grow-and-shrink)
      - [Order](#order)
    - [Overriding Alignment](#overriding-alignment)

---

## CSS Selectors

### Selector Overview
CSS selectors allow you to target HTML elements and apply styles to them. Different types of selectors help you style elements based on their tag, class, ID, attributes, or states.

### Element Selectors
Targets elements by their tag name.
```css
p {
  color: blue;
}
```
**When to use:** Apply styles to all elements of a specific type.

### Class Selectors
Targets elements with a specific class.
```css
.button {
  background-color: green;
  color: white;
}
```
**When to use:** When multiple elements need the same styling.

### ID Selectors
Targets an element with a specific ID.
```css
#main-title {
  font-size: 24px;
}
```
**When to use:** When styling a unique element.

### Attribute Selectors
Targets elements with specific attributes.
```css
a[target="_blank"] {
  color: red;
}
```
**When to use:** Style elements based on their attributes.

### Pseudo-Class Selectors
Targets elements in a specific state.
```css
a:hover {
  text-decoration: underline;
}
```
**When to use:** Styling based on user interaction or state.

### Pseudo-Elements
Targets specific parts of an element.
```css
p::first-letter {
  font-size: 2em;
}
```
**When to use:** Style specific parts of elements, like the first letter or line.

---

# Using Combinators in CSS

CSS combinators define the relationship between selectors, allowing you to target elements based on their relationship in the HTML structure. Understanding combinators helps in applying styles more precisely and efficiently.

---

## Combining Element and Class Selectors

You can combine element selectors with class selectors to target specific elements with a certain class.

### Example:
```css
button.primary {
  background-color: blue;
  color: white;
}
```

### Explanation:
- Targets `<button>` elements that also have the class `primary`.
- Useful when you want to style specific elements without affecting others with the same class.

### When to Use:
- When you want to style a specific HTML tag that has a particular class without affecting other elements sharing that class.

---

## Pseudo-Selectors

Pseudo-selectors allow you to style elements based on their state or position in the document.

### Example:
```css
a:hover {
  text-decoration: underline;
}

li:first-child {
  font-weight: bold;
}
```

### Explanation:
- `:hover`: Styles elements when the user hovers over them.
- `:first-child`: Styles the first child element within a parent.

### When to Use:
- When you need dynamic styling based on user interactions or element positioning.

---

## Combinator Operators

### 1. **Descendant Selector (` `)**
Targets all elements inside a specific element.

```css
div p {
  color: gray;
}
```
- Styles all `<p>` elements inside a `<div>`.

### 2. **Child Selector (`>`)**
Targets direct child elements only.

```css
ul > li {
  list-style-type: square;
}
```
- Styles only direct `<li>` children of `<ul>`.

### 3. **Adjacent Sibling Selector (`+`)**
Targets the first element immediately following a specified element.

```css
h1 + p {
  margin-top: 0;
}
```
- Removes margin from the first paragraph after an `<h1>`.

### 4. **General Sibling Selector (`~`)**
Targets all sibling elements that follow the specified element.

```css
h1 ~ p {
  color: darkgray;
}
```
- Styles all paragraphs that follow an `<h1>`.

### When to Use:
- Use these to target elements based on hierarchy or structural relationships in your HTML.

---

## The Not Selector

The `:not()` pseudo-class excludes elements from selection.

### Example:
```css
button:not(.disabled) {
  background-color: green;
  color: white;
}
```

### Explanation:
- Styles all `<button>` elements except those with the class `disabled`.

### When to Use:
- When you want to apply styles to all elements except specific ones.

---

## Group Operator

Group selectors allow you to apply the same styles to multiple elements at once.

### Example:
```css
h1, h2, h3 {
  font-family: Arial, sans-serif;
}
```

### Explanation:
- Applies the same font styling to all `h1`, `h2`, and `h3` headings.

### When to Use:
- When multiple elements share the same styles, making your CSS more concise and efficient.

---

## Resolving Conflicts

When multiple selectors target the same element, CSS resolves conflicts using specificity and source order.

### Specificity Hierarchy:
1. Inline styles (e.g., `style=""`)
2. ID selectors (`#id`)
3. Class selectors, attribute selectors, pseudo-classes (`.class`, `[attr]`, `:hover`)
4. Element selectors and pseudo-elements (`h1`, `::before`)

### Example:
```css
/* Less specific */
p {
  color: black;
}

/* More specific */
#special {
  color: red;
}
```

### Source Order:
- If two selectors have equal specificity, the one that appears last in the CSS overrides the earlier one.

### When to Use:
- Use specificity rules to ensure the correct styles are applied, avoiding unnecessary `!important` declarations.

---

## Media Queries

## Table of Contents

1. [Media Queries](#media-queries)
2. [Media Attributes](#media-attributes)
3. [Using Media Queries](#using-media-queries)
4. [UI Breakpoints and Media Queries](#ui-breakpoints-and-media-queries)

---

## Media Queries

**Media Queries** in CSS allow developers to apply different styles depending on the device's characteristics, such as screen size, resolution, orientation, and more. This technique is essential for creating **responsive designs** that adapt to various devices like phones, tablets, and desktops.

### Syntax
```css
@media (condition) {
  /* CSS rules go here */
}
```

### Example
```css
/* Apply styles when the screen width is 600px or less */
@media (max-width: 600px) {
  body {
    background-color: lightgray;
  }
}
```

**When to use:**
- To create responsive designs that adapt to different screen sizes.
- To optimize layouts for mobile, tablet, and desktop views.

---

## Media Attributes

**Media Attributes** specify the media type for which a particular CSS file should be applied. Common types include:

- `all`: Default for all devices.
- `screen`: For computer screens, tablets, and smartphones.
- `print`: For printed materials and print previews.
- `speech`: For screen readers.

### Example
```html
<link rel="stylesheet" href="screen.css" media="screen">
<link rel="stylesheet" href="print.css" media="print">
```

**When to use:**
- When you want specific styles for print or screen readers.
- To ensure your webpage is accessible and looks good when printed.

---

## Using Media Queries

You can combine multiple conditions to create advanced responsive designs.

### Example: Combining Conditions
```css
/* Styles for devices between 600px and 1200px */
@media (min-width: 600px) and (max-width: 1200px) {
  .container {
    padding: 20px;
  }
}
```

### Example: Orientation
```css
/* Styles applied only in landscape mode */
@media (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}
```

**When to use:**
- To create more targeted and precise designs.
- To handle specific device orientations and resolutions.

---

## Display

**Breakpoints** are specific screen widths where your design needs to adapt to provide a better user experience. Common breakpoints are based on popular device sizes.

### Common Breakpoints
- Small devices (phones): `max-width: 600px`
- Medium devices (tablets): `min-width: 601px` and `max-width: 960px`
- Large devices (desktops): `min-width: 961px`

### Example: Responsive Design with Breakpoints
```css
/* Mobile styles */
@media (max-width: 600px) {
  body {
    font-size: 14px;
  }
}

/* Tablet styles */
@media (min-width: 601px) and (max-width: 960px) {
  body {
    font-size: 16px;
  }
}

/* Desktop styles */
@media (min-width: 961px) {
  body {
    font-size: 18px;
  }
}
```

**When to use:**
- To ensure your design looks good on various screen sizes.
- To provide an optimal experience for users on different devices.

---

## Positioning Content

## Introduction

Positioning in CSS is a powerful tool that allows you to control where elements appear on a web page. Whether it's aligning a button, creating a sidebar, or overlaying text on an image, understanding how positioning works is essential for creating effective layouts.

CSS provides several positioning schemes that determine how elements are placed relative to their container or other elements.

## Types of Positioning

### 1. **Static Positioning (Default)**

By default, every HTML element has a `position` value of `static`. This means elements appear in the normal document flow.

**Syntax:**
```css
.element {
  position: static;
}
```

**When to use:** This is the default positioning method; you don't need to explicitly set it unless you're overriding another positioning rule.

### 2. **Relative Positioning**

`relative` positioning allows you to move an element relative to its original position in the document flow. The space the element originally occupied remains reserved.

**Syntax:**
```css
.element {
  position: relative;
  top: 10px;  /* Moves element 10px down */
  left: 20px; /* Moves element 20px to the right */
}
```

**When to use:** Useful when you want to nudge elements slightly without removing them from the normal flow.

**Example:**
```html
<div style="position: relative; top: 20px; left: 10px; background: lightblue; padding: 10px;">
  I am relatively positioned!
</div>
```

### 3. **Absolute Positioning**

`absolute` positioning removes the element from the normal document flow. The element is positioned relative to the nearest parent with `position: relative`, `absolute`, or `fixed`. If no such parent exists, it will position itself relative to the `<html>` element.

**Syntax:**
```css
.element {
  position: absolute;
  top: 50px;
  left: 100px;
}
```

**When to use:** For elements that need to be positioned freely, like tooltips, dropdown menus, or overlays.

**Example:**
```html
<div style="position: relative; height: 200px; background: lightgray;">
  <div style="position: absolute; top: 20px; left: 30px; background: coral; padding: 10px;">
    Positioned absolutely!
  </div>
</div>
```

### 4. **Fixed Positioning**

`fixed` positioning anchors an element to the viewport, meaning it stays in the same place even when scrolling.

**Syntax:**
```css
.element {
  position: fixed;
  top: 0;
  right: 0;
  background: navy;
  color: white;
  padding: 10px;
}
```

**When to use:** For elements that should always be visible, like sticky headers, floating action buttons, or navigation bars.

**Example:**
```html
<div style="position: fixed; bottom: 10px; right: 10px; background: green; color: white; padding: 10px;">
  I stay in the same place!
</div>
```

### 5. **Sticky Positioning**

`sticky` positioning is a hybrid between `relative` and `fixed`. The element behaves like `relative` until it reaches a specified point while scrolling, then it becomes `fixed`.

**Syntax:**
```css
.element {
  position: sticky;
  top: 0;
  background: orange;
  padding: 10px;
}
```

**When to use:** For sticky headers or elements that need to stay visible while scrolling until a certain point.

**Example:**
```html
<div style="position: sticky; top: 0; background: yellow; padding: 10px;">
  I stick to the top when scrolling!
</div>
```

---

## Z-Index: Controlling Layer Order

The `z-index` property controls the vertical stacking order of elements. Higher values appear on top of elements with lower values.

**Syntax:**
```css
.element {
  position: absolute;
  z-index: 10;
}
```

**Example:**
```html
<div style="position: relative; z-index: 1; background: lightblue; padding: 20px;">
  Behind Element
</div>
<div style="position: absolute; top: 30px; left: 30px; z-index: 2; background: coral; padding: 20px;">
  On Top
</div>
```

**When to use:** When you need to control which elements appear on top, like modals, dropdowns, or overlays.

---

## Best Practices for Positioning

1. **Minimize the use of `absolute` and `fixed`:** These can disrupt the flow of your layout and make responsive design more difficult.
2. **Use `relative` for small adjustments:** Great for nudging elements without disrupting the document flow.
3. **Use `sticky` for persistent headers:** Makes navigation easy on long pages.
4. **Always define positioning context:** Use `relative` on a parent container if you want child elements to be positioned inside.
5. **Avoid magic numbers:** Relying on hardcoded pixel values can lead to inconsistent behavior across different screen sizes.

---



## Defining Sizes

## Introduction

In CSS, defining sizes is crucial for controlling the layout and responsiveness of web elements. Proper size definitions help create consistent, adaptable, and visually appealing designs. CSS allows you to define sizes using various units and methods, depending on your design needs.

---

## Absolute Size

**Absolute size** units refer to fixed dimensions that remain consistent across all devices and screen sizes. These units do not change regardless of screen size or resolution.

### Common Absolute Units:
- `px` (pixels): Fixed size unit, most commonly used.
- `cm` (centimeters): Rarely used, more suited for print.
- `mm` (millimeters): Similar to cm, mainly for print.
- `in` (inches): Used for print layouts.
- `pt` (points): 1pt = 1/72 inch, used in print.
- `pc` (picas): 1pc = 12 points, also used in print.

### Example:
```css
.box {
  width: 200px;
  height: 100px;
  background-color: lightblue;
}
```

**When to use:** Use absolute sizes when you need consistency across all devices, like for icons or fixed elements.

---

## Relative Size

**Relative size** units adjust based on other elements or the viewport, making them essential for responsive design.

### Common Relative Units:
- `%` (percentage): Relative to the parent element.
- `em`: Relative to the font-size of the element.
- `rem`: Relative to the root element's font-size.
- `vw`: Relative to 1% of the viewport's width.
- `vh`: Relative to 1% of the viewport's height.

### Example:
```css
.container {
  width: 80%;
  padding: 2em;
}
```

**When to use:** Use relative sizes for responsiveness, especially when designing layouts that adapt to different screen sizes.

---

## Setting Maximum Values

You can use `max-width` and `max-height` to limit how large an element can grow.

### Example:
```css
.image {
  width: 100%;
  max-width: 500px;
  height: auto;
}
```

**When to use:** Prevent images or elements from becoming too large on wide screens while allowing them to shrink for smaller screens.

---

## Content-Based Sizing

Content-based sizing automatically adjusts element size to fit its content.

### Example:
```css
.button {
  padding: 10px 20px;
  background-color: green;
  color: white;
  display: inline-block;
}
```

**When to use:** Use for buttons, cards, or elements where size should depend on content length.

You can also use `min-content`, `max-content`, and `fit-content` for content-based sizing:

```css
.card {
  width: fit-content;
  padding: 1em;
  background-color: #f5f5f5;
}
```

---

## Box Sizing

By default, CSS calculates an element's size without including padding and border, which can lead to unexpected results. The `box-sizing` property helps control how width and height are calculated.

### Values:
- `content-box` (default): Width and height include only the content.
- `border-box`: Width and height include padding and border.

### Example:
```css
.box-default {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  box-sizing: content-box; /* Actual size: 200px + padding + border */
}

.box-border {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  box-sizing: border-box; /* Total size remains 200px */
}
```

**When to use:** It's a best practice to use `box-sizing: border-box` to avoid size overflow issues and simplify layout calculations.

---
  
## Float

### What is Float?
The `float` property in CSS is used to position elements to the left or right of their container, allowing text and inline elements to wrap around them.

### Syntax
```css
selector {
  float: left | right | none | inherit;
}
```

### Values Explained
- `left`: Floats the element to the left.
- `right`: Floats the element to the right.
- `none`: Removes any floating from the element.
- `inherit`: Inherits the float property from its parent.

### Example: Basic Float Usage
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    .box {
      width: 150px;
      height: 150px;
      margin: 10px;
      background-color: lightblue;
    }

    .left-float {
      float: left;
    }

    .right-float {
      float: right;
    }
  </style>
</head>
<body>
  <div class="box left-float">Left Float</div>
  <div class="box right-float">Right Float</div>
  <p>This text will wrap around the floated boxes.</p>
</body>
</html>
```

**When to Use:** Use floats when you want elements (like images or sidebars) to align beside other content.

---

## Clearing Floats

### What is Clearing?
When you float elements, following content can wrap around them. To stop this behavior, you need to clear the float using the `clear` property.

### Syntax
```css
selector {
  clear: left | right | both | none;
}
```

### Values Explained
- `left`: Clears elements floated to the left.
- `right`: Clears elements floated to the right.
- `both`: Clears elements floated to both sides.
- `none`: Default, no clearing.

### Example: Clearing Floats
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    .floated-box {
      float: left;
      width: 100px;
      height: 100px;
      background-color: coral;
      margin-right: 10px;
    }

    .clear-box {
      clear: both;
      background-color: lightgreen;
      padding: 10px;
    }
  </style>
</head>
<body>
  <div class="floated-box">Floating Box</div>
  <p>This text wraps around the floating box.</p>
  <div class="clear-box">Cleared Element</div>
</body>
</html>
```

**When to Use:** When you want elements to appear below floated elements without wrapping around them.

---

## Containing Floats

### Why Contain Floats?
When all child elements inside a container are floated, the parent container can collapse, resulting in layout issues.

### Solution 1: Using `clear` with an Empty Div
```html
<div class="container">
  <div class="floated-box">Float 1</div>
  <div class="floated-box">Float 2</div>
  <div style="clear: both;"></div> <!-- Clears the floats -->
</div>
```

### Solution 2: Using `overflow` Property
```css
.container {
  overflow: hidden; /* Automatically expands to contain floats */
}
```

### Solution 3: Using CSS Clearfix Hack
```css
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
```

### Example: Using Clearfix
```html
<div class="container clearfix">
  <div class="floated-box">Float 1</div>
  <div class="floated-box">Float 2</div>
</div>
```

**When to Use:** Always contain floats when you don't want the parent container to collapse, especially in layouts involving multiple floated elements.

---

## Inline Block

## Introduction

The `inline-block` value in CSS is used with the `display` property. It allows elements to flow inline like `inline` elements, but still lets you set width, height, and margin properties like `block` elements. This makes `inline-block` incredibly useful for layout designs that need both structure and inline behavior.

**Syntax:**
```css
.element {
  display: inline-block;
}
```

## When to Use `inline-block`

- When you want elements to sit next to each other but still be able to set their width and height.
- When you need elements to wrap naturally within a container.
- Useful for creating navigation menus, button groups, or layout grids.

## Basic Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    .box {
      display: inline-block;
      width: 150px;
      height: 150px;
      margin: 10px;
      background-color: lightblue;
      text-align: center;
      line-height: 150px;
    }
  </style>
</head>
<body>
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
</body>
</html>
```

**Explanation:**
- All three boxes will appear side by side.
- You can control width, height, and margin independently for each box.

## Key Features of `inline-block`

1. **Maintains Block-Level Properties:**
   - You can set `width`, `height`, `padding`, and `margin`.

2. **Wraps Inline:**
   - Multiple elements appear on the same line unless there isn’t enough space, in which case they wrap.

3. **Respects Vertical Alignment:**
   - Can be aligned using the `vertical-align` property.

## Handling Whitespace Issue

When using `inline-block`, whitespace (like spaces, tabs, or newlines in the HTML) can create unintended gaps between elements.

**Problematic Example:**
```html
<div class="box">Box 1</div> <div class="box">Box 2</div>
```
This space between `</div>` and `<div>` results in a visible gap.

**Solutions:**
- Remove whitespace between elements.
- Use comments to eliminate space:
  ```html
  <div class="box">Box 1</div><!--
  --><div class="box">Box 2</div>
  ```
- Set `font-size: 0;` on the parent container and reset it on child elements:
  ```css
  .container {
    font-size: 0;
  }
  .box {
    font-size: 16px;
  }
  ```

## Real-World Use Case: Navigation Menu

```html
<nav>
  <ul>
    <li class="menu-item">Home</li>
    <li class="menu-item">About</li>
    <li class="menu-item">Contact</li>
  </ul>
</nav>

<style>
  ul {
    padding: 0;
    margin: 0;
  }

  .menu-item {
    display: inline-block;
    padding: 10px 20px;
    background-color: #333;
    color: white;
    margin-right: 5px;
    cursor: pointer;
  }

  .menu-item:hover {
    background-color: #555;
  }
</style>
```

**Explanation:**
- Menu items display inline.
- You can control padding and hover effects.


