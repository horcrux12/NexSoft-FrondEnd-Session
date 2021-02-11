const dataDefault = {
    idBarang : 4,
    idTransaksi : 2,
    dataBarang : [
        {
            id : 1,
            namaBarang: "Kacang Kulit",
            hargaBarang: 20000,
        },
        {
            id : 2,
            namaBarang: "Roti",
            hargaBarang: 30000,
        },
        {
            id : 3,
            namaBarang: "Keripik Kentang",
            hargaBarang: 10000,
        }
    ],
    dataTransaksi : [
        {
            id : 1,
            transaksi : [
                {
                    id : 1,
                    namaBarang: "Kacang Kulit",
                    hargaBarang: 20000,
                    qty : 3,
                    total : 60000
                },
                {
                    id : 3,
                    namaBarang: "Keripik Kentang",
                    hargaBarang: 10000,
                    qty : 4,
                    total : 40000
                }
            ],
            totalBelanja : 100000,
            ppn : 10000,
            totalBayar : 110000
        }
    ],
};

//Reducer
const barangReducer = (state = dataDefault, action) => {
    let objectAdded = {}
    let newData = []
    switch (action.type) {
       case 'TAMBAH_BARANG':
           objectAdded = {
               ...action.dataBarang,
               id : state.idBarang
           }
           return{
                ...state,
                idBarang : state.idBarang + 1,
                dataBarang : [...state.dataBarang, objectAdded]
           }
        case 'HAPUS_BARANG' :
            newData = state.dataBarang
            let idxB = newData.findIndex((value) => {
                return value.id === action.dataBarang
            })
            newData.splice(idxB, 1)
            
            return{
                ...state,
                dataBarang : newData
            }
        case 'TAMBAH_TRANSAKSI':
            let temp = action.dataTransaksi
            let totalBelanja = 0;
            temp.forEach((value) => {
                totalBelanja += value.total
            })
            objectAdded = {
                id : state.idTransaksi,
                transaksi : action.dataTransaksi,
                totalBelanja : totalBelanja,
                ppn : totalBelanja * 0.1,
                totalBayar : totalBelanja + (totalBelanja * 0.1)
            }
            return{
                 ...state,
                 idTransaksi : state.idTransaksi + 1,
                 dataTransaksi : [...state.dataTransaksi, objectAdded]
            }
       default:
           return state;
   }
}

export default barangReducer;