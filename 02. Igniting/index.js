import React from "react";
import ReactDOM from "react-dom/client";

const heading=React.createElement("h1", {id:"title"}, "Hello World yo");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
