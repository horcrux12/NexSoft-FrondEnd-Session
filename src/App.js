import React, { Component } from 'react';
import {Table, Form} from "./template/template";
import "./App.css";

class App extends Component {
  constructor(props) {
      super(props);
      this.state = { 
        idUser : 1,
        dataUsers : [],
        updatedData : {},
        statusDel : "",
      }
      this.setDataDummy()
  }
  alertSubmit(e){
    alert(e);
  }

  setDataDummy = () => {
    let data = this.state.dataUsers;
    data.push(
      {
          id : this.state.idUser++,
          nama : "Silo Mardadi",
          ttl : "Bogor, 1998-03-20",
          umur : this.hitungUmur(new Date("1998-03-20")),
          alamat : "Bogor",
          gender : "L",
          hobby : "Futsal, Bersepeda",
          agama : "Islam"
      });
    data.push(
      {
          id : this.state.idUser++,
          nama : "Budiyono",
          ttl : "Bandung, 1998-03-12",
          umur : this.hitungUmur(new Date("1998-03-12")),
          alamat : "Cilacap",
          gender : "L",
          hobby : "Futsal",
          agama : "Islam"
      })
    data.push(
      {
          id : this.state.idUser++,
          nama : "Agung",
          ttl : "Bekasi, 1998-01-12",
          umur : this.hitungUmur(new Date("1998-01-12")),
          alamat : "Bekasi",
          gender : "L",
          hobby : "Jogging",
          agama : "Islam"
      })
      data.push(
      {
          id : this.state.idUser++,
          nama : "Bibah",
          ttl : "Depok, 1998-02-20",
          umur : this.hitungUmur(new Date("1998-02-20")),
          alamat : "Depok",
          gender : "P",
          hobby : "Berenang",
          agama : "Islam"
      })
    this.setState({
      dataUsers : data
    })
  }

  hitungUmur = (tglLahir) => {
      let nowDate = new Date();
      let umur = 0;
      if (tglLahir.getMonth() > nowDate.getMonth()) {
          umur = 1;
      }else if (tglLahir.getMonth() == nowDate.getMonth() && tglLahir.getDate() > nowDate.getDate()) {
          umur = 1;
      }

      let umurUser = nowDate.getFullYear() - tglLahir.getFullYear() - umur;
      if(umurUser < 0){
          umurUser = 0;
      }
      return umurUser;
  }

  save = (dataObject) => {
    let data = {
          id : this.state.idUser++,
          nama : dataObject.nama,
          ttl : dataObject.ttl,
          umur : dataObject.umur,
          alamat : dataObject.alamat,
          gender : dataObject.gender,
          hobby : dataObject.hobby,
          agama : dataObject.agama
    }
    let newUser = this.state.dataUsers;
    newUser.push(data);
    this.setState({
      dataUsers : newUser
    })
  }

  delete = (id) => {
    let data = this.state.dataUsers;
    let idx = data.findIndex(el => el.id === id);
    data.splice(idx, 1)
    this.setState({
      dataUsers : data,
      statusDel : "deleted",
    })
    // console.log("object")
  }

  resetForm = () => {
    this.setState({
      statusDel : ""
    })
  }

  updateClicked = (id) => {
    let data = this.state.dataUsers;
    let suss = data.find(el => el.id === id);
    suss.id = id;
    this.setState({
      updatedData : suss
    })
  }

  doUpdate = (e) => {
    let data = this.state.dataUsers;
    let idx = data.findIndex(el => el.id===e.id)
    data.splice(idx, 1, e)
    this.setState({
      updatedData : {},
      dataUsers : data
    })
  }

  render() { 
    return (
      <div className="container">
        <div className="input-data">
          <div className="judul">
                Input Data Diri
          </div>
          <Form saveFunc={this.save} dataUpdate={this.state.updatedData} doUpdate={this.doUpdate} feedbackReset={this.resetForm} resetStatus={this.state.statusDel}/>
        </div>
        <div className="table-data">
          <div className="header">
              <div className="judul">
                  Table Data User
              </div>
              <div className="search">
                  <label className="form-label">Pencarian </label>
                  <input type="text" id="search-bar" className="search-bar"/>
              </div>
          </div>
          <Table dataUser={this.state.dataUsers} delFunc={this.delete} updateFunc={this.updateClicked}/>
        </div>
      </div>
    );
  }
}
 
export default App;
