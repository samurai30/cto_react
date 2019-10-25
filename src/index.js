import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {createStore,applyMiddleware,compose} from 'redux'
import createHistory from 'history/createBrowserHistory'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import {Route, Switch} from 'react-router-dom'
import reducer from './reducer'
import {tokenMiddleWare} from './middleware/tokenMiddleware'
import 'bootstrap/dist/css/bootstrap.min.css';
import thunkMiddleware  from 'redux-thunk';
import LoginForm from "./components/login_component/LoginForm";
import {notificationMiddleware} from "./middleware/Notification";

const store = createStore(
    reducer,
    compose(applyMiddleware(thunkMiddleware,tokenMiddleWare,notificationMiddleware))
);

const history = createHistory();


ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/login" component={LoginForm}/>
                <Route path="/" component={App}/>
            </Switch>
        </ConnectedRouter>
    </Provider>
        ),
document.getElementById('root'));