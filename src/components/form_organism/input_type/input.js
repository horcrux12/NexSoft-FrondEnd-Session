import React, { Component } from 'react';

class Input extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        const value = this.props
        return ( 
            <input type={value.inputProp.inputType} 
            name={value.inputProp.inputname} 
            className={value.inputProp.classes}
            placeholder={value.inputProp.inputPh}
            defaultValue={value.inputProp.inputVal}></input>
        );
    }
}
 
export default Input;