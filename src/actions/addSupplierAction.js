import {api} from "../super_agent";


export const addSupplier = () =>{
    return(dispatch) =>{

        return api.post()
            .then(response =>{

            })
            .catch(error =>{

            })
    }
};

