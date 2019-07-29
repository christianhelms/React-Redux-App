import React, { useEffect } from "react";
import { fetchApiData } from "./actions/";
import "./App.css";
import CharacterList from "./components/CharacterList";
import { connect } from "react-redux";
import styled from "styled-components";

function App(props) {
  useEffect(() => {
    props.fetchApiData();
  }, []);

  return (
    <div className="App">
      <Header>Rick and Morty Character Databse</Header>
      <CharacterList />
    </div>
  );
}

export default connect(
  null,
  { fetchApiData }
)(App);

const Header = styled.h1`
  font-size: 60px;
  border-bottom: 4px solid black;
`;
