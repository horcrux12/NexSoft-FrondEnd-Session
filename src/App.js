import React, { Component } from 'react'
import "./App.css"

class App extends Component {
  //wajib ada render
  render() {
    // wajib ada return
    let hello = "Hello World!!";   
    const nama = {nama : "admin"}
    
    return ( 
      // wajib satu tag sebagai root

      // <div> 
      //   Hello world
      // </div>

      // atau
      // <React.Fragment>
      //     <div>Hello world</div>
      // </React.Fragment>

      // atau
      <>
        <div style={{ 
          backgroundColor: 'blue',
          color:'white'
         }}>{hello} {nama.nama}</div>
        <div className="divSecond">Hello world</div>
      </>
     );
  }
}
 
export default App;