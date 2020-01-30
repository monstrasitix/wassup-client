// Core
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useField } from 'formik';


export interface IInputProps {
    label?: string;
    name: string;
    [rest: string]: any;
};


export const InputField: React.FC<IInputProps> = ({ type, label, name, ...rest }) => {
    const [field, meta] = useField(name);

    const hasError = (meta.touched && meta.error);


    return (
        <div className={`field ${hasError && 'error'}`}>
            {label && (
                <label htmlFor={field.name} className="field-label">{label}</label>
            )}
            
            <input {...field} id={field.name} {...rest} className="field-input" />
    
            {hasError && (
                <span className="field-message">{meta.error}</span>
            )}
        </div>
    );
};


InputField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
};


InputField.defaultProps = {
    label: '',
};


export default InputField;