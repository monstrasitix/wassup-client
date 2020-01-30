// Core
import * as Yup from 'yup';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';


// Components
import InputField from '../../components/InputField/InputField.component';


export interface ILoginFormProps
{
    useranme?: string;
    password?: string;
    onSubmit?: Function;
    onReset?: Function;
};


export const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
});


export const Login: React.FC<ILoginFormProps> = ({ username, password, onSubmit, onReset }) => (
    <Formik
        onReset={onReset}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={{
            username,
            password,
        }}
    >
        {({ isValid }) => (
            <Form className="form">
                <InputField
                    type="text"
                    name="username"
                    placeholder="Username"
                />

                <InputField
                    type="password"
                    name="password"
                    placeholder="Password"
                />

                <div className="field">
                    <button disabled={!isValid} type="submit" className="button primary wide">Login</button>
                </div>
            </Form>
        )}
    </Formik>
);


Login.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    onSubmit: PropTypes.func,
    onReset: PropTypes.func,
};


Login.defaultProps = {
    username: '',
    password: '',
    onSubmit: () => { },
    onReset: () => { },
};


export default Login;
