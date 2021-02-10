import React, { Component } from 'react';
import {Input,Textarea, Label, Select, FormField} from "../../components/form_organism/form-organism";
import "./style_form.css"

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama : "", tempat : "", tanggal : "", alamat : "", gender : "", hobby : [], agama : ""
        }
        if(this.props.resetStatus == "deleted"){
            this.resetForm()
        }
    }

    // componentDidMount(){
    //     console.log("form did mount")
    // }

    // shouldComponentUpdate (nextProps, nextState){
    //     console.log(nextProps)
    //     return true
    // }

    hitungUmur = (tglLahir) => {
        let nowDate = new Date();
        let umur = 0;
        if (tglLahir.getMonth() > nowDate.getMonth()) {
            umur = 1;
        }else if (tglLahir.getMonth() == nowDate.getMonth() && tglLahir.getDate() > nowDate.getDate()) {
            umur = 1;
        }
  
        let umurUser = nowDate.getFullYear() - tglLahir.getFullYear() - umur;
        if(umurUser < 0){
            umurUser = 0;
        }
        return umurUser;
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.nama.length < 1 && 
            this.state.tempat.length < 1 &&
            this.state.tanggal.length < 1 &&
            this.state.alamat.length < 1 &&
            this.state.gender.length < 1 &&
            this.state.hobby.length < 1 &&
            this.state.agama.length < 1)
            {
                alert("isi semua data")
            }else{
                
                if (Object.keys(this.props.dataUpdate).length === 0) {
                    console.log("save")
                    let user = {
                        nama : this.state.nama,
                        ttl : this.state.tempat+", "+this.state.tanggal,
                        umur : this.hitungUmur(new Date(this.state.tanggal)),
                        alamat : this.state.alamat,
                        gender : this.state.gender,
                        hobby : this.state.hobby.join(", "),
                        agama : this.state.agama
                    }
                    this.props.saveFunc(user)
                }else{
                    console.log("update")
                    let user = {
                        id : this.props.dataUpdate.id,
                        nama : this.state.nama,
                        ttl : this.state.tempat+", "+this.state.tanggal,
                        umur : this.hitungUmur(new Date(this.state.tanggal)),
                        alamat : this.state.alamat,
                        gender : this.state.gender,
                        hobby : this.state.hobby.join(", "),
                        agama : this.state.agama
                    }
                    user.id = this.props.dataUpdate.id
                    console.log(user)
                    this.props.doUpdate(user)
                }
                this.resetForm();
                e.target.reset();
                // console.log(this.state)
            } 
    }

    setValue = (key, value) => {
        if (key == "hobby") {
            
        }else{
            this.setState({
                [key]: value
            })
        }
    }

    setValueCheck = (key, value, status) => {
        let arrCheck = this.state.hobby;
        if (status) {
            let idxCheck = arrCheck.findIndex(el => el == value);
            if(idxCheck < 0){
                arrCheck.push(value)
            }
        }else{
            let idxCheck = arrCheck.findIndex(el => el == value);
            if(idxCheck >= 0){
                arrCheck.splice(idxCheck, 1);
            }
        }
        console.log(arrCheck)
        this.setState({
            [key]: arrCheck
        })        
    }

    resetForm = () => {
        this.setState({
            nama: "", 
            tempat: "", 
            tanggal: "", 
            alamat : "",
            gender : "",
            hobby : [],
            agama : ""
        })
    }

    updateField = () => {
        const {dataUpdate} = this.props;  
    }
    
    componentDidUpdate(prevProps) {
        const {dataUpdate} = this.props;
        // console.log(dataUpdate)

        if(dataUpdate != prevProps.dataUpdate && Object.keys(dataUpdate).length > 0){
            let arrTtl = dataUpdate.ttl.split(", ");
            this.setState({
                nama: dataUpdate.nama, 
                tempat: arrTtl[0], 
                tanggal: arrTtl[1], 
                alamat : dataUpdate.alamat,
                gender : dataUpdate.gender,
                hobby : dataUpdate.hobby.split(", "),
                agama : dataUpdate.agama
            })
        }
    }

    render() {
        const {nama, tempat, tanggal, alamat, gender, hobby, agama} = this.state;
        const {dataUpdate} = this.props
        return(
            <form onSubmit={this.handleSubmit.bind(this)} className="form-input-box">
                <FormField classes="field-form">
                    <Label classes="form-label">Nama</Label>
                    <Input inputProp={{
                        inputType : "text",
                        inputname : "nama",
                        classes : "form-input",
                        inputPh : "Masukkan nama",
                        inputVal :nama,
                        funcSet : this.setValue
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
                            inputVal : tempat,
                            funcSet : this.setValue
                        }}/>
                        <Input inputProp={
                            {
                                inputType : "date",
                                inputname : "tanggal",
                                classes : "form-input",
                                inputPh : "",
                                inputVal : tanggal,
                                funcSet : this.setValue
                            }
                        }/>
                    </div>
                </FormField>
                <FormField classes="field-form">
                    <Label classes="form-label">Jenis Kelamin</Label>
                    <div className="form-input-radio">
                        <Input inputProp={
                            {
                                inputType : "radio",
                                inputname : "gender",
                                classes : "",
                                inputPh : "",
                                inputVal : "L",
                                funcSet : this.setValue,
                            }
                        } checked={gender == "L" ? "checked" :""}/>
                        <Label classes="">Laki-laki</Label>
                    </div>
                    <div className="form-input-radio">
                        <Input inputProp={{
                            inputType : "radio",
                            inputname : "gender",
                            classes : "",
                            inputPh : "",
                            inputVal : "P",
                            funcSet : this.setValue
                        }} checked={gender == "P" ? "checked" :""}/>
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
                            inputVal : "Berenang",
                            funcSet : this.setValueCheck
                        }} checked={hobby.findIndex(el => el == "Berenang") >= 0 ? "checked" :""}/>
                        <Label classes="">Berenang</Label>
                    </div>
                    <div className="form-input-radio">
                        <Input inputProp={{
                            inputType : "checkbox",
                            inputname : "hobby",
                            classes : "",
                            inputPh : "",
                            inputVal : "Jogging",
                            funcSet : this.setValueCheck
                        }}checked={hobby.findIndex(el => el == "Jogging") >= 0 ? "checked" :""}/>
                        <Label classes="">Jogging</Label>
                    </div>
                    <div className="form-input-radio">
                        <Input inputProp={{
                            inputType : "checkbox",
                            inputname : "hobby",
                            classes : "",
                            inputPh : "",
                            inputVal : "Bersepeda",
                            funcSet : this.setValueCheck
                        }}checked={hobby.findIndex(el => el == "Bersepeda") >= 0 ? "checked" :""}/>
                        <Label classes="">Bersepeda</Label>
                    </div>
                    <div className="form-input-radio">
                        <Input inputProp={{
                            inputType : "checkbox",
                            inputname : "hobby",
                            classes : "",
                            inputPh : "",
                            inputVal : "Futsal",
                            funcSet : this.setValueCheck
                        }} checked={hobby.findIndex(el => el == "Futsal") >= 0 ? "checked" :""}/>
                        <Label classes="">Futsal</Label>
                    </div>
                </FormField>
                <FormField classes="field-form">
                    <Label classes="form-label">Agama</Label>
                    <Select selectName="agama" funcSet = {this.setValue} classes="form-input" valSelected={agama} optionElement={[
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
                    <Textarea inputRows="5" funcSet = {this.setValue} inputname="alamat" inputPc="Masukkan Alamat" value={alamat}></Textarea>
                </FormField>
                <FormField classes="field-form">
                    <Input inputProp={{
                            inputType : "submit",
                            inputname : "submit",
                            classes : "btn-hijau",
                            inputPh : "",
                            inputVal : "Submit",
                            funcSet : this.setValue
                        }}></Input>
                </FormField>
            </form>
        )
        // if (Object.keys(this.props.dataUpdate).length === 0) {
        //     return(
        //         <form onSubmit={this.handleSubmit.bind(this)} className="form-input-box">
        //             <FormField classes="field-form">
        //                 <Label classes="form-label">Nama</Label>
        //                 <Input inputProp={{
        //                     inputType : "text",
        //                     inputname : "nama",
        //                     classes : "form-input",
        //                     inputPh : "Masukkan nama",
        //                     inputVal :"",
        //                     funcSet : this.setValue
        //                 }}/>
        //             </FormField>
        //             <FormField classes="field-form">
        //                 <Label classes="form-label">TTL</Label>
        //                 <div className="double-form">
        //                     <Input inputProp={{
        //                         inputType : "text",
        //                         inputname : "tempat",
        //                         classes : "form-input",
        //                         inputPh : "Masukkan tempat lahir",
        //                         inputVal : "",
        //                         funcSet : this.setValue
        //                     }}/>
        //                     <Input inputProp={
        //                         {
        //                             inputType : "date",
        //                             inputname : "tanggal",
        //                             classes : "form-input",
        //                             inputPh : "",
        //                             inputVal : "",
        //                             funcSet : this.setValue
        //                         }
        //                     }/>
        //                 </div>
        //             </FormField>
        //             <FormField classes="field-form">
        //                 <Label classes="form-label">Jenis Kelamin</Label>
        //                 <div className="form-input-radio">
        //                     <Input inputProp={
        //                         {
        //                             inputType : "radio",
        //                             inputname : "gender",
        //                             classes : "",
        //                             inputPh : "",
        //                             inputVal : "L",
        //                             funcSet : this.setValue,
        //                         }
        //                     }/>
        //                     <Label classes="">Laki-laki</Label>
        //                 </div>
        //                 <div className="form-input-radio">
        //                     <Input inputProp={{
        //                         inputType : "radio",
        //                         inputname : "gender",
        //                         classes : "",
        //                         inputPh : "",
        //                         inputVal : "P",
        //                         funcSet : this.setValue
        //                     }}/>
        //                     <Label classes="">Perempuan</Label>
        //                 </div>
        //             </FormField>
        //             <FormField classes="field-form">
        //                 <Label classes="form-label">Hobby</Label>
        //                 <div className="form-input-radio">
        //                     <Input inputProp={{
        //                         inputType : "checkbox",
        //                         inputname : "hobby",
        //                         classes : "",
        //                         inputPh : "",
        //                         inputVal : "Berenang",
        //                         funcSet : this.setValueCheck
        //                     }}/>
        //                     <Label classes="">Berenang</Label>
        //                 </div>
        //                 <div className="form-input-radio">
        //                     <Input inputProp={{
        //                         inputType : "checkbox",
        //                         inputname : "hobby",
        //                         classes : "",
        //                         inputPh : "",
        //                         inputVal : "Jogging",
        //                         funcSet : this.setValueCheck
        //                     }}/>
        //                     <Label classes="">Jogging</Label>
        //                 </div>
        //                 <div className="form-input-radio">
        //                     <Input inputProp={{
        //                         inputType : "checkbox",
        //                         inputname : "hobby",
        //                         classes : "",
        //                         inputPh : "",
        //                         inputVal : "Bersepeda",
        //                         funcSet : this.setValueCheck
        //                     }}/>
        //                     <Label classes="">Bersepeda</Label>
        //                 </div>
        //                 <div className="form-input-radio">
        //                     <Input inputProp={{
        //                         inputType : "checkbox",
        //                         inputname : "hobby",
        //                         classes : "",
        //                         inputPh : "",
        //                         inputVal : "Futsal",
        //                         funcSet : this.setValueCheck
        //                     }}/>
        //                     <Label classes="">Futsal</Label>
        //                 </div>
        //             </FormField>
        //             <FormField classes="field-form">
        //                 <Label classes="form-label">Agama</Label>
        //                 <Select selectName="agama" funcSet = {this.setValue} classes="form-input" valSelected="" optionElement={[
        //                     {
        //                         optionVal : "",
        //                         textOption : "Pilih Agama"
        //                     },
        //                     {
        //                         optionVal : "Islam",
        //                         textOption : "Islam"
        //                     },
        //                     {
        //                         optionVal : "Hindu",
        //                         textOption : "Hindu"
        //                     },
        //                     {
        //                         optionVal : "Budha",
        //                         textOption : "Budha"
        //                     },
        //                     {
        //                         optionVal : "Kristen",
        //                         textOption : "Kristen"
        //                     },
        //                     {
        //                         optionVal : "Katolik",
        //                         textOption : "Katolik"
        //                     }
        //                 ]}/>
        //             </FormField>
        //             <FormField classes="field-form">
        //                 <Label classes="form-label">Alamat</Label>
        //                 <Textarea inputRows="5" funcSet = {this.setValue} inputname="alamat" inputPc="Masukkan Alamat" value=""></Textarea>
        //             </FormField>
        //             <FormField classes="field-form">
        //                 <Input inputProp={{
        //                         inputType : "submit",
        //                         inputname : "submit",
        //                         classes : "btn-hijau",
        //                         inputPh : "",
        //                         inputVal : "Submit",
        //                         funcSet : this.setValue
        //                     }}></Input>
        //             </FormField>
        //         </form>
        //     )
        // }else{
            
        // }
    }
}
 
export default Form;