// Core
import * as React from 'react';


// Hooks
import { useFieldContext } from '../../hooks/field.hooks';


export interface IFieldErrorProps {
    [props: string]: any;
};


const FieldError: React.FC<IFieldErrorProps> = props => {
    const { error }: any = useFieldContext();

    return error ? (
        <span className="field-message">
            {error.message}
        </span>
    ) : null;
};


FieldError.propTypes = {};
FieldError.defaultProps = {};


export default FieldError;