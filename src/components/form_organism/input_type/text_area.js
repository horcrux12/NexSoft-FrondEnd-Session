import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        const value = this.props
        return ( 
            <textarea rows={value.inputRows} className="form-input" inputname={value.inputname} placeholder={value.inputPc}></textarea>   
        );
    }
}
 
export default Input;