import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom"

import "./style.css"

class TableAlbum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tampil : [],
            loading : true
        }
    }

    componentDidMount(){
        const {idUser} = this.props
        fetch('https://jsonplaceholder.typicode.com/albums?userId='+idUser)
        .then(resp => resp.json())
        .then(json => this.setState({ tampil : json, loading : false}))
        .catch(err => {
            alert("gagal load data " + err)
            this.setState({ loading : false }) 
        })
        .finally(this.setState({ loading : true }))
    }

    setId = (id) =>{
        this.props.funcSetId(id)
    }

    setAlbum = (id) => {
        this.props.funcSetAlbum(id)
    }

    render() { 
        // console.log(this.props);
        let no = 1;
        let arrTampil;
        if(this.state.loading){
            arrTampil = (<tr>
                <td colSpan="6" style={{textAlign: "center", fontWeight:"bold"}}>Loading ....</td>
            </tr>)
        }else if(this.props.idUser == -1 || this.state.tampil.length == 0){
            alert("Data tidak ada")
            arrTampil = (<tr>
                <td colSpan="6" style={{textAlign: "center", fontWeight:"bold"}}>Data tidak ada ....</td>
            </tr>)
            return(<Redirect to="/"/>)
        }else{
            arrTampil = this.state.tampil.map((el, idx) => {
                return(
                    <tr key={idx}>
                        <td>{no++}</td>
                        <td>{el.title}</td>
                        <td style={{textAlign:"center"}}>
                            <Link to="/gallery">
                                <button className="btn-small btn-hijau" onClick={() => {this.setAlbum(el.id)}}>Lihat Foto</button>
                            </Link>
                        </td>
                    </tr>
                )
            })
        }
                
        if (!this.props.loginStatus) {
            return (<Redirect to="/login"/>)
        }
        return ( 
            <div className="table-album">
                <div className="judul" style={{ marginTop :"3vh", marginBottom:"0", fontSize:"4vh", fontWeight:"bold"}}>
                    Tabel Album
                </div>
                <div className="navi-album">
                <Link to ="/">
                    <button className="btn btn-hijau" onClick={() => {this.setId(-1)}}>Kembali</button>
                </Link>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Album Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arrTampil}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default TableAlbum;