import md5 from "md5";

const loginDefault = {
    dataUser : [
        {
            id : 1,
            username: "admin",
            password: md5("admin"),
            role: "Admin",
        }
    ],
    idUser : 2,
};

//Reducer
const userReducer = (state = loginDefault, action) => {
   switch (action.type) {
       case 'TAMBAH_USER':
           let objectAdded = {
               ...action.dataUser,
               id : state.idUser
           }

           return{
                ...state,
                idUser : state.idUser + 1,
                dataUser : [...state.dataUser, objectAdded]
           }
       default:
           return state;
   }
}

export default userReducer;