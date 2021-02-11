import React, { Component } from 'react';
import { Redirect} from "react-router-dom";

import Tr from "../../components/table_row";
import "./style.css";

class TranskasiBody extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // dataTransaksi : []
        }
    }

    render() { 
        if (this.props.isLogin) {
            return <Redirect to="/login"/>
        }
        const {dataTrans, totalBayar, delTransFunc, submitTrans} = this.props
        // console.log("trans bosy",this.props.totalBayar)
        let dataHeader = dataTrans.map((value, index) => {
            return(
                <Tr type="deletedOnly" key={value.id} idBarang={value.id} 
                delTransFunc={delTransFunc}>
                    <td>{index + 1}</td>
                    <td>{value.namaBarang}</td>
                    <td>Rp. {value.hargaBarang}</td>
                    <td>{value.qty}</td>
                    <td>Rp. {value.total}</td>
                </Tr>
            )
        })
        
        return ( 
            <div className="table-data-transaksi">
                <table className="data-transkasi">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Barang</th>
                            <th>Harga Barang</th>
                            <th>Jumlah</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataHeader}
                        <tr>
                            <td colSpan="5" style={{textAlign:"center", fontSize:"3vh",
                            fontWeight:"bold"}}>Total</td>
                            <td style={{fontWeight:"bold"}}>Rp. {totalBayar}</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={submitTrans} className="btn-hijau" style={{marginTop:"3vh"}}>Submit Transaksi</button>
            </div>
        );
    }
}
export default TranskasiBody;