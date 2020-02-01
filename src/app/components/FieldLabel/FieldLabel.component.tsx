// Core
import * as React from 'react';
import * as PropTypes from 'prop-types';


// Hooks
import { useFieldContext } from '../../hooks/field.hooks';


export interface IFieldLabelProps {
    children?: any;
};


const FieldLabel: React.FC<IFieldLabelProps> = ({ children }) => {
    const { name }: any = useFieldContext();

    return (
        <label htmlFor={name} className="field-label">
            {children}
        </label>
    );
};


FieldLabel.propTypes = {
    children: PropTypes.any,
};


FieldLabel.defaultProps = {
    children: null,
};


export default FieldLabel;