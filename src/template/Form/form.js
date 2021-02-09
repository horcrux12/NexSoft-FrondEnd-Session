import React, { Component } from 'react';
import {Input,Textarea, Label, Select, FormField} from "../../components/form_organism/form-organism";
import "./style_form.css"

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.funccob("tombol submit di klik");
        // this.handleSomething()
    }
    
    render() {
        return ( 
            <>
                <form onSubmit={this.handleSubmit.bind(this)} className="form-input-box">
                    <FormField classes="field-form">
                        <Label classes="form-label">Nama</Label>
                        <Input inputProp={{
                            inputType : "text",
                            inputname : "nama",
                            classes : "form-input",
                            inputPh : "Masukkan nama",
                            inputVal : ""
                        }}/>
                    </FormField>
                    <FormField classes="field-form">
                        <Label classes="form-label">TTL</Label>
                        <div className="double-form">
                            <Input inputProp={{
                                inputType : "text",
                                inputname : "tempat",
                                classes : "form-input",
                                inputPh : "Masukkan tempat lahir",
                                inputVal : ""
                            }}/>
                            <Input inputProp={{
                                inputType : "date",
                                inputname : "nama",
                                classes : "form-input",
                                inputPh : "",
                                inputVal : ""
                            }}/>
                        </div>
                    </FormField>
                    <FormField classes="field-form">
                        <Label classes="form-label">Jenis Kelamin</Label>
                        <div className="form-input-radio">
                            <Input inputProp={{
                                inputType : "radio",
                                inputname : "jk",
                                classes : "",
                                inputPh : "",
                                inputVal : "L"
                            }}/>
                            <Label classes="">Laki-laki</Label>
                        </div>
                        <div className="form-input-radio">
                            <Input inputProp={{
                                inputType : "radio",
                                inputname : "jk",
                                classes : "",
                                inputPh : "",
                                inputVal : "P"
                            }}/>
                            <Label classes="">Perempuan</Label>
                        </div>
                    </FormField>
                    <FormField classes="field-form">
                        <Label classes="form-label">Hobby</Label>
                        <div className="form-input-radio">
                            <Input inputProp={{
                                inputType : "checkbox",
                                inputname : "hobby",
                                classes : "",
                                inputPh : "",
                                inputVal : "Berenang"
                            }}/>
                            <Label classes="">Berenang</Label>
                        </div>
                        <div className="form-input-radio">
                            <Input inputProp={{
                                inputType : "checkbox",
                                inputname : "hobby",
                                classes : "",
                                inputPh : "",
                                inputVal : "Jogging"
                            }}/>
                            <Label classes="">Jogging</Label>
                        </div>
                        <div className="form-input-radio">
                            <Input inputProp={{
                                inputType : "checkbox",
                                inputname : "hobby",
                                classes : "",
                                inputPh : "",
                                inputVal : "Bersepeda"
                            }}/>
                            <Label classes="">Bersepeda</Label>
                        </div>
                        <div className="form-input-radio">
                            <Input inputProp={{
                                inputType : "checkbox",
                                inputname : "hobby",
                                classes : "",
                                inputPh : "",
                                inputVal : "Futsal"
                            }}/>
                            <Label classes="">Futsal</Label>
                        </div>
                    </FormField>
                    <FormField classes="field-form">
                        <Label classes="form-label">Agama</Label>
                        <Select selectName="agama" classes="form-input" optionElement={[
                            {
                                optionVal : "",
                                textOption : "Pilih Agama"
                            },
                            {
                                optionVal : "Islam",
                                textOption : "Islam"
                            },
                            {
                                optionVal : "Hindu",
                                textOption : "Hindu"
                            },
                            {
                                optionVal : "Budha",
                                textOption : "Budha"
                            },
                            {
                                optionVal : "Kristen",
                                textOption : "Kristen"
                            },
                            {
                                optionVal : "Katolik",
                                textOption : "Katolik"
                            }
                        ]}/>
                    </FormField>
                    <FormField classes="field-form">
                        <Label classes="form-label">Alamat</Label>
                        <Textarea inputRows="5" inputname="alamat" inputPc="Masukkan Alamat"></Textarea>
                    </FormField>
                    <FormField classes="field-form">
                        <Input inputProp={{
                                inputType : "submit",
                                inputname : "submit",
                                classes : "btn-hijau",
                                inputPh : "",
                                inputVal : "Submit"
                            }}>Alamat</Input>
                    </FormField>
                </form>
            </>
         );
    }
}
 
export default Form;