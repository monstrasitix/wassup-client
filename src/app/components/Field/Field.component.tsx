// Core
import c from 'classnames';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';


// Hooks
import { FieldContext } from '../../hooks/field.hooks';


export interface IFieldProps {
    name: string;
    children?: any;
};


const Field: React.FC<IFieldProps> = ({ name, children }) => {
    const { errors, register } = useFormContext();

    const error = errors[name];

    return (
        <FieldContext.Provider value={{ name, error, register } as any}>
            <div className={c('field', { error })}>
                {children}
            </div>
        </FieldContext.Provider>
    );
};


Field.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.any,
};


Field.defaultProps = {
    children: null,
};


export default Field;