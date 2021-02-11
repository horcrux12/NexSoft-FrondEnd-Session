import React, { Component } from 'react';
import { Redirect} from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        // console.log(this.props.isLogin)
        if (!this.props.isLogin) {
            return <Redirect to="/login"/>
        }
        return ( 
            <div>
                Selamat datang di homepage
            </div>
        );
    }
}

export default Home;