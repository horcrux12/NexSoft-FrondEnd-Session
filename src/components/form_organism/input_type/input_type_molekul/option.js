import React, { Component } from 'react';

class Option extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
            <option defaultValue={this.props.optionVal}>{this.props.textOption}</option>
        );
    }
}
 
export default Option;