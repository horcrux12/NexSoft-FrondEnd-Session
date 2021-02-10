import React, { Component } from 'react';

class Col extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    // countUp() {
    //     this.setState(state => ({
    //         nomor: state.nomor + 1
    //     }));
    // }

    // componentDidMount() {
    //     this.countUp();
    // }

    editFunc = (id) => {
        this.props.updateFunc(id)
    }

    hapusFunc = (id) => {
        if(window.confirm("apakah anda yakin menghapus data ini ?")){
            this.props.delFunc(id);  
        } 
    }
    
    render() { 
        const data = this.props;
        return ( 
            <>
                <tr>
                    <td>{data.no}</td>
                    <td>{data.user.nama}</td>
                    <td>{data.user.ttl}</td>
                    <td>{data.user.umur}</td>
                    <td>{data.user.alamat}</td>
                    <td>{data.user.gender}</td>
                    <td>{data.user.hobby}</td>
                    <td>{data.user.agama}</td>
                    <td>
                        <button onClick={() => this.editFunc(data.user.id)}>Edit</button>
                        <button onClick={() => this.hapusFunc(data.user.id)}>hapus</button>
                    </td>
                </tr>
            </>
         );
    }
}
 
export default Col;