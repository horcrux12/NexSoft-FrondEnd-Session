import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom";
import { connect } from "react-redux"
 
import "./style.css";



class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    doLogout = () => {
        this.props.logout()
        // <Redirect to="/"/>
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
                    <Link to="/tambahbarang">
                        <li>Tambah Barang</li>
                    </Link>
                    <Link to="/databarang">
                        <li>Data Barang</li>
                    </Link>
                    <Link to="/login">
                        <li>Login</li>
                    </Link>
                    <li onClick={this.doLogout}>logout</li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      dataUser: state.userReducer.dataUser,
      isLogin : state.Auth.statusLogin
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      logout: () => dispatch({ type: "LOGOUT" }),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);