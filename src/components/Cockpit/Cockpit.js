import React from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = "";

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  return (
    <div className={classes.Cockpit}>
      <p className={assignedClasses.join(" ")}> {props.title} </p>
      <button className={btnClass} onClick={props.toggle}>
        toggle persons
      </button>
    </div>
  );
};

export default cockpit;
