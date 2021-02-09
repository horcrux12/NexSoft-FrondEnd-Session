import React, { Component } from 'react';
import "./style_table.css";
import {Tbody, Thead} from "../../components/table_row/table_row";

class Table extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
            <div>
                <table className="data-user">
                    <Thead/>
                    <Tbody/>
                </table>
            </div>
         );
    }
}
 
export default Table;