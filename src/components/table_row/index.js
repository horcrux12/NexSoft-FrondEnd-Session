import React, { Component } from 'react';

class Tr extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    editFunc = (id) => {
        this.props.updateFunc(id)
        // alert("coba")
    }

    hapusFunc = (id) => {
        if(window.confirm("apakah anda yakin menghapus data ini ?")){
            this.props.delTransFunc(id);  
        } 
    }

    render() { 
        const data = this.props;
        let dataColumn = ""
        if(this.props.type == "deletedOnly"){
            return ( 
                <tr>
                    {this.props.children}
                    <td>
                        <button onClick={() => {this.hapusFunc(data.idBarang)}}>hapus</button>
                    </td>
                </tr>
            );
        }
        return ( 
            <tr>
                {this.props.children}
                <td>
                    <button onClick={this.editFunc}>edit</button>
                    <button onClick={this.hapusFunc}>hapus</button>
                </td>
            </tr>
        );
        
    }
}
 
export default Tr;