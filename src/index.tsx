// Styles
import './styles/views/main';


// Core
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';


// Dependencies
import store from './app/store';
import history from './app/history';


// Views
import Root from './app/views/Root/Root.view';
import Login from './app/views/Login/Login.view';
import Landing from './app/views/Landing/Landing.view';


/**
 * Application's bootstrap.
 */
const bootstrap = (): void => {
    ReactDOM.render(
        <Root store={store} history={history}>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/landing" component={Landing} />
            </Switch>
        </Root>,
        document.getElementById('app'),
    );
};


document.addEventListener('DOMContentLoaded', bootstrap);