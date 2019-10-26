import React from 'react'
import {Route, Switch, withRouter,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {checkUserRole, logoutUser} from "../actions/login_actions";
import './App.css'
import HomePageSuperAdmin from "./super_admin_component/HomePageSuperAdmin";
import RegisterRestaurantForm from "./super_admin_component/registerRestaurant/registerRestaurant";
import HomePageRestAdmin from "./rest_admin_component/HomePageRestAdmin";
import HomePageOutletManager from "./outletManagerDash/HomePageOutletManager";
import HomePageStoreManager from "./storeManagerDash/HomePageStoreManager";
import RegisterForm from './super_admin_component/registerForm'
import RegisterStoreManager from './rest_admin_component/registerStoreManager/registerStoreManager'
import registerSupplier from "./rest_admin_component/registerSupplier/registerSupplier";
import registerOutlet from "./rest_admin_component/registerOutlets/registerOutlet";
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
            console.log(this.props.role);
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
                   <Route path='/restaurant-admin' component={HomePageRestAdmin}/>
                   <Route path='/store-manager' component={HomePageStoreManager}/>
                   <Route path='/outlet-manager' component={HomePageOutletManager}/>
                   /*super*/
                   <Route path="/register-user" component={RegisterForm}/>
                   <Route path="/register-restaurant" component={RegisterRestaurantForm}/>

                   /*rest*/
                   <Route path="/register-store_manager" component={RegisterStoreManager}/>
                   <Route path="/register-supplier" component={registerSupplier}/>
                   <Route path="/register-outlet" component={registerOutlet}/>
               </Switch>
            </React.Fragment>)
  }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));