// Core
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';


// Actions
import * as AppAction from '../../actions/app.action';


export interface IAppProps {
    children: any;
};


const App: React.FC<IAppProps> = ({ children }) => {
    const dispatch = useDispatch();

    React.useEffect(
        () => {
            dispatch(AppAction.initialize())
        },
    );

    return children;
};


App.propTypes = {
    children: PropTypes.any.isRequired,
};


App.defaultProps = {};


export default App;