const loginDefault = {
    statusLogin : false,
    dataLogin : {
        username : ""
    }
};

//Reducer
const authReducer = (state = loginDefault, action) => {
   switch (action.type) {
       case 'LOGIN_SUCCCESS':
           console.log(action.payload);
           return{
               ...state,
               statusLogin : true,
               dataLogin : action.payload
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