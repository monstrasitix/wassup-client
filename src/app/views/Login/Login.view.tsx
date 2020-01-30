// Core
import * as React from 'react';


// Containers
import LoginContainer from '../../containers/Login/Login.container';

export interface ILoginProps {};


export const Login: React.FC<ILoginProps> = () => (
    <div>
        <style children={`
            .form {
                max-width: 400px;
                width: 90%;
                margin: 5rem auto;
            }
        `} />
        <LoginContainer />
    </div>
);


Login.propTypes = {};
Login.defaultProps = {};


export default Login;
