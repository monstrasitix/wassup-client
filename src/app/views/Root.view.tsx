// Core
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Store } from 'redux';
import { History } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';


// Containers
import AppContainer from '../containers/App.container';


export interface IRootProps
{
    store: Store;
    history: History;
    children: any;
};


const Root: React.FC<IRootProps> = ({ store, history, children }) => (
    <Provider store={store}>
        <Router history={history}>
            <AppContainer children={children} />
        </Router>
    </Provider>
);


Root.propTypes = {
    store: PropTypes.any.isRequired,
    history: PropTypes.any.isRequired,
    children: PropTypes.any.isRequired,
};


Root.defaultProps = {};


export default Root;