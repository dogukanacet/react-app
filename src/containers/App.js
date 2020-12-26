import React, { Component } from "react";

import classes from "./App.css";

import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  state = {
    persons: [
      { id: "qwe1", name: "a", age: "1" },
      { id: "qwrdfs2", name: "s", age: "2" },
      { id: "sgfds3", name: "d", age: "3" },
    ],
    showPersons: false,
    otherState: "other value",
    showCockpit: true,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    // const person = Object.assign({}, this.state.persons[personIndex])
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  // switchNameHandler = (newName) => {
  //   // console.log("clicked")
  //   this.setState({
  //     persons: [
  //       { name: newName, age: "1" },
  //       { name: "s2", age: "2" },
  //       { name: "d2", age: "3" }
  //     ]
  //   })
  // }

  deletePersonHandler = (personIndex) => {
    // alternative -  const persons= this.state.persons.slice()
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  deleteCockpitHandler = () => {
    const doesShow = this.state.showCockpit;
    this.setState({
      showCockpit: !doesShow,
    });
  };

  render() {
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            <Persons
              persons={this.state.persons}
              click={this.deletePersonHandler}
              changed={this.nameChangedHandler}
            />
          }
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <button onClick={this.deleteCockpitHandler}>remove button</button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            toggle={this.togglePersonsHandler}
          />
        ) : null}

        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App' }, React.createElement('h1', null, 'hi'))
  }
}

export default App;
