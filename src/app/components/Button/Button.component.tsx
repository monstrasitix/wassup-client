// Core
import * as React from 'react';


export interface IButtonProps {
    [rest: string]: any;
};


const Button: React.FC<IButtonProps> = props => (
    <button {...props} />
);


Button.propTypes = {};
Button.defaultProps = {};


export default Button;