import {SUPPLIER_ADDED} from "../actions/defaults";


export default (state= {

},action)=>{

    switch (action.type) {
        case SUPPLIER_ADDED:
            return{
                ...state
            };
        default:
            return state;
    }
}