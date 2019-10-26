import {CAT_FETCHED, RAW_MAT_FETCHED, UNIT_FETCHED, UNIT_FETCHED_ERROR} from "../actions/defaults";


export default (state= {
        units:null,
        cat: null,
    raw_materials:null,
    __unit_error: null

},action)=>{

    switch (action.type) {
        case UNIT_FETCHED:
            return{
                ...state,
                units: action.unit
            };
        case UNIT_FETCHED_ERROR:
            return {
                ...state,
                units: null,
                __unit_error:action.error
            };
        case RAW_MAT_FETCHED:
            return {
                ...state,
                raw_materials: action.raw_mat
            };
        case CAT_FETCHED:
            return {
                ...state,
                cat: action.category
            };
        default:
            return state;
    }
}