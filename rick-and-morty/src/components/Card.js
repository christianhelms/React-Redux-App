import React from "react";
import styled from "styled-components";

export default function Card(props) {
  return (
    <CardSpacing>
      <CardStyle>
        <img src={props.char.image} />
        <div>
          <h2>{props.char.name}</h2>
          <p>
            <strong>Species: </strong>
            {props.char.species}
          </p>
          <p>
            <strong>Status: </strong>
            {props.char.status}
          </p>
          <p>
            <strong>Origin: </strong>
            {props.char.origin.name}
          </p>
          <p>
            <strong>Location: </strong>
            {props.char.location.name}
          </p>
        </div>
      </CardStyle>
    </CardSpacing>
  );
}

const CardStyle = styled.div`
  border: 2px solid black;
  border-radius: 16px;
  padding: 15px;
`;

const CardSpacing = styled.div`
  padding: 10px;
`;
