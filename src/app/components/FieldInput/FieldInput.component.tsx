// Core
import * as React from 'react';


// Hooks
import { useFieldContext } from '../../hooks/field.hooks';

export interface IFieldInputProps {
    [props: string]: any;
};


const FieldInput: React.FC<IFieldInputProps> = props => {
    const { name, register }: any = useFieldContext();

    return (
        <input
            {...props}
            id={name}
            name={name}
            ref={register}
            className="field-input"
        />
    );
};


FieldInput.propTypes = {};
FieldInput.defaultProps = {};


export default FieldInput;