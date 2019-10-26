import {USER_ADDED, USER_ADDED_RESET} from "../actions/defaults";

export default(state ={
    isLoading: false,
    user_added: false
},action) => {
    switch (action.type) {
        case USER_ADDED:
            return{
                ...state,
                isLoading: true,
                user_added: true
            };
        case USER_ADDED_RESET:
            return {
                ...state,
                user_added: false
            };
        default:
            return state;

    }
}