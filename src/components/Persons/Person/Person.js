import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import withClass from "../../../hoc/WithClass/withClass";
import classes from "./Person.css";

class Person extends Component {
  render() {
    let message = "years old";
    if (this.props.age < 2) {
      message = "year old";
    }
    console.log("[Person.js] rendering...");

    return (
      <Fragment>
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

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  value: PropTypes.string,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
