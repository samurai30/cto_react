import {combineReducers} from "redux";
import loginReducer from "./reducers/loginReducer";
import {reducer as formReducer} from 'redux-form'
import addAdminReducer from "./reducers/addAdminReducer";
import restaruantReducer from "./reducers/restaruantReducer";
import unitRawCatReducer from "./reducers/unitRawCatReducer";
import addSupplierReducer from "./reducers/addSupplierReducer";
import userDetailsReducer from "./reducers/userDetailsReducer";
export default combineReducers({
    loginReducer,
    addAdminReducer,
    restaruantReducer,
    unitRawCatReducer,
    addSupplierReducer,
    userDetailsReducer,
    form: formReducer
})