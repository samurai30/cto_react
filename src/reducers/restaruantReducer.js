import {ADD_RESTAURANT_REQUEST, RESET_ADDED, REST_ADDED, REST_FETCHED} from "../actions/defaults";



export default(state ={
    isLoading: false,
    added: false,
    rest_data:null
},action) => {
    switch (action.type) {
        case ADD_RESTAURANT_REQUEST:
            return{
                ...state,
                isLoading: true
            };
        case REST_ADDED:
            return {
                ...state,
                isLoading: false,
                added: true
            };
        case RESET_ADDED:
            return {
              ...state,
              added: false
            };
        case REST_FETCHED:
           return {
               ...state,
               rest_data: action.rest_data.map(val => ({value:val.name,id:val.id}))
           };
        default:
            return state;

    }
}