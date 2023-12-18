# React-Notes


- # 1. **Difference between a `Library and Framework`?**

- **Library:** A library is like a toolbox. It contains a collection of tools that you can use to build your software.
- **Framework:** A framework is like a blueprint. It provides a structure for your software, and it tells you how to put the pieces together.

Here is an analogy that you could use in an interview:

- **Library:** Imagine that you are building a house. You could go to the hardware store and buy all of the tools you need separately. But it would be much easier to buy a kit that comes with all of the tools you need, as well as instructions on how to put them together. A library is like a kit for building software.
- **Framework:** Imagine that you are building a house, but you want to make sure that it is built to a certain standard. You could hire an architect to design the house for you. But it would be much easier to use a pre-existing framework that has already been designed to meet certain standards. A framework is like an architect for building software.

![Alt text](image.png)

---

# 2.**What is `CDN`? Why do we use it?**

- A CDN is a network of servers that are spread out all over the world. When a user visits a website that uses a CDN, the content of the website is served from the server that is closest to the user. This can help to improve the loading speed of the website, because the content doesn't have to travel as far.

- CDNs are used by many large websites, such as Google, Amazon, and Netflix. They can also be used by smaller websites to improve their performance.

- Example of how a CDN works:
  Imagine you have a website that is hosted on a server in California. A user in New York requests a page from your website. Instead of the user's request going to the California server, it is routed to a CDN server in New York. The CDN server then fetches the requested page from the California server and sends it to the user. This all happens in a matter of milliseconds, so the user never sees any difference in the speed at which the page loads.

- Key benefits of using a CDN:
  Improved website performance: Faster loading times and reduced latency for users
  Reduced bandwidth costs: Cost savings by caching content at multiple locations
  Increased website availability: Improved uptime and reduced downtime
  Reduced stress on origin servers: Less load on the main server, allowing it to handle more traffic

---

# 3.**Why is React known as React?**

**The name “React” was chosen because it is meant to help developers build user interfaces that are fast and responsive, or “reactive”**

---

# **What is `crossorigin in script tag`?**

- The **`crossorigin`** attribute in the **`<script>`** tag is used to manage how a browser loads and executes scripts from a different domain.
- It helps enforce security by specifying whether the script should be fetched with or without sending credentials (like cookies) along with the request.
- **`crossorigin="anonymous"`**: Fetches the script without sending credentials, providing a level of security and allowing the script to be cached.
  ```html
  <script src="https://example.com/script.js" crossorigin="anonymous"></script>
  ```
- **`crossorigin="use-credentials"`**: Includes credentials when fetching the script. This is used when the server requires authentication.
  ```html
  <script
    src="https://example.com/script.js"
    crossorigin="use-credentials"
  ></script>
  ```
- If the **`crossorigin`** attribute is not specified, it defaults to **`"anonymous"`**. This attribute is important for security, especially when scripts come from different orig

---

# 5. **What is difference between `React and ReactDOM`?**

1. **React:**
   - **Purpose:** React is the core library that provides the foundational tools for building user interfaces in JavaScript.
   - **Key Features**
     - **`React.createElement`**: Creates React elements, which represent the UI components.
     - **`React.Component`**: The base class for creating class components.
     - Hooks like **`useState`** and **`useEffect`** for managing state and side effects.
   - **Usage in Code:**
     ```jsx
     import React, { useState, useEffect } from "react";
     ```
2. **ReactDOM:**
   - **Purpose:** ReactDOM is the bridge between React and the DOM, responsible for rendering React components into the browser.
   - **Key Features:**
     - **`ReactDOM.render`**: Renders a React element into the DOM.
     - **`ReactDOM.hydrate`**: Used for server-side rendering hydration.
     - **`ReactDOM.createPortal`**: Renders a component outside its parent hierarchy.
   - **Usage in Code:**
     ```jsx
     import ReactDOM from "react-dom";
     ```
3. **Collaboration:**
   - React and ReactDOM work together: React defines the components and their behavior, while ReactDOM takes care of updating the actual DOM.

- **React** is like a blueprint for a house. It tells you how to build the house, but it doesn't actually build the house for you.
- **ReactDOM** is like a construction crew. It takes the blueprint from React and builds the house for you.

```cpp
const App = () => {
  return <div>Hello, world!</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
```

This code will create a React component called `App`. The `App` component is like the blueprint for a house. It tells you how to build the house, but it doesn't actually build the house for you.

The `ReactDOM.render()` function is like the construction crew. It takes the blueprint from the `App` component and builds the house for you. In this case, the house is a `div` element with the text "Hello, world!".

---

# 7.**What is `async and defer`?**

![Alt text](image-1.png)
- **(No Attribute):**
  - If neither **`async`** nor **`defer`** is specified, the script is treated as blocking, and HTML parsing halts until the script is downloaded and executed.
  - This might cause slower page loading times, especially if the script is large or hosted on a slow server.
  - **Example 1 - Inline Scripts:**
    - When using inline scripts directly within the HTML document, especially if they interact with the DOM during the initial page load. Inline scripts are naturally blocking and don't require additional attributes.
  - **Example 2 - Small Scripts:**
    - For small scripts that are lightweight and don't significantly impact page loading times, omitting **`async`** and **`defer`** may be suitable, as their execution won't cause noticeable delays.
- **`async`:**
  - When the **`async`** attribute is added to a **`<script>`** tag, it signifies that the script should be executed asynchronously during HTML parsing.
  - The script is downloaded in the background, and parsing of the HTML document continues without waiting for the script to be fully downloaded and executed.
  - This is beneficial for non-blocking loading, but it can result in scripts executing out of order, especially if multiple scripts with the **`async`** attribute are present.
  - **Example 1 - Analytics Script:**
    - Use **`async`** for analytics scripts that don't depend on the DOM structure and can run independently. For instance, a script that tracks user interactions and sends data to a third-party analytics service.
  - **Example 2 - Ads Integration:**
    - When integrating ad scripts that load content asynchronously and don't rely on the order of execution. This ensures that ads are loaded without blocking the rest of the page content.
- **`defer`:**
  - The **`defer`** attribute, when added to a **`<script>`** tag, indicates that the script should be deferred until the HTML parsing is complete.
  - Deferred scripts are executed in the order they appear in the HTML document, after the HTML parsing is done, just before the **`DOMContentLoaded`** event.
  - This is useful for ensuring that scripts relying on DOM elements can be executed in the correct order.
  - **Example 1 - External Libraries:**
    - When incorporating external libraries, such as jQuery or a custom JavaScript file, that rely on the DOM structure. Using **`defer`** ensures these scripts execute in order after the HTML parsing is complete.
  - **Example 2 - Document Manipulation:**
    - Scripts that manipulate the DOM elements and need access to the entire HTML structure. By using **`defer`**, you guarantee that these scripts run after the HTML is fully parsed, avoiding potential issues with missing elements.
- **Considerations:**
  - Use **`async`** when the script is independent and order of execution is not critical.
  - Use **`defer`** when the script relies on the DOM structure and needs to be executed in order.
  - If neither **`async`** nor **`defer`** is specified, ensure that the script doesn't impact critical rendering paths, or consider moving the script tag to the end of the HTML document.
