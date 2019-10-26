import {api} from "../super_agent";
import {USER_FETCH_ERROR, USER_FETCHED} from "./defaults";

export const fetchUser = (id) =>{
    return(dispatch) =>{
        return api.get(`/user/self/${id}`,true).then(response =>{

            dispatch({type:USER_FETCHED,user:response.body})

        }).catch(error =>{

            dispatch({type:USER_FETCH_ERROR,error:error.response.body.message})

        })
    }
};