import React, { Component } from 'react'
import {connect} from "react-redux"
import { Redirect } from 'react-router-dom';

import {Input,Textarea, Label, Select, FormField} from "../../components/form"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            username : "",
            password : ""
        }
    }

    getValue = (el) =>{
        this.setState({
            [el.target.name] : el.target.value
        })
    }

    loginFunc = (el) => {
        const { username, password } = this.state
        if (username == "" || password == "") {
            alert("harap isi semua field dalam form")
        }else{
            let dataUser = this.props.tampil
            let indx = dataUser.findIndex(value => value.username === username)
            if (indx < 0 || password != "1234") {
                alert("kombinasi username dan password salah")
            }else{
                // console.log(this.props.doLogin);
                console.log(dataUser[indx]);
                this.props.doLogin(dataUser[indx])
            }
        }
    }

    render() { 
        const { username, password } = this.state
        
        // console.log(this.props.loginStatus);
        if (this.props.loginStatus) {
            return <Redirect to="/"/>
        }

        return (  
            <div className="login-form">
                <FormField classes="field-input">
                    <Label classes="label-form">Name</Label>
                    <Input inputProp={{
                        inputType : "text",
                        inputname : "username", 
                        classes : "field-form",
                        inputPh : "Masukkan username",
                        inputVal : username,
                        funcSet : this.getValue
                    }}/>
                </FormField>
                <FormField classes="field-input">
                    <Label classes="label-form">password</Label>
                    <Input inputProp={{
                        inputType : "password",
                        inputname : "password", 
                        classes : "field-form",
                        inputPh : "Masukkan password",
                        inputVal : password,
                        funcSet : this.getValue
                    }}/>
                </FormField>
                <div className="field-input">
                    <button className="btn btn-hijau" onClick={this.loginFunc}>Login</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log("state :", state.AuthReducer.statusLogin);
    return{
        loginStatus : state.AuthReducer.statusLogin
    }
}

const mapDispatchToProps = dispatch => {
    return{
        doLogin : (dataUser) => dispatch({ type : 'LOGIN_SUCCCESS', payload : dataUser})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);