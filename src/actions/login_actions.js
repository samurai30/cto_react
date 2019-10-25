import {api} from "../super_agent";
import {SubmissionError} from 'redux-form'
import {LOGIN_REQUEST, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER, SET_USER_ROLE} from "./defaults";
import {parseApiErrors} from "../forms/apiUtil";


export const userLoginAttempt = (email,password) =>{

    return(dispatch) => {
        dispatch({type:LOGIN_REQUEST});
        return api.post('/user/login',{email,password},false).then(
            response => {
                dispatch({
                    type:LOGIN_USER_SUCCESS,
                    token:response.body.token,
                    id:response.body.id})
            })
            .catch(error => {
                console.log(error);
                dispatch({type:LOGIN_USER_FAILURE});
                        if (error.message === 'Unauthorized') {
                                throw new SubmissionError({_error: "Username or Password Invalid"});
                                 }
                            });
    }
};

export const checkUserRole = (user) =>{
    return(dispatch) =>{
        return api.get(`/user/role/${user}`,true)
            .then(response =>{
                dispatch({type:SET_USER_ROLE,role:response.body.user_role})
            })
            .catch(error=>{
                console.log(error.response.body);
                if (error.response.body.message === 'Invalid Fields'){
                    throw new SubmissionError(parseApiErrors(error.response.body));
                }
            })
    }
};

export const logoutUser = () =>{
  return(dispatch) =>{
      dispatch({type:LOGOUT_USER});
      window.location.reload();
  }
};