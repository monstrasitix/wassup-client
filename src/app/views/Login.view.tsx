// Core
import * as React from 'react';


// Containers
import LoginContainer from '../containers/Login.container';

export interface ILoginProps {};


export const Login: React.FC<ILoginProps> = () => (
    <div className="login">
        <LoginContainer />
    </div>
);


Login.propTypes = {};
Login.defaultProps = {};


export default Login;
