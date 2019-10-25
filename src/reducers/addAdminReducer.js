import {LOGIN_REQUEST, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS} from "../actions/defaults";

export default(state ={
    isLoading: false
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
                isLoading: false
            };
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                isLoading: false
            };

        default:
            return state;

    }
}