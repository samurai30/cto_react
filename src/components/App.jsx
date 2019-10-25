import React from 'react'
import {Route, Switch, withRouter,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {checkUserRole, logoutUser} from "../actions/login_actions";
import './App.css'
import RestHomePage from "./rest_admin_component/RestHomePage";
import HomePageSuperAdmin from "./super_admin_component/HomePageSuperAdmin";
import RegisterForm from "./super_admin_component/registerForm";
import RegisterRestaurantForm from "./super_admin_component/registerRestaurant/registerRestaurant";
import {Bar, Doughnut} from "react-chartjs-2";


const mapStateToProps = state=>(
    {...state.loginReducer}
);

const mapDispatchToProps = {
    logoutUser,
    checkUserRole
};
class App extends React.Component{
    jwtToken = window.localStorage.getItem('jwtToken');
    user_id = window.localStorage.getItem('user_id');

    componentDidMount() {

        if (!this.jwtToken){
            this.props.history.push('/login')
        }
        if(!this.user_id){
            this.props.history.push('/login')
        }
        this.props.checkUserRole(this.user_id);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.role !== this.props.role){
            if (this.props.role === 'super_admin') {
                this.props.history.replace('/super-admin')
            }else if(this.props.role === 'restaurant_admin'){
                this.props.history.push('/restaurant-admin')
            }else if(this.props.role === 'store_manager'){
                this.props.history.push('/store-manager')
            }else if(this.props.role === 'outlet_manager'){
                this.props.history.push('/outlet-manager')
            }
        }
    }



    render(){

        return(
            <React.Fragment>


               <Switch>
                   <Route path='/super-admin'  component={HomePageSuperAdmin}/>
                   <Route path='/restaurant-admin' component={RestHomePage}/>
                   <Route path='/store-manager' component={RestHomePage}/>
                   <Route path='/outlet-manager' component={RestHomePage}/>
                   <Route path="/register-user" component={RegisterForm}/>
                   <Route path="/register-restaurant" component={RegisterRestaurantForm}/>
               </Switch>


            </React.Fragment>)
  }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));