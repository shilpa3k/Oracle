import React from "react";
import logo from "./logo.svg";
import "./App.css";

const ipfsClient = require("ipfs-http-client");
const ipfs = ipfsClient("http://localhost:5001");

function App() {
  const onSubmit = async event => {
    event.preventDefault();
    const ver = await ipfs.version();
    console.log("IPFS Version=", ver);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={onSubmit}>click here</button>
      </header>
    </div>
  );
}

export default App;
