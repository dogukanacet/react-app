import React, { Component } from "react";

import "./App.css";
import styled from "styled-components";

import Person from "./Person/Person";

const StyledButton = styled.button`
  background-color: ${(props) => (props.alt ? "green" : "red")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.alt ? "lightgreen" : "salmon")};
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: "qwe1", name: "a", age: "1" },
      { id: "qwrdfs2", name: "s", age: "2" },
      { id: "sgfds3", name: "d", age: "3" },
    ],
    showPersons: false,
    otherState: "other value",
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

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={this.deletePersonHandler.bind(this, index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
        </div>
      );
      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black",
      // };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <p className={classes.join(" ")}> hi </p>
        <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          toggle persons
        </StyledButton>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App' }, React.createElement('h1', null, 'hi'))
  }
}

export default App;
