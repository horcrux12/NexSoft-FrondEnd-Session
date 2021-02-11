import React, { Component } from 'react';
import { connect } from "react-redux";

import Tr from "../../components/table_row";


class DataBarang extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dataBarang : []
        }
    }

    delTransFunc = (id) => {
        console.log(id)
        this.props.hapusData(id)
        this.setState({
            dataBarang : this.props.dataBarang
        })
    }

    componentDidMount(){
        this.setState({
            dataBarang : this.props.dataBarang
        })
    }

    // Rendering
    render() { 
        const{dataBarang} = this.state

        let dataHeader = dataBarang.map((value, index) => {
            return(
                <Tr type="deletedOnly" key={value.id} idBarang={value.id} 
                delTransFunc={this.delTransFunc}>
                    <td>{index + 1}</td>
                    <td>{value.namaBarang}</td>
                    <td>Rp. {value.hargaBarang}</td>
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataHeader}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.barangReducer.dataBarang)
  return {
    dataBarang: state.barangReducer.dataBarang,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      hapusData: (dataBarang) => dispatch({ type: "HAPUS_BARANG", dataBarang }),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(DataBarang);