import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import { FormUser, FormBarang, TranskasiBody, FormTransaksi, DataBarang, Home } from "../../pages";
import Login from "../login";

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dataTransaksiBarang : [],
            totalBayar : 0
        }
    }

    // End Function
    saveTransaksi = (data) => {
        const {dataBarang} = this.props
        let tempBarang = dataBarang
        let barang = tempBarang.find((value) => {
            return value.id === parseInt(data.idBarang);
        })
        let dataTrans = {
            ...barang,
            qty : data.qty,
            total : (data.qty * barang.hargaBarang)
        }
        let tmpTransaksi = this.state.dataTransaksiBarang
        // let tmpTotalBayar = this.state.totalBayar
        // tmpTotalBayar += dataTrans.total
        // console.log("tmpTotalBayar", tmpTotalBayar)
        tmpTransaksi.push(dataTrans)
        this.setState({
            dataTransaksiBarang : tmpTransaksi,
            totalBayar : this.state.totalBayar + dataTrans.total
        })
    }

    delTransFunc = (id) => {
        let temp = this.state.dataTransaksiBarang
        let indx = temp.findIndex(el => (el.id === id))
        if(indx >= 0) temp.splice(indx, 1)
        this.setState({
            dataTransaksiBarang : temp
        })
    }

    submitTrans = () => {
        if (this.state.dataTransaksiBarang.length < 1) {
            alert("lakukan transaksi terlebih dahulu")
        }else{
            this.props.tambahDataTransaski(this.state.dataTransaksiBarang)
        }
    }
    // End Function

    render() { 
        return ( 
            <Switch>
                <Route path="/" exact>
                    <Home isLogin={this.props.isLogin}/>
                </Route>
                <Route path="/transaksi">
                    <div>
                        <FormTransaksi saveFunc={this.saveTransaksi}/>
                    </div>
                </Route>
                <Route path="/datatransaksi">
                    <TranskasiBody dataTrans={this.state.dataTransaksiBarang} 
                        delTransFunc={this.delTransFunc}
                        totalBayar={this.state.totalBayar}
                        submitTrans={this.submitTrans}
                        />
                </Route>
                <Route path="/databarang">
                    <DataBarang isLogin={this.props.isLogin}/>
                </Route>
                <Route path="/tambahbarang">
                    <FormBarang/>
                </Route>
                <Route path="/tambahuser">
                    <FormUser/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
            </Switch>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    dataUser: state.userReducer.dataUser,
    isLogin : state.Auth.statusLogin,
    dataBarang: state.barangReducer.dataBarang
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      Auth: (dataUser) => dispatch({ type: "LOGIN_SUCCESS", dataUser }),
      tambahDataTransaski: (dataBarang) => dispatch({ type: "TAMBAH_BARANG", dataBarang })
    };
  };
 
export default connect(mapStateToProps, mapDispatchToProps)(Body);