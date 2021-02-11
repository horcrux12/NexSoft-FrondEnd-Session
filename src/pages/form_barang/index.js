import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect} from "react-router-dom";

import {
  Input,
  Textarea,
  Label,
  Select,
  FormField,
} from "../../components/form";

class FormBarang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namaBarang: "",
      hargaBarang: "",
    };
  }

  // Function

  handleSubmit = (e) => {
    e.preventDefault();
    const { namaBarang, hargaBarang } = this.state;

    if (namaBarang.length < 1 || hargaBarang.length < 1) {
        alert("harap isi semua data");
    } else {
        let dataBarang = this.state;
        this.props.tambahData(dataBarang);
    }
  };

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
    const { namaBarang, hargaBarang } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <FormField classes="field-form">
          <Label classes="form-label">Nama Barang</Label>
          <Input
            inputProp={{
              inputType: "text",
              inputname: "namaBarang",
              classes: "form-input",
              inputPh: "Masukkan nama barang",
              inputVal: namaBarang,
              funcSet: this.setValue,
            }}
          />
        </FormField>
        <FormField classes="field-form">
          <Label classes="form-label">Harga Barang</Label>
          <Input
            inputProp={{
              inputType: "number",
              inputname: "hargaBarang",
              classes: "form-input",
              inputPh: "Masukkan harga barang",
              inputVal: hargaBarang,
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

const mapDispatchToProps = (dispatch) => {
  return {
    tambahData: (dataBarang) => dispatch({ type: "TAMBAH_BARANG", dataBarang }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormBarang);
