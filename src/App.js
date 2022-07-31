
import './App.css';
import Axios from "axios";
import {useEffect,useState} from "react";
import Popular from "./components/Popular";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Popular/>
      </header>
    </div>
  );
}

export default App;
