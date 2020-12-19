import React from 'react'
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Person.js {props.name} - {props.age} years old {props.children}</p>
            <input type="text" value={props.name} onChange={props.changed} />
        </div>
    )
}

export default person