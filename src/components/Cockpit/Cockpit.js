import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = (props) => {
  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log("[Cockpit.js] useEFfect");
    // HTTP request
    //  const timer = setTimeout(() => {
    //    alert("saved data to cloud");
    //  }, 1000);
    toggleButtonRef.current.click();
    return () => {
      // clearTimeout(timer);
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
      <button ref={toggleButtonRef} className={btnClass} onClick={props.toggle}>
        toggle persons
      </button>
      {/* <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>login</button>}
      </AuthContext.Consumer> */}
      <button onClick={authContext.login}>login</button>
    </div>
  );
};

export default React.memo(cockpit);
