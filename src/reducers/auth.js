const loginDefault = {
    statusLogin : false,
    dataLogin : {}
};

//Reducer
const authReducer = (state = loginDefault, action) => {
   switch (action.type) {
       case 'LOGIN_SUCCESS':
           return{
               statusLogin : true,
               dataUser : action.dataUser
           }
       case 'LOGOUT' :
           return{
               ...state,
               statusLogin : false,
               dataUser : {}
           }
       default:
           return state;
   }
}

export default authReducer;