import {api} from "../super_agent";
import {SubmissionError} from "redux-form";
import {parseApiErrors} from "../forms/apiUtil";


export const addAdminRequest = (values) =>{

    return(dispatch) =>{

        return api.post('/user/add_users',values,true)
            .then(response =>{
                console.log(response.body)
            })
            .catch(error =>{
                console.log(error.response);
                if (error.response.body.message === 'Invalid Fields'){
                    throw new SubmissionError(parseApiErrors(error.response.body));
                }else {
                    throw new SubmissionError(error.response.body.message);
                }


            })

    }
};