// Core
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useField } from 'formik';


export interface IInputProps {
    label?: string;
    [rest: string]: any;
};


const InputField: React.FC<IInputProps> = ({ label, ...rest }) => {
    const [field, meta] = useField(rest);

    const hasError = (meta.touched && meta.error);


    return (
        <div className={`field ${hasError && 'error'}`}>
            {label && (
                <label htmlFor={field.name} className="field-label">{label}</label>
            )}
            
            <input {...field} {...rest} id={field.name} className="field-input" />
    
            {hasError && (
                <span className="field-message">{meta.error}</span>
            )}
        </div>
    );
};


InputField.propTypes = {
    label: PropTypes.string,
};


InputField.defaultProps = {
    label: '',
};


export default InputField;