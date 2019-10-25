import {LOGIN_REQUEST, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, SET_USER_ROLE} from "../actions/defaults";
const jwtToken = window.localStorage.getItem('jwtToken');
const user = window.localStorage.getItem('user_id');

export default(state ={
    token:  (jwtToken && user)? jwtToken : null,
    user_id : (user && jwtToken) ? user : null,
    isLoading: false,
    role: null
},action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return{
                ...state,
                isLoading: true
            };
        case LOGIN_USER_SUCCESS:
            return{
                ...state,
                isLoading: false,
                token: (jwtToken && user)? jwtToken : action.token,
                user_id:  (user && jwtToken) ? user : action.id
            };
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                isLoading: false
            };
        case SET_USER_ROLE:
            return {
                ...state,
                role: action.role
            };
        default:
            return state;

    }
}