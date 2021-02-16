import React, { Component } from 'react';
import "./App.css"
import Button from "./components/button"
import Input from "./components/input";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tampil : ""
    }
    this.combine = true;
    this.operator = "";
    this.lastNumber = 0;
  }

  numberClick = (el) => {
    let hasilTampil = this.state.tampil;
    if(this.combine){
      hasilTampil += el.target.innerText;
      this.setState({
        tampil : hasilTampil
      })
    }else{
      hasilTampil = el.target.innerText;
      this.combine = true;
      this.setState({
        tampil : hasilTampil
      })
    }
    this.lastNumber = this.state.tampil;
  }

  operatorClick = (el) => {
    if (this.operator == "") {
      this.operator = el.target.innerText;
      this.combine = false;
    }else{
      let jumlah;
      // console.log(this.operator);
      // console.log(this.lastNumber);
      switch (this.operator) {
        case "+":
          jumlah = parseFloat(this.state.tampil) + parseFloat(this.lastNumber);
          break;
        case "-":
          jumlah = parseFloat(this.state.tampil) - parseFloat(this.lastNumber);
          break;
        case "x":
          jumlah = parseFloat(this.state.tampil) * parseFloat(this.lastNumber);
          break;
        case "/":
          jumlah = parseFloat(this.state.tampil) / parseFloat(this.lastNumber);
          break;
        default:
          jumlah = 0;
          break;
      }
      this.setState({
        tampil : jumlah + ""
      })
      this.lastNumber = jumlah
      this.combine = false;
    }
  }

  hasilClick = () => {
    let jumlah;
    switch (this.operator) {
      case "+":
        jumlah = parseFloat(this.state.tampil) + parseFloat(this.lastNumber);
        break;
      case "-":
        jumlah = parseFloat(this.state.tampil) - parseFloat(this.lastNumber);
        break;
      case "x":
        jumlah = parseFloat(this.state.tampil) * parseFloat(this.lastNumber);
        break;
      case "/":
        jumlah = parseFloat(this.state.tampil) / parseFloat(this.lastNumber);
        break;
      default:
        jumlah = 0;
        break;
    }
    this.combine = false;
    this.operator = "";
    this.lastNumber = jumlah
    this.setState({
      tampil : jumlah + ""
    })
  }

  clearClick = () => {
    this.combine = true;
    this.operator = "";
    this.lastNumber = 0;
    this.setState({
      tampil : ""
    })
  }

  render() { 
    return ( 
      <div className="container">
        <Input type="text" value={this.state.tampil}/>
        <div className="box">
          <Button funcClick={this.numberClick}>1</Button>
          <Button funcClick={this.numberClick}>2</Button>
          <Button funcClick={this.numberClick}>3</Button>
          <Button funcClick={this.operatorClick}>+</Button>
        </div>
        <div className="box">
          <Button funcClick={this.numberClick}>4</Button>
          <Button funcClick={this.numberClick}>5</Button>
          <Button funcClick={this.numberClick}>6</Button>
          <Button funcClick={this.operatorClick}>-</Button>
        </div>
        <div className="box">
          <Button funcClick={this.numberClick}>7</Button>
          <Button funcClick={this.numberClick}>8</Button>
          <Button funcClick={this.numberClick}>9</Button>
          <Button funcClick={this.operatorClick}>x</Button>
        </div>
        <div className="box">
          <Button funcClick={this.numberClick}>0</Button>
          <Button funcClick={this.numberClick}>.</Button>
          <Button funcClick={this.hasilClick}>=</Button>
          <Button funcClick={this.operatorClick}>/</Button>
        </div>
        <div className="box">
          <Button funcClick={this.clearClick}>clear</Button>
        </div>
      </div>
    );
  }
}
 
export default App;