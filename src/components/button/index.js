import React, { Component } from 'react'

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
          <button onClick={(el) => {if(this.props.funcClick)this.props.funcClick(el);}}>{this.props.children}</button>
        );
    }
}
 
export default Button;