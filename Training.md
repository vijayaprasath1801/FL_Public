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

# Advanced React Coding Test: Task Manager App

## Problem Statement

You are given a simplified **Task Manager** app built with **React** and **Redux** for state management. The app should allow users to:

- Add new tasks.
- Mark tasks as completed.
- Filter tasks by status (**All**, **Active**, **Completed**).

However, there are several bugs causing unexpected behavior that need to be addressed.

---

## Code Snippet (Buggy Version)

### `store.js`

```js
import { createStore } from 'redux';

const initialState = {
  tasks: [],
  filter: 'ALL',
};

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false }],
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            task.completed = !task.completed; // BUG: Mutating state directly
          }
          return task;
        }),
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}

export const store = createStore(taskReducer);
```

### `App.js`

```js
import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './store';

const TaskApp = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);

  const handleAddTask = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      dispatch({ type: 'ADD_TASK', payload: e.target.value });
      e.target.value = '';
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'COMPLETED') return task.completed;
    if (filter === 'ACTIVE') return !task.completed;
    return true;
  });

  return (
    <div>
      <h1>Task Manager</h1>
      <input type="text" placeholder="Add new task..." onKeyDown={handleAddTask} />
      <div>
        {filteredTasks.map((task) => (
          <div key={task.id} onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: { id: task.id } })}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
          </div>
        ))}
      </div>
      <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'ALL' })}>All</button>
      <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'ACTIVE' })}>Active</button>
      <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'COMPLETED' })}>Completed</button>
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <TaskApp />
  </Provider>
);

export default App;
```

---

## Requirements

1. **Fix the bugs** in state updates and ensure the application behaves as expected.
2. Ensure **state immutability** is maintained.
3. Implement a feature to **delete a task**.
4. Improve performance by **memoizing the task list** to prevent unnecessary re-renders.
5. Add a visual indicator for the **active filter**.

---

## Known Issues to Identify and Fix

- Toggling a task's completion status mutates state directly (`task.completed = !task.completed`).
- Filtering doesn't update correctly when switching between views rapidly.
- No option to delete tasks.
- Unnecessary re-renders of the task list when unrelated state changes occur.

---

## Evaluation Criteria

- Proper usage of **Redux** for state management.
- Avoiding direct state mutations.
- Clean, readable, and maintainable code.
- Implementation of performance optimization techniques.
- Handling edge cases effectively.

---

## Bonus Points

- Add animations when adding or removing tasks.
- Persist tasks using **localStorage**.
- Implement unit tests for the reducer and actions.


```
