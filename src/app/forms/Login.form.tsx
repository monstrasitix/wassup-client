// Core
import * as Yup from 'yup';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useForm, FormContext  } from 'react-hook-form';


// Components
import Button from '../components/Button/Button.component';
import InputField from '../components/InputField/InputField.component';


export interface ILoginFormProps
{
    username?: string;
    password?: string;
    onSubmit: any;
};


export const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
});


export const Login: React.FC<ILoginFormProps> = ({ username, password, onSubmit }) => {
    const form = useForm({
        validationSchema,
        defaultValues: {
            username,
            password,
        },
    });

    return (
        <FormContext {...form}>
            <form className="form" onSubmit={form.handleSubmit(onSubmit)}>
                <InputField
                    type="text"
                    label="Username"
                    name="username"
                    placeholder="Username"
                />

                <InputField
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="Password"
                />
                
                <div className="field">
                    <Button primary wide type="submit">Login</Button>
                </div>
            </form>
        </FormContext>
    );
};


Login.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
};


Login.defaultProps = {
    username: '',
    password: '',
};


export default Login;
