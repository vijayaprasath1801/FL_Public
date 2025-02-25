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

*(The following sections will include detailed explanations, use cases, and example code for all listed topics.)*

