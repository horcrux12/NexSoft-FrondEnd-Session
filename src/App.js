import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, useHistory} from "react-router-dom";

import "./App.css"
import { Table, TableAlbum, Gallery, FormUp } from "./templates";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tampil : [],
      loading : true,
      userId : -1,
      albumId : -1,
      updatedObj : {},
      redirect : ""
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(json => {this.setState({ tampil : json, loading : false})})
        .catch(err => {
            alert("gagal load data " + err)
            this.setState({ loading : false }) 
        })
        .finally(this.setState({ loading : true }))
  }

  setIdUser = (id) => {
    this.setState({
      userId : id
    })
  }

  setAlbumUser = (id) => {
    this.setState({
      albumId : id
    })
  }

  deleteUser = (id) => {
    let data = this.state.tampil
    let idx = data.findIndex(el => el.id == id)
    if (idx < 0) {
      alert ("data tidak ada")
    }else {
      data.splice(idx, 1);
      this.setState({
        tampil : data
      })
    }
  }

  updateHandle = (id) => {
    let data = this.state.tampil
    let cariUpdate = data.findIndex(el => el.id === id);
    if(cariUpdate < 0){
      alert("data tidak ada");
      this.setState({
        redirect : "/"
      })
    }else{
      this.setState({
        updatedObj : data[cariUpdate]
      })
    }
  }

  clearUpdate = () => {
    this.setState({
      updatedObj : {}
    })
  }

  getObjUpdate = (obj) => {
    // console.log(this.state.tampil);
    let data = this.state.tampil
    let cariUpdate = data.findIndex(el => el.id === obj.id);
    if (cariUpdate >=0) {
      data[cariUpdate] = {
        ...data[cariUpdate], 
        id:obj.id, 
        name:obj.name,
        username : obj.username,
        address : {
          ...data[cariUpdate].address,
          city : obj.city
        },
        company: {
          ...data[cariUpdate].company,
          name : obj.company
        }
      }
    }else{
      alert("data tidak ditemukan");
    }

    this.setState({
      tampil : data
    })
  }

  render() { 
    const {loading, tampil, userId, albumId, updatedObj} = this.state

    if (this.state.redirect != "") {
      this.setState({
        redirect : ""
      }, () => {
        return (
          <Redirect to={this.state.redirect}/>
        )
      })
    }
    return ( 
      <div className="container">
          <Router>
            <Switch>
              <Route path="/" exact component={
                () => {
                  let history = useHistory()
                  return(<Table history={history} updateUser={this.updateHandle} deleteUser={this.deleteUser} loading = {loading} tampil = {tampil} funcSetId={this.setIdUser}/>)
                }}>
                
              </Route>
              <Route path="/album" component={
                () => {
                  let history = useHistory()
                  return(<TableAlbum history={history} idUser={userId} funcSetId={this.setIdUser} funcSetAlbum={this.setAlbumUser}/>)
                }}/>
              <Route path="/gallery" component={
                () => {
                  let history = useHistory()
                  return(<Gallery history={history} idAlbum={albumId} funcSetAlbum={this.setAlbumUser}/>)
                }
              }/>
              <Route path="/form" component={
                () => {
                  let history = useHistory()
                  return (<FormUp history={history} getObjUpdate={this.getObjUpdate} 
                      clearUpdate={this.clearUpdate} 
                      dataUpdate = {updatedObj}/>)
                  
                  }
              }/>
              {/* <Route path="/form" children={<FormUp getObjUpdate={this.getObjUpdate} 
                      clearUpdate={this.clearUpdate} 
                      dataUpdate = {updatedObj}/>}/> */}
            </Switch>
          </Router>
      </div>
    );
  }
}
 
export default App;