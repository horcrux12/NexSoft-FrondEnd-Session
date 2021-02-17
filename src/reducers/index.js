import { combineReducers } from "redux";
import UserReducer from "./dataUser";
import AuthReducer from "./auth";

const reducers = combineReducers({
    AuthReducer : AuthReducer,
    UserReducer : UserReducer
})

export default reducers