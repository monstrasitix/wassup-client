// Core
import * as React from 'react';


export const FieldContext = React.createContext(null);


export const useFieldContext = () => (
    React.useContext(FieldContext)
);
