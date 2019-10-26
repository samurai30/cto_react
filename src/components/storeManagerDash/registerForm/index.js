import React from 'react'
import {Button} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import {Link} from "react-router-dom";
import {renderField} from "../../../forms/commonForm";
import {connect} from "react-redux";
import { fetchRestaurant} from "../../../actions/restaurantAction";
import {addAdminRequest} from "../../../actions/addAdminAction";


const mapStateToProps = state =>({
    ...state.addAdminReducer,
    ...state.restaruantReducer
});

const mapDispatchToProps = {
    fetchRestaurant
    ,addAdminRequest
};


 class RegisterForm extends React.Component{
    componentDidMount() {
        this.props.fetchRestaurant();
    }
    onBack(){
        this.props.history.push('/super-admin')
    }

     onSubmit(value){
        console.log(value);
        return this.props.addAdminRequest(value)
    }
    render() {
        const {handleSubmit,rest_data,error} = this.props;
        const roles = [
                {value:'RESTAURANT_ADMIN', id:'restaurant_admin'}
                ,{value:'STORE_ADMIN', id:'store_admin'}
                ,{value:'OUTLET_ADMIN', id:'outlet_admin'}];

        if (error){
            console.log(error)
        }
        return(
            <React.Fragment>
                <br/>
                <div className="d-flex justify-content-center">
                   <h4>Register Restaurant Admin</h4>
                </div>

                {rest_data && (rest_data.length !== 0)
                    ? <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field name="name"  type="text" placeholder="Full Name"  component={renderField}/>
                        <Field name="address"  type="text" placeholder="Address"  component={renderField}/>
                        <Field name="contact"  type="text" placeholder="Contact"  component={renderField}/>
                        <Field name="email"  type="text" placeholder="Email"  component={renderField}/>
                        <Field name="password"  type="password" placeholder="Password"  component={renderField}/>
                        <Field name="repeat_password"  type="password" placeholder="Repeat Password"  component={renderField}/>
                        <Field name="role" type="select" label="SELECT ROLES" selectItems={roles} component={renderField}/>
                        <Field name="restaurant_id" type="select" label="SELECT RESTAURANT"  selectItems={(rest_data && rest_data)} component={renderField}/>
                        <Button type="submit" className="btn btn-secondary">Submit</Button>
                    </form>
                :<div>
                        <h3>Sorry no restaurants found</h3>
                        <Link to='/register-restaurant'>ADD RESTAURANT</Link>
                    </div>}
                    <div className="d-flex justify-content-center">
                        <Button onClick={() => this.onBack()}>back</Button>
                    </div>

            </React.Fragment>)
    }
}

export default reduxForm({form:'register_user'})(connect(mapStateToProps,mapDispatchToProps)(RegisterForm));