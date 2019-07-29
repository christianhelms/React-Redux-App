import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import styled from "styled-components";

function CharacterList(props) {
  console.log(props.cards);
  return (
    <ListStyle>
      {props.cards.map(char => (
        <Card char={char} />
      ))}
    </ListStyle>
  );
}

const mapStateToProps = state => ({
  cards: state.cards
});

export default connect(
  mapStateToProps,
  {}
)(CharacterList);

const ListStyle = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

`;
