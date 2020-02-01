// Core
import * as React from 'react';


// Containers
import LoginContainer from '../containers/Login.container';

export interface ILoginProps {};


export const Login: React.FC<ILoginProps> = () => (
    <div>
        <div className="login">
            <LoginContainer />
        </div>
    </div>
);


Login.propTypes = {};
Login.defaultProps = {};


export default Login;
