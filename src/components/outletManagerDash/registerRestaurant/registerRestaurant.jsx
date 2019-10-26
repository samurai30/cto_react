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
class RegisterRestaurantForm extends React.Component{
    componentDidMount() {

    }
    onBack(){
        this.props.history.push('/super-admin')
    }
    onSubmit(value){
        return this.props.createRestaurant(value);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.added){
            alert('Restaurant Added')
        }
    }

    render() {
        const {handleSubmit,added} = this.props;

        return(
            <React.Fragment>
                <br/>
                <div className="d-flex justify-content-center">
                    <h4>Register Restaurants</h4>
                </div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name="name"  type="text" placeholder="Restaurant Name"  component={renderField}/>
                    <Field name="owner_name"  type="text" placeholder="Owner Name"  component={renderField}/>
                    <Field name="owner_contact"  type="text" placeholder="Contact Number"  component={renderField}/>
                    <Button type="submit" className="btn btn-secondary">Submit</Button>
                </form>
                <div className="d-flex justify-content-center">
                    <Button onClick={() => this.onBack()}>back</Button>
                </div>
            </React.Fragment>)
    }
}

export default reduxForm({form:'register_restaurant'})(connect(mapStateToProps,mapDispatchToProps)(RegisterRestaurantForm));