import React, { useEffect } from "react";
import { fetchApiData } from "./actions/";
import "./App.css";
import CharacterList from "./components/CharacterList"
import {connect} from "react-redux"

function App(props) {
  useEffect(() => {
    props.fetchApiData();
  }, []);

  return (
    <div className="App">
      <h1>Uh...I don't know, Rick!</h1>
      <CharacterList />
    </div>
  );
}

export default connect(null, {fetchApiData})(App);
