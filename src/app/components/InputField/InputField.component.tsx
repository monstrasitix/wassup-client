// Core
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';


export interface IInputProps {
    label?: string;
    name: string;
    [rest: string]: any;
};


const InputField: React.FC<IInputProps> = ({ name, label, ...rest }) =>  {
    const { errors, register } = useFormContext();

    const error: any = errors[name];

    return (
        <div className={`field ${error && 'error'}`}>
            {label && (
                <label htmlFor={name} className="field-label">{label}</label>
            )}
            
            <input ref={register} id={name} name={name} {...rest} className="field-input" />
    
            {error && (
                <span className="field-message">
                    {error.message}
                </span>
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