import React, { Component } from 'react';

import './App.css';

import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "a", age: "1" },
      { name: "s", age: "2" },
      { name: "d", age: "3" }
    ],
    otherState: "other value"
  }

  switchNameHandler = () => {
    // console.log("clicked")
    this.setState({
      persons: [
        { name: "a2", age: "1" },
        { name: "s2", age: "2" },
        { name: "d2", age: "3" }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>hi</h1>
        <button onClick={this.switchNameHandler}>switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > - hobbies:racing </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App' }, React.createElement('h1', null, 'hi'))
  }
}

export default App;
