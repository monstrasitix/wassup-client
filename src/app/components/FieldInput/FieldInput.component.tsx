// Core
import * as React from 'react';
import * as PropTypes from 'prop-types';


// Hooks
import { useFieldContext } from '../../hooks/field.hooks';


export interface IFieldInputProps {
    type?: 'text' | 'number' | 'date' | 'password';
    [rest: string]: any;
};


const FieldInput: React.FC<IFieldInputProps> = ({ type, ...rest }) => {
    const { name, register }: any = useFieldContext();

    return (
        <input
            {...rest}
            id={name}
            type={type}
            name={name}
            ref={register}
            className="field-input"
        />
    );
};


FieldInput.propTypes = {
    type: PropTypes.oneOf([
        'text',
        'number',
        'date',
        'password',
    ]),
};


FieldInput.defaultProps = {
    type: 'text',
};


export default FieldInput;