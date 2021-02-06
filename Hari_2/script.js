const formInput     = document.formBio;
const btnSubmit     = document.querySelector("#submit-btn");
const inputNama     = formInput.nama;
const inputTempat   = formInput.tempat;
const inputTanggal  = formInput.tanggal;
const inputGender   = formInput.jk;
const inputHobby    = formInput.hobby;
const inputAgama    = formInput.agama;
const inputAlamat   = formInput.alamat;
const isiData       = document.querySelector("#isi-data");
const pagination    = document.querySelector("#pagination");

let limit = 4;
let currPage = 1;
let updatedIndex = -1;

let dataUser = [
    {
        nama : "Silo Mardadi",
        ttl : "Bogor, 1998-03-20",
        umur : "22",
        alamat : "Bogor",
        gender : "L",
        hobby : "Futsal, Bersepeda",
        agama : "Islam"
    },
    {
        nama : "Budiyono",
        ttl : "Bandung, 1998-03-12",
        umur : "22",
        alamat : "Cilacap",
        gender : "L",
        hobby : "Futsal",
        agama : "Islam"
    },
    {
        nama : "Agung",
        ttl : "Bekasi, 1998-01-12",
        umur : "22",
        alamat : "Bekasi",
        gender : "L",
        hobby : "Joging",
        agama : "Islam"
    },
    {
        nama : "Bibah",
        ttl : "Depok, 1998-02-20",
        umur : "22",
        alamat : "Depok",
        gender : "P",
        hobby : "Berenang",
        agama : "Islam"
    },
    {
        nama : "Mang Udin",
        ttl : "Medan, 1998-03-02",
        umur : "22",
        alamat : "Tanggerang",
        gender : "L",
        hobby : "Berenang",
        agama : "Islam"
    },
    {
        nama : "Alif",
        ttl : "Planet Bekasi, 1998-02-02",
        umur : "22",
        alamat : "Bekas-si",
        gender : "L",
        hobby : "Berenang, Futsal",
        agama : "Islam"
    },
    {
        nama : "Lala",
        ttl : "Bogor, 1998-01-02",
        umur : "22",
        alamat : "Bogor",
        gender : "P",
        hobby : "Berenang",
        agama : "Islam"
    },
    {
        nama : "Devi",
        ttl : "Bogor, 1998-04-14",
        umur : "22",
        alamat : "Bogor",
        gender : "P",
        hobby : "Berenang, Jogging",
        agama : "Islam"
    },
    {
        nama : "Kris",
        ttl : "Cirebon, 1998-04-13",
        umur : "22",
        alamat : "Cirebon",
        gender : "L",
        hobby : "Berenang, Jogging",
        agama : "Islam"
    },
    {
        nama : "Rizki",
        ttl : "Sleman, 1998-04-12",
        umur : "22",
        alamat : "Sleman",
        gender : "L",
        hobby : "Berenang, Jogging",
        agama : "Islam"
    }
];

formInput.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    if (validation()) {
        let arrHobby = []
        inputHobby.forEach(el => {
            if(el.checked == true){
                arrHobby.push(el.value);
            }
        });

        let objectUser = {
            nama : inputNama.value,
            ttl : `${inputTempat.value}, ${inputTanggal.value}`,
            umur : hitungUmur(new Date(inputTanggal.value)),
            alamat : inputAlamat.value,
            gender : inputGender.value,
            hobby : arrHobby.join(" ,"),
            agama : inputAgama.value
        }

        if (btnSubmit.getAttribute("data-jenis") == "submit"){
            dataUser.push(objectUser);
        }else if(btnSubmit.getAttribute("data-jenis") == "update"){
            if(updatedIndex > 0) updatedDo(objectUser, updatedIndex);
        }
        isiTable();
        removeFieldInput();
    }else{
        alert("Harap isi semua field");
    }
});

let pageFunc = () => {
    const nextPage = document.querySelectorAll(".next");
    nextPage.forEach(el => {
        el.addEventListener("click", (e) => {
            currPage = el.innerText;
            isiTable();
        });
    });

    const prevPage = document.querySelectorAll(".prev");
    prevPage.forEach(el => {
        el.addEventListener("click", (e) => {
            currPage = el.innerText;
            isiTable();
        });
    });
}

let pageSet = (val) => {
    let startRow = 1;
    let maxRow = 5;
    let maxPage = Math.ceil(dataUser.length/limit);
    let deffRows = Math.floor(maxRow/2);
    let createDoc;

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

    pagination.innerHTML = "";
    // for (let i = 1; i <= page; i++) {
        
    // }
    for (let i = startRow; i < (maxRow + startRow); i++) {
        if(i <= maxPage){
            if (i == val) {
                createDoc = document.createElement("a");
                createDoc.classList.toggle("active");
                createDoc.innerText = i;
                createDoc.href = "javascript:void(0)";
                pagination.appendChild(createDoc);
                // isiPage += `<span class="button-page active" style="margin-right : 1vh;" data-page="${i}">${i}</span>`;
            }else if(i < val){
                createDoc = document.createElement("a");
                createDoc.classList.toggle("prev");
                createDoc.innerText = i;
                createDoc.href = "javascript:void(0)";
                pagination.appendChild(createDoc);
            }else if(i > val){
                createDoc = document.createElement("a");
                createDoc.classList.toggle("next");
                createDoc.innerText = i;
                createDoc.href = "javascript:void(0)";
                pagination.appendChild(createDoc);
            }
        }
    }
};

let isiTable = () => {
    let isi = "";
    let loopLength = currPage * 4;
    let offset = loopLength - 4;

    for (let i = offset; i < loopLength; i++) {
        if (i < dataUser.length) {
            isi += `<tr>
                <td>${i + 1}</td>
                <td>${dataUser[i].nama}</td>
                <td>${dataUser[i].ttl}</td>
                <td>${dataUser[i].umur}</td>
                <td>${dataUser[i].gender}</td>
                <td>${dataUser[i].hobby}</td>
                <td>${dataUser[i].agama}</td>
                <td>${dataUser[i].alamat}</td>
                <td>
                    <button onClick="editData(${i})" class="edit">edit</button>
                    <button onClick="deleteData(${i})" class="delete">delete</button>
                </td>
            </tr>`;
        }
    }

    pageSet(currPage);

    isiData.innerHTML = isi;
    pageFunc();
}

isiTable();

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

let removeFieldInput = () => {
    inputNama.value="";
    inputTempat.value="";
    inputTanggal.value="";
    inputAlamat.value="";
    inputAgama.value="";
    inputGender.forEach(el => {
        el.checked = false;
    });

    inputHobby.forEach(el => el.checked = false);
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

let deleteData = (index) => {
    if(confirm("Apakah Anda yakin ingin menghapus data ini ?")){
        dataUser.splice(index, 1);
        isiTable();
    }
}

let editData = (index) => {
    inputNama.value         = dataUser[index].nama;
    let arrTTL              = dataUser[index].ttl.split(",");
    inputTempat.value       = arrTTL[0]; 
    inputTanggal.value      = arrTTL[1].trim();
    inputAlamat.innerText   = dataUser[index].alamat;
    inputAgama.value        = dataUser[index].agama;
    
    inputGender.forEach(el => {
        if(el.value == dataUser[index].gender){
            el.checked = true;
        }
    });

    let arrHob = dataUser[index].hobby.split(", ");
    console.log(arrHob);
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

let updatedDo = (object, index) => {
    dataUser.splice(index, 1, object);
    updatedIndex = -1;
    btnSubmit.setAttribute("data-jenis", "submit");
}
