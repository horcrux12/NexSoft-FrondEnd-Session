import md5 from 'md5';
import React, { Component } from 'react';
import { connect } from "react-redux"
import { Redirect} from "react-router-dom";


import {
    Input,
    Textarea,
    Label,
    Select,
    FormField,
  } from "../../components/form";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: "",
         }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        const { dataUser } = this.props
    
        if (username.length < 1 || password.length < 1) {
            alert("harap isi username dan Password");
        } else {
            let temp = dataUser
            let idxPass = temp.findIndex((value) => {
                return value.password === md5(password)
            })
            let idxUser = temp.findIndex((value) => {
                return value.username === username
            })
            if (idxUser >= 0 && idxPass>=0) {
                let user = dataUser[idxUser];
                this.props.login(user);
            }else{
                alert("kombinasi password dan username salah")
                this.setState({
                    username: "",
                password: "",
                })
            }
        }
    };

    setValue = (name, value) => {
        this.setState({
          [name]: value,
        });
    };

    render() { 
        const { username, password } = this.state;
        if (this.props.isLogin) {
            return <Redirect to="/"/>
        }
        return ( 
            <form onSubmit={this.handleSubmit}>
                <FormField classes="field-form">
                    <Label classes="form-label">Username</Label>
                    <Input
                        inputProp={{
                        inputType: "text",
                        inputname: "username",
                        classes: "form-input",
                        inputPh: "Masukkan username",
                        inputVal: username,
                        funcSet: this.setValue,
                        }}
                    />
                </FormField>
                <FormField classes="field-form">
                    <Label classes="form-label">Password</Label>
                    <Input
                        inputProp={{
                        inputType: "password",
                        inputname: "password",
                        classes: "form-input",
                        inputPh: "Masukkan password",
                        inputVal: password,
                        funcSet: this.setValue,
                        }}
                    />
                </FormField>
                <FormField classes="field-form">
                    <Input
                        inputProp={{
                        inputType: "submit",
                        inputname: "login",
                        classes: "btn-hijau",
                        inputPh: "",
                        inputVal: "login",
                        }}
                    ></Input>
                </FormField>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    dataUser: state.userReducer.dataUser,
    isLogin : state.Auth.statusLogin
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (dataUser) => dispatch({ type: "LOGIN_SUCCESS", dataUser }),
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);