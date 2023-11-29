import React from "react";
import ReactDOM from "react-dom/client";


// React Element => Object => HTML


// const heading1=React.createElement("h1", {key:1}, "heading1");
// const heading2=React.createElement("h2", {key:2}, "heading2");
// const heading3=React.createElement("h3", {key:3}, "heading3");
// const container=React.createElement("div", {className:"title"}, [heading1,heading2, heading3]);
// root.render(container);



// const heading=<h1>Hello World</h1>;

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);




// JSX => React Element => Object => HTML  Done by Babel


// const container=(
//     <div>
//         <h1>Heading 1</h1>
//         <h2>Heading 2</h2>
//         <h3>Heading 3</h3>
//     </div>
// );

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);


// const Container = () => {
//     return (
//         <div>
//             <h1>Heading 1</h1>
//             <h2>Heading 2</h2>
//             <h3>Heading 3</h3>
//         </div>
//     )
// };

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Container />);



// using variable in jsx
//  with {} we can use any JS inside JSX

// const title=(
//     <div>
//         <h1>Container</h1>
//     </div>
// );


// const Container1 = () => {
//     return (
//         <div>

//         {title}
//             <h1>Heading 1</h1>
//             <h2>Heading 2</h2>
//             <h3>Heading 3</h3>
//         </div>
//     )
// };

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Container1 />);



// using component inside component

// const Title=()=>(
//     (<div>
//         <h1>Container</h1>
//     </div>)
// );


// const Container1 = () => {
//     return (
//         <div>

//         <Title />
//             <h1>Heading 1</h1>
//             <h2>Heading 2</h2>
//             <h3>Heading 3</h3>
//         </div>
//     )
// };

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Container1 />);





// We can use components as 'Component()' as its a function after all------------------------
// Nested components are called component composing


const Title=()=>(
    (<div>
        <h1>Container</h1>
    </div>)
);


const Container1 = () => {
    return (
        <div>

        {Title()}
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
        </div>
    )
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container1 />);
