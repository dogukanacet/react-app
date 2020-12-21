import React, { Component } from 'react';

import './App.css';

import Person from './Person/Person'
import ValidationComponent from './assignment/ValidationComponent/ValidationComponent'
import CharComponent from './assignment/CharComponent/CharComponent'

class App extends Component {

  // state = ({
  //   persons: [
  //     { id: "qwe1", name: "a", age: "1" },
  //     { id: "qwrdfs2", name: "s", age: "2" },
  //     { id: "sgfds3", name: "d", age: "3" }
  //   ],
  //   showPersons: false,
  //   otherState: "other value"
  // })

  // nameChangedHandler = (event, id) => {
  //   const personIndex = this.state.persons.findIndex(p => {
  //     return p.id === id
  //   })

  //   // const person = Object.assign({}, this.state.persons[personIndex])
  //   const person = { ...this.state.persons[personIndex] }

  //   person.name = event.target.value

  //   const persons = [...this.state.persons]
  //   persons[personIndex] = person

  //   this.setState({ persons: persons })
  // }

  // // switchNameHandler = (newName) => {
  // //   // console.log("clicked")
  // //   this.setState({
  // //     persons: [
  // //       { name: newName, age: "1" },
  // //       { name: "s2", age: "2" },
  // //       { name: "d2", age: "3" }
  // //     ]
  // //   })
  // // }

  // deletePersonHandler = (personIndex) => {
  //   // alternative -  const persons= this.state.persons.slice()
  //   const persons = [...this.state.persons]

  //   persons.splice(personIndex, 1)
  //   this.setState({
  //     persons: persons
  //   })
  // }

  // togglePersonsHandler = () => {
  //   const doesShow = this.state.showPersons
  //   this.setState({
  //     showPersons: !doesShow
  //   })
  // }

  // render() {

  //   const style = {
  //     backgroundColor: 'white',
  //     font: 'inherit',
  //     border: '1px solid blue',
  //     padding: '8px',
  //     cursor: 'pointer',
  //   }

  //   let persons = null

  //   if (this.state.showPersons) {
  //     persons = (
  //       <div>
  //         {this.state.persons.map((person, index) => {
  //           return <Person
  //             click={this.deletePersonHandler.bind(this, index)}
  //             changed={(event) => this.nameChangedHandler(event, person.id)}
  //             name={person.name}
  //             age={person.age}
  //             key={person.id} />
  //         })}
  //       </div>
  //     )
  //   }

  //   return (<div className="App">
  //     <h1> hi </h1> <button style={style}
  //       onClick={this.togglePersonsHandler} > toggle persons </button> {persons}
  //   </div>
  //   );
  //   // return React.createElement('div', {className: 'App' }, React.createElement('h1', null, 'hi'))
  // }

  state = ({
    userInput: ""
  })

  inputChangedHandler = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  deleteInputHandler = (index) => {
    const text = [...this.state.userInput.split('')]
    text.splice(index, 1)
    const updatedText = text.join('')
    this.setState({
      userInput: updatedText
    })
  }

  render() {

    const charList = this.state.userInput.split('').map((char, index) => {
      return <CharComponent
        key={index}
        character={char}
        delete={() => this.deleteInputHandler(index)} />
    })

    return (
      <div>
        <input type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <ValidationComponent inputLength={this.state.userInput.length} />
        {charList}
      </div>
    )
  }

}

export default App;
