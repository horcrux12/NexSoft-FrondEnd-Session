import React, { Component } from 'react'
import { Link, useHistory } from "react-router-dom"
import {Input,Textarea, Label, Select, FormField} from "../../components/form"

import "./style.css";

class FormUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : "",  
            name : "",
            username : "",
            city : "",
            company : ""
        }
    }

    componentDidMount(){
        const { dataUpdate } = this.props;
        // console.log(dataUpdate);
        if (
            Object.keys(dataUpdate).length > 0
        ){
            this.setState({
                id : dataUpdate.id,
                name : dataUpdate.name,
                username : dataUpdate.username,
                city : dataUpdate.address.city,
                company : dataUpdate.company.name,
            })
        }
    }

    getValue = (el) => {
        this.setState({
            [el.target.name] : el.target.value
        })
    }

    handleSubmit = (el) => {
        const {id, name, city, username, company} = this.state
        if (name == "" || city == "" || username == "" || company == "") {
            alert("harap isi semua field pada form");
        }else {
            this.props.getObjUpdate(this.state)
            this.clearForm()
            this.props.clearUpdate()
            this.props.history.push("/")
        }
    }

    clearForm = () => {
        this.setState({
            id : "",  
            name : "",
            username : "",
            city : "",
            company : ""
        })
    }

    render() { 
        const { dataUpdate } = this.props;
        // console.log(this.props);
        const {id, name, city, username, company} = this.state
        return ( 
            <div className="form">
                <FormField classes="field-input">
                    <Label classes="label-form">Name</Label>
                    <Input inputProp={{
                        inputType : "text",
                        inputname : "name", 
                        classes : "field-form",
                        inputPh : "Masukkan nama",
                        inputVal : name,
                        funcSet : this.getValue
                    }}/>
                </FormField>
                <FormField classes="field-input">
                    <Label classes="label-form">Username</Label>
                    <Input inputProp={{
                        inputType : "text",
                        inputname : "username", 
                        classes : "field-form",
                        inputPh : "Masukkan Username",
                        inputVal : username,
                        funcSet : this.getValue
                    }}/>
                </FormField>
                <FormField classes="field-input">
                    <Label classes="label-form">City</Label>
                    <Input inputProp={{
                        inputType : "text",
                        inputname : "city", 
                        classes : "field-form",
                        inputPh : "Masukkan city",
                        inputVal : city,
                        funcSet : this.getValue
                    }}/>
                </FormField>
                <FormField classes="field-input">
                    <Label classes="label-form">Company Name</Label>
                    <Input inputProp={{
                        inputType : "text",
                        inputname : "company", 
                        classes : "field-form",
                        inputPh : "Masukkan company name",
                        inputVal : company,
                        funcSet : this.getValue
                    }}/>
                </FormField>
                <button onClick={this.handleSubmit} className="btn btn-hijau">Submit</button>
                <Link to="/">
                    <button className="btn btn-merah"> Cencel </button>
                </Link>
            </div>
        );  
    }
}
 
export default FormUp;