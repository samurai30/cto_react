
import {LOGIN_USER_SUCCESS, LOGOUT_USER, USER_FETCH_ERROR} from "../actions/defaults";
import {api} from "../super_agent";


export const tokenMiddleWare = store => next => action =>{
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            window.localStorage.setItem('jwtToken',action.token);
            window.localStorage.setItem('user_id',action.id);
            api.setToken(action.token);
            break;
        case LOGOUT_USER:
            window.localStorage.removeItem('jwtToken');
            window.localStorage.removeItem('user_id');

            api.setToken(null);
            break;
        case USER_FETCH_ERROR:
            window.localStorage.removeItem('jwtToken');
            window.localStorage.removeItem('user_id');

            api.setToken(null);
            break;
        default:
    }
    next(action)
};