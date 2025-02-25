# React Training Module

## Module 1: Introduction to React

### What is React?
React is a JavaScript library for building user interfaces. It is component-based, declarative, and focuses on rendering UI efficiently.

### Key Features
- Virtual DOM
- JSX
- Components
- Unidirectional Data Flow

### Setting Up a React Environment
- **Explanation:** Use `create-react-app` or `Vite` to set up a React project.
- **Hands-on:** Create a new React project using the following command:
  ```bash
  npx create-react-app my-app
  ```

### JSX (JavaScript XML)
- **Explanation:** JSX is a syntax extension that allows HTML-like code in JavaScript.
- **Example:**
  ```js
  const element = <h1>Hello, World!</h1>;
  ```

## Module 2: Core Concepts

### Props and State
- **Explanation:** Props are read-only data passed to components, while state is mutable data managed within a component.
- **Example:**
  ```js
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  ```

### Event Handling
- **Explanation:** React uses camelCase for event handlers (e.g., `onClick`).
- **Example:**
  ```js
  function handleClick() {
    alert('Button clicked!');
  }
  
  <button onClick={handleClick}>Click Me</button>
  ```

### Conditional Rendering
- **Explanation:** Use JavaScript operators like `if` or ternary operators to conditionally render elements.
- **Example:**
  ```js
  function Greeting({ isLoggedIn }) {
    return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>;
  }
  ```

### Lists and Keys
- **Explanation:** Use `map()` to render lists and assign a unique key to each item.
- **Example:**
  ```js
  const numbers = [1, 2, 3, 4];
  const listItems = numbers.map((number) => <li key={number}>{number}</li>);
  ```

## Module 3: Advanced Topics

### Hooks
- **Explanation:** Hooks like `useState`, `useEffect`, and `useContext` allow functional components to manage state and side effects.
- **Example:**
  ```js
  import { useEffect, useState } from 'react';

  function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = `You clicked ${count} times`;
    }, [count]);

    return <button onClick={() => setCount(count + 1)}>Click me</button>;
  }
  ```

### Context API
- **Explanation:** Context provides a way to pass data through the component tree without manually passing props.
- **Example:**
  ```js
  import React from 'react';

  const ThemeContext = React.createContext('light');

  function App() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
  ```

### React Router
- **Explanation:** React Router enables navigation in a React app.
- **Example:**
  ```js
  import { BrowserRouter, Routes, Route } from 'react-router-dom';

  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    );
  }
  ```

### State Management with Redux
- **Explanation:** Redux is a predictable state container for managing global state.
- **Example:** Set up a Redux store, actions, and reducers (not included for brevity).

---

## Interview Content and Questions

### Basic Questions
1. What is React, and how is it different from other frameworks?
2. Explain the Virtual DOM and its benefits.
3. What are props and state? How do they differ?

### Intermediate Questions
1. How do you handle side effects in functional components?
2. What are React hooks? Can you name a few and explain their use cases?
3. How does React Router work?

### Advanced Questions
1. Explain the Context API and when to use it.
2. How would you optimize a React application for performance?
3. What is Redux, and how does it work with React?

### Coding Questions
1. Write a React component that fetches data from an API and displays it.
2. Implement a counter component using hooks.
3. Debug a given React code snippet.

---

## Coding Task: Find the Bug

### Task
The following code should display a counter that increases by 1 when the button is clicked.

```js
import React, { useState } from 'react';

const BuggyCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count++); // BUG: Incorrect state update
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default BuggyCounter;
```

### Issue
Using `count++` directly mutates the state, which React does not track properly.

### Solution
Use the previous state to ensure proper updates:

```js
setCount((prevCount) => prevCount + 1);
```
