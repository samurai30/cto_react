import {combineReducers} from "redux";
import loginReducer from "./reducers/loginReducer";
import {reducer as formReducer} from 'redux-form'
import addAdminReducer from "./reducers/addAdminReducer";
import restaruantReducer from "./reducers/restaruantReducer";
export default combineReducers({
    loginReducer,
    addAdminReducer,
    restaruantReducer,
    form: formReducer
})