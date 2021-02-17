import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    setId = (id) =>{
        this.props.funcSetId(id)
    }

    deleteFunc = (id) => {
        if (window.confirm("Apakah Anda yakin ingin menghapus data ini ? ")) {
            this.props.deleteUser(id)
        }
    }

    render() { 
        let arr = []
        // console.log(!arr.length);
        const {tampil, loading} = this.props
        let no = 1;
        let arrTampil;
        if(this.props.loading){
            arrTampil = (<tr>
                <td colSpan="6" style={{textAlign: "center", fontWeight:"bold"}}>Loading ....</td>
            </tr>)
        }else{
            arrTampil = this.props.tampil.map((el, idx) => {
                return(
                    <tr key={idx}>
                        <td>{no++}</td>
                        <td>{el.name}</td>
                        <td>{el.username}</td>
                        <td>{el.address.city}</td>
                        <td>{el.company.name}</td>
                        <td style={{textAlign:"center"}}>
                            <Link to="/album">
                                <button className="btn-small btn-hijau" onClick={() => {this.setId(el.id)}}>Album</button>
                            </Link>
                                <button className="btn-small btn-merah" onClick={() => {this.deleteFunc(el.id)}}>Delete</button>
                            <Link to="/form">
                                <button className="btn-small btn-kuning" onClick={() => {this.props.updateUser(el.id)}}>Update</button>
                            </Link>
                        </td>
                    </tr>
                )
            })
        }
        
        return ( 
            <>
                <div className="judul" style={{ marginTop :"10vh"}}>
                    <h1>Tabel User</h1>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>City</th>
                            <th>Company</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arrTampil}
                    </tbody>
                </table>
            </>
        );
    }
}
 
export default Table;