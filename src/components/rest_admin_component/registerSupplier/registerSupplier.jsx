import React from 'react'
import {Button} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import {Link} from "react-router-dom";
import {renderField} from "../../../forms/commonForm";
import {connect} from "react-redux";
import {fetchCategory, fetchRawMaterials, fetchUnits} from "../../../actions/unitRawCatActions";


const mapStateToProps = state =>({
    ...state.unitRawCatReducer,
    ...state.userDetailsReducer
});

const mapDispatchToProps = {
    fetchUnits,
    fetchRawMaterials,
    fetchCategory
};


 class registerSupplier extends React.Component{
    componentDidMount() {
        if (this.props.user_details){
            this.props.fetchUnits();
            this.props.fetchRawMaterials(this.props.user_details.restaurant);
            this.props.fetchCategory();
        }
    }
    onBack(){
        this.props.history.push('/restaurant-admin')
    }

     onSubmit(value){
        console.log(value);
        return this.props.addAdminRequest(value)
    }
    render() {

        const {handleSubmit,rest_data,error,user_details,cat,raw_materials,unit} = this.props;

        const roles = [
                {value:'RESTAURANT_ADMIN', id:'restaurant_admin'}
                ,{value:'STORE_ADMIN', id:'store_admin'}
                ,{value:'OUTLET_ADMIN', id:'outlet_admin'}];

        if(raw_materials){
            console.log(raw_materials)
        }
        return(
            <React.Fragment>
                <br/>
                <div className="d-flex justify-content-center">
                   <h4>Register Supplier</h4>
                </div>
                {}
                    <div className="d-flex justify-content-center">
                        <Button onClick={() => this.onBack()}>back</Button>
                    </div>

            </React.Fragment>)
    }
}

export default reduxForm({form:'register_user'})(connect(mapStateToProps,mapDispatchToProps)(registerSupplier));