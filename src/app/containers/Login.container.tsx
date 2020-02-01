// Core
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';


// Forms
import LoginForm from '../forms/Login.form';


export interface ILoginContainerProps {};


const LoginContainer: React.FC<ILoginContainerProps> = () => {
    const history = useHistory();


    const handleSubmit = React.useCallback(
        () => history.push('/landing'),
        [],
    );

    return (
        <LoginForm onSubmit={handleSubmit} />
    );
};


LoginContainer.propTypes = {};
LoginContainer.defaultProps = {};


export default LoginContainer;