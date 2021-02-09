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

    editFunc = () => {
        alert("Tombol edit di klik");
    }

    hapusFunc = () => {
        alert("Tombol hapus di klik");
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
                        <button onClick={this.editFunc}>Edit</button>
                        <button onClick={this.hapusFunc}>hapus</button>
                    </td>
                </tr>
            </>
         );
    }
}
 
export default Col;