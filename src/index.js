import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";
import "./styles.css";

const SayHello = props => {
  return (
    <div>{props.message ? <div> {props.message} </div> : "no message"} </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<SayHello message="a" firstname="sdas" />, rootElement);
