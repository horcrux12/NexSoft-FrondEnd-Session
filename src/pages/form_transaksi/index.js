import React, { Component } from 'react';
import {connect} from "react-redux"
import { Redirect} from "react-router-dom";

import {
    Input,
    Textarea,
    Label,
    Select,
    FormField,
  } from "../../components/form";
class FormTransaksi extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            idBarang : "",
            qty : 1
        }
    }

    // Function
    handleSubmit = (e) => {
        e.preventDefault()
        const {qty, idBarang} = this.state
        if(qty < 1 || idBarang.length < 1){
            alert("isi semua data dengan valid")
        }else{
            // console.log(this.state)
            this.props.saveFunc(this.state)
            this.clearForm()
        }
    }

    clearForm = () => {
        this.setState({
            idBarang : "",
            qty : 1
        })
    }

    setValue = (name, value) => {
        this.setState({
            [name]: value,
        });
    };
    // End Function

    render() { 
        if (!this.props.isLogin) {
            return <Redirect to="/login"/>
        }
        let selectBarang = [{optionVal: "", textOption: "Pilih Barang"}]
        const {dataBarang} = this.props
        const {qty, idBarang} = this.state
        dataBarang.forEach((value) => {
            selectBarang.push({
                optionVal: value.id,
                textOption: value.namaBarang,
            })
        })
        return ( 
            <form onSubmit={this.handleSubmit}>
                <FormField classes="field-form">
                    <Label classes="form-label">Pilih Barang</Label>
                    <Select
                        selectName="idBarang"
                        funcSet={this.setValue}
                        classes="form-input"
                        valSelected={idBarang}
                        optionElement={selectBarang}
                    />
                </FormField>
                <FormField classes="field-form">
                    <Label classes="form-label">Jumlah Barang</Label>
                    <Input
                        inputProp={{
                        inputType: "number",
                        inputname: "qty",
                        classes: "form-input",
                        inputPh: "Masukkan nama barang",
                        inputVal: qty,
                        minVal : 1,
                        funcSet: this.setValue,
                        }}
                    />
                </FormField>
                <FormField classes="field-form">
                    <Input
                        inputProp={{
                        inputType: "submit",
                        inputname: "submit",
                        classes: "btn-hijau",
                        inputPh: "",
                        inputVal: "Submit",
                        }}
                    ></Input>
                </FormField>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    dataBarang: state.barangReducer.dataBarang,
    isLogin : state.Auth.statusLogin
  };
};
 
export default connect(mapStateToProps)(FormTransaksi);