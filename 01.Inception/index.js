// This is how we write react code inside javascript
// This code will do the same, add heading inside "root" div

// const heading = React.createElement("h1", { id: "hello" }, "Hello World");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);



// This code is using React to create two heading elements (h1 and h2) with specific properties,
//  such as an "id." These headings are then encapsulated within a div element, which itself has a "
// className" of "container." Finally, the React root is created and the container, containing the headings,
//  is rendered onto the HTML element with the ID "root." 
// The warning mentioned is addressed by adding a unique "key" prop to each heading element,
//  as required by React for efficient rendering and updates.

const heading1 = React.createElement("h1", { id: "title", key: 1 }, "Hello World1");
const heading2 = React.createElement("h2", { id: "title", key: 2 }, "Hello World2");
const container = React.createElement("div", { className: "container" }, [heading1, heading2])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);