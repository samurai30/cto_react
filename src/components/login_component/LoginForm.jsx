import React from 'react'
import './login.css'
import {reduxForm, Field} from "redux-form";
import {connect} from 'react-redux'
import {userLoginAttempt} from "../../actions/login_actions";
import {renderForm} from "../../forms/renderForm";

const mapDispatchToProps= {
    userLoginAttempt
};
const mapStateToProps = state =>({
    ...state.loginReducer
});
class LoginForm extends React.Component{
    jwtToken = window.localStorage.getItem('jwtToken');
    user_id = window.localStorage.getItem('user_id');
    onSubmit(value){
        return this.props.userLoginAttempt(value.email,value.password)
    }
    componentDidMount() {
        if (this.jwtToken && this.user_id){
            this.props.history.push('/')
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
       if (prevProps.token !== this.props.token){
           this.props.history.push('/')
       }
    }

    render(){
        const {handleSubmit} = this.props;
        console.log(this.props.isLoading);
        let loginClass = 'login';
        return(
        <React.Fragment>
           <div className={loginClass}>
                <h1>Welcome</h1>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name="email" type="text" placeholder="email" component={renderForm}/>
                    <Field name="password" type="password" placeholder="Password" component={renderForm}/>
                    <button type="submit" className="btn btn-primary btn-block btn-large">Let me in.</button>
                </form>
            </div>
        </React.Fragment>)
    }

}

export default reduxForm({form:'loginForm'})(connect(mapStateToProps,mapDispatchToProps)(LoginForm));
