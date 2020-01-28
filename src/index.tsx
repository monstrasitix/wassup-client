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
import Landing from './app/views/Landing/Landing.view';


const bootstrap = () => {
    ReactDOM.render(
        <Root store={store} history={history}>
            <Switch>
                <Route path="/" component={Landing} />
            </Switch>
        </Root>,
        document.getElementById('app'),
    );
};


document.addEventListener('DOMContentLoaded', bootstrap);