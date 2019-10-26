import {USER_FETCH_ERROR, USER_FETCHED} from "../actions/defaults";


export default (state= {
    user_details:null,
    __error:null
},action)=>{

    switch (action.type) {
        case USER_FETCHED:
            return{
                ...state,
                user_details: action.user
            };
        case USER_FETCH_ERROR:
            return {
                ...state,
                __error: action.error,
                user_details: null
            };
        default:
            return state;
    }
}