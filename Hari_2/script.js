let init = () => {
    isiTable(dataUser);
}

const formInput     = document.formBio;
const inputNama     = formInput.nama;
const inputTempat   = formInput.tempat;
const inputTanggal  = formInput.tanggal;
const inputGender   = formInput.jk;
const inputHobby    = formInput.hobby;
const inputAgama    = formInput.agama;
const inputAlamat   = formInput.alamat;

const btnSubmit     = document.querySelector("#submit-btn");
const isiData       = document.querySelector("#isi-data");
const pagination    = document.querySelector("#pagination");
const searchBar     = document.querySelector("#search-bar");

let idUser = 1;
let limit = 4;
let currPage = 1;
let updatedIndex = -1;


let hitungUmur = (tglLahir) => {
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

// Data dummy
let dataUser = [
    {
        id : idUser++,
        nama : "Silo Mardadi",
        ttl : "Bogor, 1998-03-20",
        umur : hitungUmur(new Date("1998-03-20")),
        alamat : "Bogor",
        gender : "L",
        hobby : "Futsal, Bersepeda",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Budiyono",
        ttl : "Bandung, 1998-03-12",
        umur : hitungUmur(new Date("1998-03-12")),
        alamat : "Cilacap",
        gender : "L",
        hobby : "Futsal",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Agung",
        ttl : "Bekasi, 1998-01-12",
        umur : hitungUmur(new Date("1998-01-12")),
        alamat : "Bekasi",
        gender : "L",
        hobby : "Jogging",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Bibah",
        ttl : "Depok, 1998-02-20",
        umur : hitungUmur(new Date("1998-02-20")),
        alamat : "Depok",
        gender : "P",
        hobby : "Berenang",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Mang Udin",
        ttl : "Medan, 1998-03-02",
        umur : "22",
        alamat : "Tanggerang",
        gender : "L",
        hobby : "Berenang",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Alif",
        ttl : "Planet Bekasi, 1998-02-02",
        umur : "22",
        alamat : "Bekas-si",
        gender : "L",
        hobby : "Berenang, Futsal",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Lala",
        ttl : "Bogor, 1998-01-02",
        umur : "22",
        alamat : "Bogor",
        gender : "P",
        hobby : "Berenang",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Devi",
        ttl : "Bogor, 1998-04-14",
        umur : "22",
        alamat : "Bogor",
        gender : "P",
        hobby : "Berenang, Jogging",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Kris",
        ttl : "Cirebon, 1998-04-13",
        umur : "22",
        alamat : "Cirebon",
        gender : "L",
        hobby : "Berenang, Jogging",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Rizki",
        ttl : "Sleman, 1998-04-12",
        umur : "22",
        alamat : "Sleman",
        gender : "L",
        hobby : "Berenang, Jogging",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Silo Mardadi",
        ttl : "Bogor, 1998-03-20",
        umur : hitungUmur(new Date("1998-03-20")),
        alamat : "Bogor",
        gender : "L",
        hobby : "Futsal, Bersepeda",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Budiyono",
        ttl : "Bandung, 1998-03-12",
        umur : hitungUmur(new Date("1998-03-12")),
        alamat : "Cilacap",
        gender : "L",
        hobby : "Futsal",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Agung",
        ttl : "Bekasi, 1998-01-12",
        umur : hitungUmur(new Date("1998-01-12")),
        alamat : "Bekasi",
        gender : "L",
        hobby : "Jogging",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Bibah",
        ttl : "Depok, 1998-02-20",
        umur : hitungUmur(new Date("1998-02-20")),
        alamat : "Depok",
        gender : "P",
        hobby : "Berenang",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Mang Udin",
        ttl : "Medan, 1998-03-02",
        umur : "22",
        alamat : "Tanggerang",
        gender : "L",
        hobby : "Berenang",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Alif",
        ttl : "Planet Bekasi, 1998-02-02",
        umur : "22",
        alamat : "Bekas-si",
        gender : "L",
        hobby : "Berenang, Futsal",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Lala",
        ttl : "Bogor, 1998-01-02",
        umur : "22",
        alamat : "Bogor",
        gender : "P",
        hobby : "Berenang",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Devi",
        ttl : "Bogor, 1998-04-14",
        umur : "22",
        alamat : "Bogor",
        gender : "P",
        hobby : "Berenang, Jogging",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Kris",
        ttl : "Cirebon, 1998-04-13",
        umur : "22",
        alamat : "Cirebon",
        gender : "L",
        hobby : "Berenang, Jogging",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Rizki",
        ttl : "Sleman, 1998-04-12",
        umur : "22",
        alamat : "Sleman",
        gender : "L",
        hobby : "Berenang, Jogging",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Silo Mardadi",
        ttl : "Bogor, 1998-03-20",
        umur : hitungUmur(new Date("1998-03-20")),
        alamat : "Bogor",
        gender : "L",
        hobby : "Futsal, Bersepeda",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Budiyono",
        ttl : "Bandung, 1998-03-12",
        umur : hitungUmur(new Date("1998-03-12")),
        alamat : "Cilacap",
        gender : "L",
        hobby : "Futsal",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Agung",
        ttl : "Bekasi, 1998-01-12",
        umur : hitungUmur(new Date("1998-01-12")),
        alamat : "Bekasi",
        gender : "L",
        hobby : "Jogging",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Bibah",
        ttl : "Depok, 1998-02-20",
        umur : hitungUmur(new Date("1998-02-20")),
        alamat : "Depok",
        gender : "P",
        hobby : "Berenang",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Mang Udin",
        ttl : "Medan, 1998-03-02",
        umur : "22",
        alamat : "Tanggerang",
        gender : "L",
        hobby : "Berenang",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Alif",
        ttl : "Planet Bekasi, 1998-02-02",
        umur : "22",
        alamat : "Bekas-si",
        gender : "L",
        hobby : "Berenang, Futsal",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Lala",
        ttl : "Bogor, 1998-01-02",
        umur : "22",
        alamat : "Bogor",
        gender : "P",
        hobby : "Berenang",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Devi",
        ttl : "Bogor, 1998-04-14",
        umur : "22",
        alamat : "Bogor",
        gender : "P",
        hobby : "Berenang, Jogging",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Kris",
        ttl : "Cirebon, 1998-04-13",
        umur : "22",
        alamat : "Cirebon",
        gender : "L",
        hobby : "Berenang, Jogging",
        agama : "Islam"
    },
    {
        id : idUser++,
        nama : "Rizki",
        ttl : "Sleman, 1998-04-12",
        umur : "22",
        alamat : "Sleman",
        gender : "L",
        hobby : "Berenang, Jogging",
        agama : "Islam"
    }
];
// END Data Dummy

// Action listener
formInput.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    if (validation()) {
        let arrHobby = [];
        inputHobby.forEach(el => {
            if(el.checked == true){
                arrHobby.push(el.value);
            }
        });

        let objectUser = {
            id : idUser++,
            nama : inputNama.value,
            ttl : `${inputTempat.value}, ${inputTanggal.value}`,
            umur : hitungUmur(new Date(inputTanggal.value)),
            alamat : inputAlamat.value,
            gender : inputGender.value,
            hobby : arrHobby.join(", "),
            agama : inputAgama.value
        }
        if (btnSubmit.getAttribute("data-jenis") == "submit"){
            dataUser.push(objectUser);
            emptyField();
            currPage = 1;
            alert("Data berhasil diinput");
        }else if(btnSubmit.getAttribute("data-jenis") == "update"){
            if(updatedIndex >= 0) doUpdate(objectUser, updatedIndex);
            emptyField();
            alert("Data berhasil diubah");
        }
        isiTable(dataUser);
    }else{
        alert("Harap isi semua field");
    }
});

searchBar.addEventListener("keyup", () => {
    isiTable(searchFunc(searchBar.value));
});
// END Action listener

// Function 
let pageFunc = (arrayData) => {
    const pagging = document.querySelectorAll(".pageClick");
    pagging.forEach(el => {
        el.addEventListener("click", (e) => {
            currPage = el.innerText;
            isiTable(arrayData);
        });
    });
}

let searchFunc = (searchParams) => {

    let searchVal = searchParams.toLowerCase();

    let searchRes = dataUser.filter(val => {
        return val.alamat.toLowerCase().search(searchVal) >= 0 || 
        val.nama.toLowerCase().search(searchVal) >= 0 || 
        val.hobby.toLowerCase().search(searchVal) >= 0
    });

    return searchRes;
}

// set pagination number
let pageSet = (val, max) => {
    let startRow = 1;
    let maxRow = 5;
    let maxPage = max;
    let deffRows = Math.floor(maxRow/2);
    let createDoc;

    // limitation page by maxRow
    if((val - deffRows) <= 1){
        startRow = 1;
    }else{
        let temp = val - deffRows
        if((temp + (maxRow - 1)) > maxPage){
            startRow = maxPage - (maxRow - 1);
        }else{
            startRow = temp;
        }
    }
    // END limitation page

    pagination.innerHTML = "";
    // for (let i = 1; i <= page; i++) {
        
    // }
    for (let i = startRow; i < (maxRow + startRow); i++) {
        if(i <= maxPage){
            if (i == val) {
                createDoc = document.createElement("a");
                createDoc.classList.toggle("active");
                createDoc.innerText = i;
                createDoc.href = "#0";
                pagination.appendChild(createDoc);
                // isiPage += `<span class="button-page active" style="margin-right : 1vh;" data-page="${i}">${i}</span>`;
            }else {
                createDoc = document.createElement("a");
                createDoc.classList.toggle("pageClick");
                createDoc.innerText = i;
                createDoc.href = "#0";
                pagination.appendChild(createDoc);
            }
        }
    }
};

// create row table 
let isiTable = (arrData) => {
    let isi = "";
    let loopLength = currPage * limit;
    let offset = loopLength - limit;

    if (arrData.length > 0) {
        for (let i = offset; i < loopLength; i++) {
            if (i < arrData.length) {
                let ind = (arrData.length - 1) - i;
                isi += `<tr>
                    <td>${i + 1}</td>
                    <td>${arrData[ind].nama}</td>
                    <td>${arrData[ind].ttl}</td>
                    <td>${arrData[ind].umur}</td>
                    <td>${arrData[ind].gender}</td>
                    <td>${arrData[ind].hobby}</td>
                    <td>${arrData[ind].agama}</td>
                    <td>${arrData[ind].alamat}</td>
                    <td>
                        <button onClick="editData(${arrData[ind].id})" class="edit">edit</button>
                        <button onClick="deleteData(${arrData[ind].id})" class="delete">delete</button>
                    </td>
                </tr>`;
            }
        }
    
        pageSet(currPage, Math.ceil(arrData.length/limit));
    
        isiData.innerHTML = isi;
        pageFunc(arrData);
    }else{
        isiData.innerHTML = `<td valign="top" colspan="9" style="text-align:center;" class="dataTables_empty">Tidak ada data</td>`
    }

}

let emptyField = () => {
    // Mengosongkan field input data
    formInput.reset();
}

let validation = () => {
    if(
        inputNama.value != "" &&
        inputTempat.value != "" &&
        inputTanggal.value != "" &&
        inputAlamat.value != "" && 
        validationCheck() &&
        inputGender.value != "" && 
        inputAgama.value != ""
    ){ return true;}
    else{ return false; }
}

let validationCheck = () => {
    let isTrue = false;
    inputHobby.forEach(el => {
        if(el.checked == true){
            isTrue = true;
        }
    });
    return isTrue;
}

let deleteData = (id) => {
    emptyField();
    btnSubmit.setAttribute("data-jenis", "submit");
    let index = dataUser.findIndex((value, index) => { 
        return value.id == id;
     });
    if(confirm("Apakah Anda yakin ingin menghapus data ini ?")){
        dataUser.splice(index, 1);
        isiTable(dataUser);
    }
}

let editData = (id) => {
    emptyField();

    let index = dataUser.findIndex((value, index) => { 
        return value.id == id;
    });

    inputNama.value         = dataUser[index].nama;
    let arrTTL              = dataUser[index].ttl.split(",");
    inputTempat.value       = arrTTL[0]; 
    inputTanggal.value      = arrTTL[1].trim();
    inputAlamat.value       = dataUser[index].alamat;
    inputAgama.value        = dataUser[index].agama;
    
    inputGender.forEach(el => {
        if(el.value == dataUser[index].gender){
            el.checked = true;
        }
    });

    let arrHob = dataUser[index].hobby.split(", ");
    arrHob.forEach(element => {
        inputHobby.forEach(el => {
            if(el.value == element){
                el.checked = true;
            }
        });
    });

    updatedIndex = index;
    btnSubmit.setAttribute("data-jenis", "update");

}

let doUpdate = (object, index) => {
    console.log(object);
    dataUser.splice(index, 1, object);
    updatedIndex = -1;
    btnSubmit.setAttribute("data-jenis", "submit");
}

init();
//init untuk function yang di load pertama kali;