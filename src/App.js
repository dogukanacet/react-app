import React, { Component } from 'react';

import './App.css';

import Person from './Person/Person'

class App extends Component {

  state = ({
    persons: [
      { name: "a", age: "1" },
      { name: "s", age: "2" },
      { name: "d", age: "3" }
    ],
    showPersons: false,
    otherState: "other value"
  })

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "a", age: "1" },
        { name: event.target.value, age: "2" },
        { name: "d", age: "3" }
      ]
    })
  }

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
    const persons = [...this.state.persons]

    persons.splice(personIndex, 1)
    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person click={this.deletePersonHandler.bind(this, index)}
              changed={this.nameChangedHandler}
              name={person.name}
              age={person.age}
              key={index} />
          })}
        </div>
      )
    }

    return (<div className="App">
      <h1> hi </h1> <button style={style}
        onClick={this.togglePersonsHandler} > toggle persons </button> {persons}
    </div>
    );
    // return React.createElement('div', {className: 'App' }, React.createElement('h1', null, 'hi'))
  }
}

export default App;
