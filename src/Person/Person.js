import React from 'react'

import './Person.css'
import Radium from 'radium'

const person = (props) => {

    let message = "years old"
    if (props.age < 2) {
        message = "year old"
    }

    const style = {
        '@media(min-width:500px)': {
            width: '450px'
        }
    }

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>Person.js {props.name} - {props.age} {message} {props.children}</p>
            <input type="text" value={props.name} onChange={props.changed} />
        </div>
    )
}

export default Radium(person)