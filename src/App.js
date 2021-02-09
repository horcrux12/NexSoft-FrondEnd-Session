import React, { Component } from 'react';
import {Table, Form} from "./template/template";
import "./App.css";

class App extends Component {
  
  alertSubmit(e){
    alert(e);
  }
  render() { 
    return (
      <div className="container">
        <div className="input-data">
          <div className="judul">
                Input Data Diri
          </div>
          <Form funccob={this.alertSubmit}/>
        </div>
        <div className="table-data">
          <div className="header">
              <div className="judul">
                  Table Data User
              </div>
              <div className="search">
                  <label for="search-bar" className="form-label">Pencarian </label>
                  <input type="text" id="search-bar" className="search-bar"/>
              </div>
          </div>
          <Table/>
        </div>
      </div>
    );
  }
}
 
export default App;
