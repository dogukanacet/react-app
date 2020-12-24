import React from "react";

import classes from "./Person.css";

const person = (props) => {
  let message = "years old";
  if (props.age < 2) {
    message = "year old";
  }

  return (
    // <div className="Person" style={style}>
    <div className={classes.Person}>
      <p onClick={props.click}>
        {"{Person.js}"} {props.name} - {props.age} {message} {props.children}
      </p>
      <input type="text" value={props.name} onChange={props.changed} />
    </div>
  );
};

export default person;
