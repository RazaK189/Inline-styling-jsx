import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};
//css styles must be camel cases, seperated by a comma, and values from key pairs as a string.
//they are defined in a javascript object

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
