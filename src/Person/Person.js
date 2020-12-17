import React from 'react'

const person = (props) => {
    return (
        <div>
            <p>Person.js {props.name} - {props.age} years old {props.children}</p>
        </div>
    )
}

export default person