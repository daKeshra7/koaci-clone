import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
// import Homepage from "./components/common/homepage";
import Navbar from "./components/Navbar/Navbar";
import useSticky from "./hooks/useSticky.js";
import Main from "./components/common/mainpage.jsx";
import New from "./components/common/new.jsx";

function App() {
  const { isSticky, element } = useSticky();
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Navbar sticky={isSticky} />
      <Main element={element} />

      <New />
    </div>
  );
}

export default App;
