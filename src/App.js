import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { Login, Navbar, Body } from "./templates";
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Router>
        <Navbar/>
        <Body/>
      </Router>
    );
  }
}
 
export default App;
