// Core
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useField } from 'formik';


export interface IInputProps {
    label?: string;
    name: string;
    [rest: string]: any;
};


export const InputField: React.FC<IInputProps> = ({ name, label, errors, ...rest }) =>  (
    <div className={`field ${errors[name] && 'error'}`}>
        {label && (
            <label htmlFor={name} className="field-label">{label}</label>
        )}
        
        <input id={name} name={name} {...rest} className="field-input" />

        {errors[name] && (
            <span className="field-message">
                {errors[name].message}
            </span>
        )}
    </div>
);


InputField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
};


InputField.defaultProps = {
    label: '',
};


export default InputField;