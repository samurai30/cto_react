import React from 'react'
import {reduxForm, Field} from "redux-form";
import {connect} from 'react-redux'
import {renderForm} from "../../forms/renderForm";
import {addAdminRequest} from "../../actions/addAdminAction";
import {logoutUser} from "../../actions/login_actions";

const mapDispatchToProps= {
    addAdminRequest,
    logoutUser
};
const mapStateToProps = state =>({
    ...state.addAdminReducer
});
class RestHomePage extends React.Component{
    jwtToken = window.localStorage.getItem('jwtToken');

    componentDidMount() {
        if (!this.jwtToken){
            this.props.history.push('/login')
        }
    }

    onButton(){
        document.getElementsByClassName("button")[0].classList.toggle("spin");
    }

    onSubmit(value){
        return this.props.addAdminRequest(value)
    }

    onLogout(){
        return this.props.logoutUser();
    }

    render(){
        const {handleSubmit} = this.props;

        return(
            <React.Fragment>
                <div className="center button" onClick={() => this.onButton()}>&times;</div>
                <div className="first center popout"><img src="svg/plus.svg"/></div>
                <div className="second center popout"><img src="images/phonebook.svg"/></div>
                <div className="third center popout"><img src="images/calendar.svg"/></div>
                <div className="fourth center popout"><img src="images/bell.svg"/></div>
                <div className="fifth center popout"><img src="svg/logout.svg" onClick={() => this.onLogout()}/></div>

            </React.Fragment>)
    }

}

export default reduxForm({form:'addAdmin'})(connect(mapStateToProps,mapDispatchToProps)(RestHomePage));
