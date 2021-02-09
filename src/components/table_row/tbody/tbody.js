import React, { Component } from 'react';
import Col from "./col/col";

class Tbody extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
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

    
    render() { 
        let idUser = 1;
        // Data dummy
        let dataUser = [
            {
                id : idUser++,
                nama : "Silo Mardadi",
                ttl : "Bogor, 1998-03-20",
                umur : this.hitungUmur(new Date("1998-03-20")),
                alamat : "Bogor",
                gender : "L",
                hobby : "Futsal, Bersepeda",
                agama : "Islam"
            },
            {
                id : idUser++,
                nama : "Budiyono",
                ttl : "Bandung, 1998-03-12",
                umur : this.hitungUmur(new Date("1998-03-12")),
                alamat : "Cilacap",
                gender : "L",
                hobby : "Futsal",
                agama : "Islam"
            },
            {
                id : idUser++,
                nama : "Agung",
                ttl : "Bekasi, 1998-01-12",
                umur : this.hitungUmur(new Date("1998-01-12")),
                alamat : "Bekasi",
                gender : "L",
                hobby : "Jogging",
                agama : "Islam"
            },
            {
                id : idUser++,
                nama : "Bibah",
                ttl : "Depok, 1998-02-20",
                umur : this.hitungUmur(new Date("1998-02-20")),
                alamat : "Depok",
                gender : "P",
                hobby : "Berenang",
                agama : "Islam"
            },
            {
                id : idUser++,
                nama : "Mang Udin",
                ttl : "Medan, 1998-03-02",
                umur : this.hitungUmur(new Date("1998-03-02")),
                alamat : "Tanggerang",
                gender : "L",
                hobby : "Berenang",
                agama : "Islam"
            },
            {
                id : idUser++,
                nama : "Alif",
                ttl : "Planet Bekasi, 1998-02-02",
                umur : this.hitungUmur(new Date("1998-02-02")),
                alamat : "Bekas-si",
                gender : "L",
                hobby : "Berenang, Futsal",
                agama : "Islam"
            },
            {
                id : idUser++,
                nama : "Lala",
                ttl : "Bogor, 1998-01-02",
                umur : this.hitungUmur(new Date("1998-01-02")),
                alamat : "Bogor",
                gender : "P",
                hobby : "Berenang",
                agama : "Islam"
            },
            {
                id : idUser++,
                nama : "Devi",
                ttl : "Bogor, 1998-04-14",
                umur : this.hitungUmur(new Date("1998-04-14")),
                alamat : "Bogor",
                gender : "P",
                hobby : "Berenang, Jogging",
                agama : "Islam"
            },
            {
                id : idUser++,
                nama : "Kris",
                ttl : "Cirebon, 1998-04-13",
                umur : this.hitungUmur(new Date("1998-04-13")),
                alamat : "Cirebon",
                gender : "L",
                hobby : "Berenang, Jogging",
                agama : "Islam"
            },
            {
                id : idUser++,
                nama : "Rizki",
                ttl : "Sleman, 1998-04-12",
                umur : this.hitungUmur(new Date("1998-04-12")),
                alamat : "Sleman",
                gender : "L",
                hobby : "Berenang, Jogging",
                agama : "Islam"
            }
        ];
        let no = 1;
        const user = dataUser.map(el => {
            return (<Col key={el.id} no={no++} user={el}/>)
        })
        return ( 
            <>
                <tbody>
                    {user}
                </tbody>
            </>
         );
    }
}
 
export default Tbody;