import React from "react";

import "./Person.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eeeeee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = (props) => {
  let message = "years old";
  if (props.age < 2) {
    message = "year old";
  }

  return (
    // <div className="Person" style={style}>
    <StyledDiv>
      <p onClick={props.click}>
        {" "}
        Person.js {props.name} - {props.age} {message} {props.children}
      </p>
      <input type="text" value={props.name} onChange={props.changed} />
    </StyledDiv>
  );
};

export default person;
