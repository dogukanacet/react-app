import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

import withClass from "../../../hoc/WithClass/withClass";
import classes from "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    let message = "years old";
    if (this.props.age < 2) {
      message = "year old";
    }
    console.log("[Person.js] rendering...");

    return (
      <Fragment>
        {/* <AuthContext.Consumer>
          {(context) =>
            context.authenticated ? <p>authenticated</p> : <p>please log in</p>
          }
        </AuthContext.Consumer> */}
        {this.context.authenticated ? (
          <p>authenticated</p>
        ) : (
          <p>please log in</p>
        )}
        <p onClick={this.props.click}>
          {"{Person.js}"} {this.props.name} - {this.props.age} {message}
          {this.props.children}
        </p>
        <input
          // ref={(inputEl) => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
          type="text"
          value={this.props.name}
          onChange={this.props.changed}
          key="1"
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
