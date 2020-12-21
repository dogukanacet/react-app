import React from 'react'

const validation = (props) => {

    let message = "text too short"
    if (props.inputLength > 5) {
        message = "text long enough"
    }

    return (
        <div >
            <p>{message}</p>
        </div>

    )
}

export default validation