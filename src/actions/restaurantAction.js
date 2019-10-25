import {api} from "../super_agent";
import {SubmissionError} from "redux-form";
import {parseApiErrors} from "../forms/apiUtil";
import {RESET_ADDED, REST_ADDED, REST_FETCHED} from "./defaults";

export const createRestaurant = (value) =>{

    return(dispatch) =>{
        return api.post('/restaurant',value,true)
            .then(response =>{
               dispatch({type:REST_ADDED});
               setTimeout(()=>{dispatch({type: RESET_ADDED})},5)
            })
            .catch(error =>{

                if (error.response.body.message === 'Invalid Fields'){
                    throw new SubmissionError(parseApiErrors(error.response.body));
                }
                else {
                    throw new SubmissionError(error.response.body.message);
                }
            })
    }
};

export const fetchRestaurant = () =>{

    return(dispatch) =>{
        return api.get('/restaurant')
            .then(response =>{
                dispatch({type:REST_FETCHED,rest_data:response.body})
            })
            .catch(error=>{
                console.log(error)
            })
    }
};