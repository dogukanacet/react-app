import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEFfect");
    // HTTP request
    const timer = setTimeout(() => {
      alert("saved data to cloud");
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log("[Cockpit.js] cleanup work");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEFfect");
    return () => {
      console.log("[Cockpit.js] 2nd cleanup work");
    };
  });

  const assignedClasses = [];
  let btnClass = "";

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
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

export default React.memo(cockpit);
