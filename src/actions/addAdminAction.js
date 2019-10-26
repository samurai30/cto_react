import {api} from "../super_agent";
import {SubmissionError} from "redux-form";
import {parseApiErrors} from "../forms/apiUtil";
import {RESET_ADDED, USER_ADDED, USER_ADDED_RESET} from "./defaults";


export const addAdminRequest = (values) =>{

    return(dispatch) =>{

        return api.post('/user/add_users',values,true)
            .then(response =>{
                dispatch({type:USER_ADDED});
                setTimeout(()=>{dispatch({type: USER_ADDED_RESET})},5);
            })
            .catch(error =>{
                console.log(error.response);
                if (error.response.body.message === 'Invalid Fields'){
                    throw new SubmissionError(parseApiErrors(error.response.body));
                }
                if (error.response.body.status === 401)
                {
                    throw new SubmissionError({_error:error.response.body.message});
                }
                throw new SubmissionError({_error:error.response.body.message});





            })

    }
};