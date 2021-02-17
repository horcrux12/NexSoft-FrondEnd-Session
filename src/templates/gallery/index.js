import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom"

import Card from "../../components/card"
import "./style.css"

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            tampil : [],
            loading : true
        }
    }

    componentDidMount(){
        const {idAlbum} = this.props
        fetch('https://jsonplaceholder.typicode.com/photos?albumId='+idAlbum)
        .then(resp => resp.json())
        .then(json => this.setState({ tampil : json, loading : false}))
        .catch(err => {
            alert("gagal load data " + err)
            this.setState({ loading : false }) 
        })
        .finally(this.setState({ loading : true }))
    }

    setId = (id) =>{
        this.props.funcSetAlbum(id)
    }

    render() { 
        let arrTampil;
        if(this.state.loading){
            arrTampil = (<h1 style={{textAlign: "center", fontWeight:"bold"}}>Loading ....</h1>)
        }else{
            arrTampil = this.state.tampil.map(el => {
                return (
                    <Card key={el.id} imgSource={el.url} alt={el.title} desc={el.title}/>
                )
            })
        }

        if (!this.props.loginStatus) {
            return (<Redirect to="/login"/>)
        }
        return (
            <div className="gallery-sec">  
                <div className="nav-gallery">
                <Link to="/album">
                    <button onClick={() => {this.setId(-1)}} className="btn btn-hijau">kembali</button>
                </Link>
                </div>
                <div className="gallery">
                    {arrTampil}
                </div>
            </div>
        );
    }
}
 
export default Gallery;