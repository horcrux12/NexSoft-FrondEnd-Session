import React, { Component } from 'react';
import Option from "./input_type_molekul/option"

class Select extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        const options = this.props.optionElement;
        const optionMap = options.map(el => {
            return (<Option key={el.optionVal} optionVal={el.optionVal} textOption={el.textOption}/>);
        });
        return ( 
            <select name={this.props.selectName} className={this.props.classes}>
                {optionMap}
            </select>
        );
    }
}
 
export default Select;