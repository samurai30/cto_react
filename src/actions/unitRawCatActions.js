import {api} from "../super_agent";
import {CAT_FETCHED, RAW_MAT_FETCHED, UNIT_FETCHED} from "./defaults";


export const fetchUnits = () =>{
    return(dispatch) =>{
        return api.get('/unit',true)
            .then(response =>{
                dispatch({type:UNIT_FETCHED,unit:response.body})
            })
            .catch(error =>{

                dispatch({type:UNIT_FETCHED,error:error.response.body.message})
            })
    }
};

export const fetchCategory = () =>{
    return(dispatch) =>{

        return api.get(`/category`,true)
            .then(response =>{
                dispatch({type:RAW_MAT_FETCHED,raw_mat:response.body})
            })
            .catch(error =>{
                console.log(error.response.body.message)
                // dispatch({type:UNIT_FETCHED,error:error.response.body.message})
            })
    }
};


export const fetchRawMaterials = (rest_id) =>{
    return(dispatch) =>{

        return api.get(`/raw_material/all/${rest_id}`,true)
            .then(response =>{
                dispatch({type:CAT_FETCHED,category:response.body})
            })
            .catch(error =>{
                console.log(error.response.body.message)
                // dispatch({type:UNIT_FETCHED,error:error.response.body.message})
            })
    }
};

