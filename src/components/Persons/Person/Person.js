import React, { Component, Fragment } from "react";

import classes from "./Person.css";

class Person extends Component {
  render() {
    let message = "years old";
    if (this.props.age < 2) {
      message = "year old";
    }
    console.log("[Person.js] rendering...");

    return (
      <Fragment className={classes.Person}>
        <p onClick={this.props.click}>
          {"{Person.js}"} {this.props.name} - {this.props.age} {message}
          {this.props.children}
        </p>
        <input
          type="text"
          value={this.props.name}
          onChange={this.props.changed}
        />
      </Fragment>
    );
  }
}

export default Person;
