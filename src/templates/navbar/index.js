import React, { Component } from 'react';
import {Link} from "react-router-dom";
 
import "./style.css";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="navbars">    
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/datatransaksi">
                        <li>Data Transaksi</li>
                    </Link>
                    <Link to="/transaksi">
                        <li>Transaksi</li>
                    </Link>
                    <Link to="/tambahuser">
                        <li>Tambah User</li>
                    </Link>
                    <Link to="/datauser">
                        <li>Data User</li>
                    </Link>
                    <Link to="/login">
                        <li>Login</li>
                    </Link>
                </ul>
            </div>
        );
    }
}
 
export default Navbar;