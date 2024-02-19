const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "sibling" }, "Hello from React JS!"),
    React.createElement("h2", { id: "sibling" }, "Hello from React JS!"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "sibling" }, "Hello from React JS!"),
    React.createElement("h2", { id: "sibling" }, "Hello from React JS!"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
