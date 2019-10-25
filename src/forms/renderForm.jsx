import React from 'react'
import {FormGroup} from "react-bootstrap";
import classNames from 'classnames'


export const renderForm = ({input,type,placeholder,spanIcon,meta:{error}})=>{
    return(
    <FormGroup className="has-wrapper">
        <input {...input} type={type} placeholder={placeholder} required/>
    </FormGroup>)
};