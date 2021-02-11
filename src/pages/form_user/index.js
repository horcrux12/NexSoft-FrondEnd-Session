import React, { Component } from "react";
import { connect } from "react-redux";
import md5 from "md5"

import {
  Input,
  Textarea,
  Label,
  Select,
  FormField,
} from "../../components/form";

class FormUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      role: "",
    };
  }

  // function sessions
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, role } = this.state;

    if (username.length < 1 || password.length < 1 || role.length < 1) {
      alert("harap isi semua data");
    } else {
      let dataUser = {
        username, password : md5(password), role
      };
      
      this.props.tambahUser(dataUser);
    }
  };

  setValue = (name, value) => {
    this.setState({
      [name]: value,
    });
  };
  // End function sessions

  // Render start
  render() {
    const { username, password, role } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-input-box">
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
          <Label classes="form-label">Role user</Label>
          <Select
            selectName="role"
            funcSet={this.setValue}
            classes="form-input"
            valSelected={role}
            optionElement={[
              {
                optionVal: "",
                textOption: "Pilih Role",
              },
              {
                optionVal: "Admin",
                textOption: "Admin",
              },
              {
                optionVal: "Kasir",
                textOption: "Kasir",
              },
              {
                optionVal: "Owner",
                textOption: "Owner",
              },
            ]}
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
  // End Render
}

const mapStateToProps = (state) => {
    console.log("redux",state.userReducer.dataUser)
  return {
    dataUser: state.userReducer.dataUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tambahUser: (dataUser) => dispatch({ type: "TAMBAH_USER", dataUser }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FormUser);
