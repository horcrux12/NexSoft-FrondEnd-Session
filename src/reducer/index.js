import { combineReducers } from "redux";
import Auth from "./login_reduce";
import userReducer from "./data_user";
import barangReducer from "./data_barang";

const reducers = combineReducers({
    Auth : Auth,
    userReducer : userReducer,
    barangReducer : barangReducer
})

export default reducers