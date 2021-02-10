import React, { Component } from 'react';
import Col from "./col/col";

class Tbody extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dataUser : this.props.dataUser
        }
    }

    
    render() { 
        let idUser = 1;
        // Data dummy
        const {dataUser} = this.props;
        let no = 1;
        let user;
        if (dataUser.length > 0) {
            user = dataUser.map((el, index) => {
                return (<Col key={index} no={no++} user={el} delFunc={this.props.delFunc} updateFunc={this.props.updateFunc}/>)
            })
        }else{
            user = (<tr>
                <td colSpan="9" style={{textAlign:"center"}}>Data tidak ada</td>
            </tr>);
        }
        return ( 
            <>
                <tbody>
                    {user}
                </tbody>
            </>
         );
    }
}
 
export default Tbody;