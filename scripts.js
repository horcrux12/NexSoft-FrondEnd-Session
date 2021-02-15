const daftarBuah    = [];
const tableBuah     = document.querySelector("#data");
let idBuah          = 1;
let indexUbah       = -1;


// Form Buah
const formBuah          = document.formBuah;
const inputNamaBuah     = formBuah.namaBuah;
const inputHargaBuah    = formBuah.hargaBuah;
const inputStokBuah     = formBuah.stokBuah;

// Form Beli
const formBeli          = document.formBeli;
const selectBuah        = formBeli.namaBeli;
const jumlahBeli        = formBeli.jumlah;

// Eventlistener
formBuah.addEventListener('submit', (e) => {
    e.preventDefault()
    validationBuah();
});

formBeli.addEventListener('submit', e => {
    e.preventDefault();
    validationBeli();
})

selectBuah.addEventListener('change', (el) => {
    let indxStok = daftarBuah.findIndex(elm => {
        return elm.id === parseInt(el.target.value)
    });
    jumlahBeli.max = daftarBuah[indxStok].stokBuah;
});
//end Eventlistener

// function
const validationBeli = () => {
    if(selectBuah.value == "" || jumlahBeli.value == 0){
        alert ("harap isi semua field!!")
    }else{
        let indxStok = daftarBuah.findIndex(elm => {
            return elm.id === parseInt(selectBuah.value)
        });

        if (jumlahBeli.value > daftarBuah[indxStok].stokBuah) {
            alert("pembelian melebihi stok")
        }else{
            daftarBuah[indxStok].stokBuah -= jumlahBeli.value
        }
        drawBuah();
        formBeli.reset()
    }   
}

const validationBuah = () => {
    if(inputNamaBuah.value == "" || inputHargaBuah.value == 0 || inputStokBuah.value == 0){
        alert("harap isi semua field !!");
    }else{
        
        if (indexUbah >= 0) {
            let objectBuah = {
                id: daftarBuah[indexUbah].id,
                namaBuah : inputNamaBuah.value,
                hargaBuah : inputHargaBuah.value,
                stokBuah : inputStokBuah.value
            }

            daftarBuah.splice(indexUbah, 1, objectBuah);
            indexUbah = -1;
            drawBuah();
            formBuah.reset()
        }else{
            let sameName = daftarBuah.findIndex(el => {
                return el.namaBuah == inputNamaBuah.value
            });

            if(sameName >= 0){
                alert("nama buah telah ada");
            }else{
                let objectBuah = {
                    id: idBuah++,
                    namaBuah : inputNamaBuah.value,
                    hargaBuah : inputHargaBuah.value,
                    stokBuah : inputStokBuah.value
                }
    
                daftarBuah.push(objectBuah);
                drawBuah();
                formBuah.reset()
            }
            
        }
        
    }
}

const drawBuah = () => {
    if (daftarBuah.length <= 0 ) {
        tableBuah.innerHTML = `<tr>
            <td colspan="5" style="text-align: center;">Data buah tidak ada</td>
        </tr>`;
        selectBuah.innerHTML = `<option value="">Pilih Buah</option>`;
        selectBuah.disabled = true;
    }else{
        let isiBuah = "";
        let isiSelectBuah = `<option value="">Pilih Buah</option>`;
        let jumlahBuah = 0;
        daftarBuah.forEach(el => {
            isiBuah += `<tr>
                <td>${el.id}</td>
                <td>${el.namaBuah}</td>
                <td>${el.hargaBuah}</td>
                <td>${el.stokBuah}</td>
                <td>
                    <button onClick="ubahTrigg(${el.id})" class="btn-ubah"> ubah </button>
                    <button onClick="hapusTrigg(${el.id})" class="btn-hapus"> hapus </button>
                </td>
            </tr>`;

            if(el.stokBuah >  0){
                jumlahBuah++;
                isiSelectBuah += `<option value="${el.id}">${el.namaBuah}</option>`;
            }
        })

        if (jumlahBuah < 1) {
            selectBuah.innerHTML = isiSelectBuah;
            selectBuah.disabled = true;
        }
        selectBuah.innerHTML = isiSelectBuah;
        selectBuah.disabled = false;
        tableBuah.innerHTML = isiBuah;
    }
}

const ubahTrigg = (id) => {
    let cariUbah = daftarBuah.findIndex(value => (value.id === id))
    if (cariUbah >= 0) {
        indexUbah = cariUbah
    }

    inputNamaBuah.value     = daftarBuah[indexUbah].namaBuah;
    inputHargaBuah.value    = daftarBuah[indexUbah].hargaBuah;
    inputStokBuah.value     = daftarBuah[indexUbah].stokBuah;
}

const hapusTrigg = (id) => {
    let cariUbah = daftarBuah.findIndex(value => (value.id === id))
    if (cariUbah >= 0) {
        daftarBuah.splice(cariUbah, 1)
    }
}
// end function

const init = () => {
    drawBuah();
}

init();