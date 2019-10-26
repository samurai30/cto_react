import React from 'react'
import {reduxForm, Field} from "redux-form";
import {connect} from 'react-redux'
import {addAdminRequest} from "../../actions/addAdminAction";
import {logoutUser} from "../../actions/login_actions";
import {Route, Switch, withRouter} from "react-router";
import ChartDataSuperAdmin from "./chartComponent/chartsAdminSuper";
import {fetchUser} from "../../actions/uerDetails";
import {LOGIN_USER_FAILURE} from "../../actions/defaults";


const mapDispatchToProps= {
    addAdminRequest,
    logoutUser,
    fetchUser
};
const mapStateToProps = state =>({
    ...state.addAdminReducer,
    ...state.userDetailsReducer
});

class HomePageRestAdmin extends React.Component{
    jwtToken = window.localStorage.getItem('jwtToken');
    user_id = window.localStorage.getItem('user_id');


    componentDidMount() {
        if (!this.jwtToken){
            this.props.history.push('/login')
        }
        this.props.fetchUser(this.user_id)
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

    onRegister(value){
        this.props.history.push(value)
    }


    charData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };


    render(){

        const {__error} = this.props;
        if (__error){
            alert(__error);
            this.props.dispatch({type:LOGIN_USER_FAILURE});
            window.location.reload()
        }


        return(
            <div>
                <div className="jumbotron bg-primary">
                    <div className="d-flex justify-content-center">
                        <h3 className="text-white font-weight-bold">RESTAURANT ADMIN DASHBOARD</h3>
                    </div>
                </div>

                <ChartDataSuperAdmin dataChart={this.charData}/>
                <div className="center button" onClick={() => this.onButton()}>&times;</div>
                <div className="first center popout"><img src="svg/plus.svg" onClick={() => this.onRegister('/register-store_manager')}/></div>
                <div className="second center popout"><img src="svg/shop.svg" onClick={() => this.onRegister('/register-supplier')} /></div>
                <div className="third center popout"><img src="svg/seo.svg" onClick={() => this.onRegister('/register-outlet')} /></div>
                <div className="fourth center popout"><img src="svg/manager.svg" onClick={() => this.onRegister('/register-user')} /></div>
                <div className="fifth center popout"><img src="svg/logout.svg" onClick={() => this.onLogout()}/></div>

            </div>)
    }

}

export default reduxForm({form:'addAdmin'})(connect(mapStateToProps,mapDispatchToProps)(HomePageRestAdmin));

