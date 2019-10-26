import React from 'react'
import {Button} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import {renderField} from "../../../forms/commonForm";
import {connect} from 'react-redux'
import {createRestaurant} from "../../../actions/restaurantAction";

const mapDispatchToProps= {
    createRestaurant
};
const mapStateToProps = state =>({
    ...state.restaruantReducer
});
class RegisterStoreManager extends React.Component{
    componentDidMount() {

    }
    onBack(){
        this.props.history.push('/restaurant-admin')
    }
    onSubmit(value){
        return this.props.createRestaurant(value);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.added){
            alert('Store Manager Added');
            this.props.history.push('/');
        }
    }

    render() {
        const {handleSubmit} = this.props;

        return(
            <React.Fragment>
                <br/>
                <div className="d-flex justify-content-center">
                    <h4>Register Store Manager</h4>
                </div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name="address"  type="text" placeholder="Restaurant Name"  component={renderField}/>
                    <Field name="contact"  type="text" placeholder="Owner Name"  component={renderField}/>
                    <Field name="manager_id"  type="text" placeholder="Contact Number"  component={renderField}/>
                    <Button type="submit" className="btn btn-secondary">Submit</Button>
                </form>
                <div className="d-flex justify-content-center">
                    <Button onClick={() => this.onBack()}>back</Button>
                </div>
            </React.Fragment>)
    }
}

export default reduxForm({form:'register_restaurant'})(connect(mapStateToProps,mapDispatchToProps)(RegisterStoreManager));