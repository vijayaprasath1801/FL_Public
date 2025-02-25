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

# Media Queries and Responsive Design in CSS

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

## UI Breakpoints and Media Queries

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

This guide should help beginners understand the power of media queries and how they contribute to responsive web design. Let me know if you'd like to dive deeper into advanced responsive design techniques!



