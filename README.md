# React-Notes




- # 1. **Difference between a `Library and Framework`?**


- **Library:** A library is like a toolbox. It contains a collection of tools that you can use to build your software.
- **Framework:** A framework is like a blueprint. It provides a structure for your software, and it tells you how to put the pieces together.

Here is an analogy that you could use in an interview:

- **Library:** Imagine that you are building a house. You could go to the hardware store and buy all of the tools you need separately. But it would be much easier to buy a kit that comes with all of the tools you need, as well as instructions on how to put them together. A library is like a kit for building software.
- **Framework:** Imagine that you are building a house, but you want to make sure that it is built to a certain standard. You could hire an architect to design the house for you. But it would be much easier to use a pre-existing framework that has already been designed to meet certain standards. A framework is like an architect for building software.



![!\[Alt text\](!\[image.png\](01.Inception/image.png))](01.Inception/image.png)




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



# 4. **What is `crossorigin in script tag`?**

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




# 6.**What is `async and defer`?**



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




  ---


# Igniting The App Notes




# 1. What is NPM?

- NPM, or Node Package Manager, is like a digital toolbox for JavaScript developers.
- It helps us manage and use different tools, libraries, and pieces of code (called packages) in our projects.
- We can easily install, update, and share these packages with others.
- Think of it as a convenient way to borrow and use code created by other developers, making our work more efficient and collaborative.
- NPM uses a file called **`package.json`** to keep track of what tools we're using and their versions. It's an essential tool in the world of JavaScript development, especially with Node.js.

---

# 2. What is `Parcel/Webpack`? Why do we need it?

- **Parcel and Webpack:**
    - Bundlers primarily used for JavaScript or TypeScript code.
    - Assist in minifying, cleaning, and compacting code.
    - Purpose: Make code more efficient for sending requests and receiving responses from the server.
    - Address the challenge of handling multiple files by bundling them together.
- **Key Functions:**
    - Minification: Reduce code size for faster transfer.
    - Cleaning: Remove unnecessary elements like comments, new lines, block delimiters, and white spaces.
    - Compact Code: Condense the code while preserving its functionality.
- **Benefits:**
    - Enhanced Data Transfer: Facilitate quicker data and file transfer between the application and server.
    - Improved Loading Time: Substantially reduce the time it takes to load a page in your application.
- **Code Optimization:**
    - Both Parcel and Webpack optimize code without changing its functionality.
    - Result in a streamlined and more efficient application.

This summarizes the role of Parcel and Webpack in optimizing, cleaning, and bundling JavaScript or TypeScript code for more efficient web applications

---

# 3. What is `.parcel-cache?

- The **`.parcel-cache`** directory is created by the Parcel bundler during the build process.
- It serves as a cache directory where Parcel stores intermediate files and caching information to optimize subsequent builds.
- The purpose of the cache is to enhance build performance.
- By storing previously processed information, Parcel can skip redundant tasks, saving time and resources during rebuilds.

---

# 4.What is `npx`?

1. **npm (Node Package Manager):**
    - **Purpose:** npm is primarily used for installing, managing, and sharing packages or libraries in your Node.js projects.
    - **Usage Example:**
        
        ```bash
        npm install package-name
        ```
        
2. **npx:**
    - **Purpose:** npx is a tool that comes with npm (version 5.2.0 and higher) and is used for executing Node.js packages directly.
    - Just want to test some commands.
    - **Usage Example:**
        
        ```bash
        npx package-name
        ```
        
    - **Key Differences:**
        - With npm, you install packages globally or locally, and then you can use them in your projects or scripts.
        - With npx, you can run packages without installing them. It downloads and executes the package temporarily.

**Use Case Examples:**

- **npm:**
    - Install a package globally:
        
        ```bash
        npm install -g package-name
        ```
        
    - Install a package locally in your project:
        
        ```bash
        npm install package-name
        ```
        
- **npx:**
    - Run a one-time command from a package without installing it:
        
        ```bash
        npx package-name command
        ```
        

**In Interviews:**

- If you're asked about npm, you can explain it as a package manager used for installing and managing dependencies.
- When asked about npx, you can mention its role in executing Node.js packages without the need for a permanent installation.

**Remember:**

- npm is for managing packages.
- npx is for executing packages without installing them permanently.
- NPM also can run packages if you configure a package.json file and include it in the script section.

---

# 5. What is difference between `dependencies` vs devDependencies

### **In an Interview:**

- **Dependencies:**
    - They are necessary for the application to run in production.
    - Examples include libraries, frameworks, or runtime components.
- **DevDependencies:**
    - Used during development and testing.
    - Examples include testing frameworks, build tools, linters, or any tools that aid developers but aren't required for the deployed application.
    - Nodemon is an example

**Practical Advice:**

- **Dependencies** are for things your application needs to function at runtime.
- **DevDependencies** are for tools and libraries needed during development, testing, or building, but not for the deployed application.

---

# 6. What is Tree-Shaking?

1. **Purpose:**
    - Tree shaking is a technique to remove unnecessary or unused code from your JavaScript project.
2. **Analogy:**
    - Think of it as cleaning up your toolbox by removing tools you don't use.
3. **Efficiency:**
    - It makes your code smaller and more efficient by getting rid of parts you're not actively using.
4. **Webpack:**
    - Often associated with bundlers like Webpack, which analyze your code and eliminate unused portions.
5. **ES6 Modules:**
    - Works well with ES6 module syntax (**`import`** and **`export`**), allowing better code analysis.
6. **Reduced Bundle Size:**
    - Leads to smaller code bundles, which means faster load times for web applications.
7. **Performance Improvement:**
    - Improves the performance of your web application, especially on slower networks, by reducing unnecessary code.
8. **Configuration:**
    - Typically configured in build tools to run in a production environment.
9. **Example:**
    - If you have a function or module that you import but don't use, tree shaking will remove it from the final bundled code.
10. **Smart Code Cleaning:**
    - It's like a smart cleaning process for your code, ensuring that only the essential parts are included in the final product.
    
    ---
    
    # 7. What is Hot Module Replacement
    
    - Hot Module Replacement (HMR) is a feature in modern development tools and frameworks that allows you to update your application in real-time, without requiring a full page reload.
    - Instead of refreshing the entire page, HMR selectively updates the modules that have changed, preserving the current application state.
    - This feature significantly speeds up the development process by providing a faster feedback loop and maintaining the application's state during updates.
    
    ---
    
    # 8. List 5 superpowers of Parcel
    
    Parcel is known for its simplicity and developer-friendly features.
    
    ### **1. Zero Configuration**
    
    **Description:**
    Parcel's "Zero Configuration" superpower means you can get started with your project without the need for complex configuration files. Unlike many other bundlers, Parcel doesn't require extensive setup to start building your application. This makes it incredibly easy for developers, especially those who are new to build tools or want to focus more on coding than configuration.
    
    ### **2. Blazing Fast Builds**
    
    **Description:**
    Parcel is known for its fast build times. The bundling process is optimized for speed, allowing developers to experience quick feedback during development. This is particularly beneficial when working on large projects or making frequent changes to the codebase. Fast builds contribute to an efficient development workflow and improve productivity.
    
    ### **3. Hot Module Replacement (HMR)**
    
    **Description:**
    Hot Module Replacement (HMR) is a feature in Parcel that allows developers to see changes in their application in real-time without a full page reload. When you make changes to your code, Parcel intelligently updates only the modules that have changed, preserving the current state of your application. HMR significantly speeds up the development feedback loop, making it easier to iterate and refine your code.
    
    ### 4**. Easy Code Splitting**
    
    **Description:**
    Parcel makes code splitting a breeze. Code splitting is a technique where you break your code into smaller chunks, loading only what's needed when it's needed. Parcel automatically identifies entry points in your application and generates optimized bundles, reducing the initial load time for your users. This superpower simplifies the optimization process, allowing developers to create more performant web applications effortlessly.
    
    ### **5. Support for Multiple Languages**
    
    **Description:**
    Parcel supports a wide range of programming languages and frameworks out of the box. Whether you're working with JavaScript, TypeScript, React, Vue, or even languages like Rust or Reason, Parcel can handle them without additional configuration. This flexibility makes Parcel suitable for diverse projects and allows developers to choose the tools and languages that best fit their needs.
    
    In summary, Parcel's superpowers include zero configuration for easy project setup, blazing fast builds for efficient development, and Hot Module Replacement for real-time feedback. These features collectively contribute to a seamless and productive development experience.
    
    ---
    
    # 9. What is `.gitignore`? What should we add and not add into it?
    
    - The `.gitignore` file is a configuration file used by Git to specify which files and directories should be ignored and not tracked by version control.
    - This is helpful to avoid cluttering your repository with files that are not essential for the project or that are generated during the development process.
    - The `.gitignore` file is particularly useful for excluding files like build artifacts, dependencies, and sensitive information.
    
    ### What to Add to `.gitignore`:
    
    1. **Dependencies:**
        - Add directories like `node_modules/` or `venv/` to ignore dependencies that can be easily installed or recreated.
        
        ```
        node_modules/
        
        ```
        
    2. **Build Artifacts:**
        - Ignore build artifacts and output directories such as `dist/` or `build/`.
        
        ```
        dist/
        build/
        
        ```
        
    3. **Environment-specific Files:**
        - Ignore environment-specific files, like `.env` files containing sensitive information.
        
        ```
        .env
        
        ```
        
    4. **IDE/Editor Files:**
        - Exclude files and directories created by your IDE or text editor.
        
        ```
        .vscode/
        .idea/
        
        ```
        
    5. **Logs and Temporary Files:**
        - Ignore log files, temporary files, and directories like `log/` or `tmp/`.
        
        ```
        log/
        tmp/
        
        ```
        
    6. **User-specific Files:**
        - Ignore files that are user-specific, like editor settings files or operating system-specific files.
        
        ```
        .DS_Store
        Thumbs.db
        
        ```
        
    7. **Compiled Code:**
        - Exclude compiled code, binaries, or files generated during the build process.
        
        ```
        *.exe
        *.dll
        *.so
        
        ```
        
    8. **Personal Configurations:**
        - Ignore personal configuration files that are not meant to be shared.
        
        ```
        .config/
        
        ```
        
    
    ### What Not to Add to `.gitignore`:
    
    1. **Essential Configuration Files:**
        - Do not ignore configuration files that are necessary for the project's functionality, such as `package.json` or `webpack.config.js`.
        
        ```
        !package.json
        
        ```
        
    2. **Sensitive Information:**
        - Do not ignore sensitive information if it's mistakenly included. Instead, use environment variables or secure methods to manage sensitive data.
    3. **Documentation:**
        - Typically, documentation files (like [README.md](http://readme.md/)) and important documentation-related images should not be ignored.
        
        ```
        !README.md
        
        ```
        
    4. **Project Configuration:**
        - Avoid ignoring project configuration files that are necessary for development, like `.babelrc` or `.eslintrc`.
        
        ```
        !.babelrc
        
        ```
        
    5. **Personal Development Tools:**
        - Exclude personal development tools or scripts that are specific to individual developers but not crucial for the project.
        
        ```
        personal-script.sh
        
        ```
        
    
    Remember, the specific content of your `.gitignore` may vary depending on the programming language, framework, and tools used in your project. It's essential to tailor it to the needs of your specific development environment and project structure.
    
    ---
    
    # 10. What is the difference between `package.json` and `package-lock.json`
    
    **What does `package.json` do?**
    
    - It tells package managers like npm what packages your project needs.
    - It specifies the desired version ranges for those packages (e.g., "2.3.0" or "~3.0.0").
    
    **What does `package-lock.json` do?**
    
    - It remembers the exact versions of all the packages and sub-dependencies that were actually installed for your project.
    - It makes sure any future installations use the same exact versions to guarantee consistent results.
    
    **Who creates them?**
    
    - You manually create and edit `package.json` as you develop your project.
    - `package-lock.json` is automatically generated by npm when you install or update packages.
    
    **Why are both important?**
    
    - `package.json` controls what packages you get initially.
    - `package-lock.json` ensures you always get the same exact versions, no matter who installs your project or where they do it.
    
    **Do I need to edit `package-lock.json`?**
    
    - No, usually you shouldn't. Editing it can break things. Stick to editing `package.json` for your dependency needs.
    
    **Should I commit both files to version control?**
    
    - Yes! Both files are crucial for reproducing your project environment.

---

# 11. Why should I not modify `package-lock.json`?

**Consistency and Reproducibility:**

- **Manual edits can break consistency:** Changing versions in `package-lock.json` without updating `package.json` can create inconsistencies between the two files, leading to unpredictable dependency behavior.
- **Hampers reproducibility:** Deviations from the locked versions can make it difficult to recreate identical environments across different machines or CI/CD pipelines, hindering testing and deployment reliability.

**2. Dependency Conflicts:**

- **Increases risk of conflicts:** Manually altering versions might introduce conflicts between different packages' dependencies, potentially causing errors or unexpected behavior during installation or runtime.
- **Undermines npm's resolution:** Bypassing npm's dependency resolution process can lead to missed compatibility issues or suboptimal dependency choices.

**3. Security:**

- **Potential for vulnerabilities:** Manually introducing new versions without thorough testing might introduce known vulnerabilities or compatibility issues, compromising the security of your project.
- **Invalidates security scans:** Changes to `package-lock.json` can make it harder for security tools to accurately detect vulnerabilities in your dependencies.

**4. Collaboration and Version Control:**

- **Hinders collaboration:** Manual edits can make it challenging for other developers to work on the project, as they might encounter conflicting dependency versions.
- **Confuses version control:** Untracked changes to `package-lock.json` can lead to merge conflicts and difficulty in tracking dependency history.

**5. Dependency Optimization:**

- **Potential performance impact:** npm relies on `package-lock.json` to optimize future installations. Manual changes can disrupt this process, potentially slowing down installation times.

---

# 12. What is `node_modules` ? Is it a good idea to push that on git?

`node_modules`:

1. **Definition:**
    - Directory created by npm to store project dependencies.
2. **Content:**
    - Contains third-party packages specified in `package.json` and their dependencies.

### Should Not Push to Git:

1. **Size and Clutter:**
    - `node_modules` can be large, causing repository bloat.
2. **Reproducibility:**
    - Instead, push `package.json` and `package-lock.json` for reproducibility.
3. **Version Control Overhead:**
    - Git isn't optimized for large binary files like those in `node_modules`.

### What to Include in Git:

1. **`package.json`:**
    - Information about the project and its dependencies.
2. **`package-lock.json` or `yarn.lock`:**
    - Lock file for exact dependency versions.

### What to Exclude from Git:

1. **`node_modules/`:**
    - Exclude the entire `node_modules` directory in the `.gitignore` file.

### Sharing Dependencies:

- Share `package.json` and lock file.
- Others run `npm install` or `yarn install` to fetch dependencies.

This keeps your Git repository clean, efficient, and ensures consistent dependencies across collaborators.

---

# 13.What is the `dist` folder?

`dist` Folder:

1. **Build Output:**
    - Generated during the build process.
2. **Distribution-ready:**
    - Contains the final, optimized version of the application.
3. **Minified and Optimized:**
    - Code is compressed and optimized for performance.
4. **Deployment Source:**
    - Ready to be deployed to a web server or hosting service.
5. **Excluded from Version Control:**
    - Typically not included in version control systems.

Example:

```
project-root/
|-- src/
|   |-- (source files)
|-- dist/
|   |-- index.html
|   |-- bundle.js
|   |-- styles.css
|-- (other project files)

```

In short, `dist` is where your project's optimized, deployable version lives.

---

# 14. What is `browserlists`?

### `browserslist`:

1. **Definition:**
    - Configuration file specifying the list of target browsers for front-end tools.
2. **Purpose:**
    - Guides tools like Autoprefixer and Babel to generate compatible code.
3. **Usage:**
    - Specifies browser versions or queries, like "last 2 versions" or "> 5%."
4. **Common Location:**
    - Often found in `package.json` or in a separate `.browserslistrc` file.
5. **Example:**
    - In `package.json`:
        
        ```json
        "browserslist": "last 2 versions, > 5%"
        
        ```
        
6. **Tools:**
    - Used by tools in the front-end ecosystem to tailor code for specific browsers.

Short and sweet! Let me know if you have more questions.

---

# 15. Read about: `^ - caret` and `~ - tilda`