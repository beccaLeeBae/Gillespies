import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import PageRouter from './components/pageRouter';
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
      <PageRouter/>
      </HashRouter>
      );
  }
}

export default App;