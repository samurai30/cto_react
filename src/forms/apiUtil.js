export const parseApiErrors = (error)=>{

    return error.body.reduce(
        (parsedErrors,violation)=>{
            parsedErrors[violation['path']] = violation['error'];
            return parsedErrors;
        },
        {}
    );
};