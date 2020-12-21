import React from 'react'


const userInput = (props) => {
    const style = {
        display: "flex",
        justifyContent: "center",
        padding: "20px auto",
        margin: "20px auto"
    }

    return (
        <div style={style}>
            <input value={props.name} onChange={props.change} type="text" />
        </div>
    )

}

export default userInput