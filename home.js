import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <h1>
    <div>Namastae React using JSX</div>
  </h1>
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
