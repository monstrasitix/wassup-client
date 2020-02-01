// Core
import * as React from 'react';
import * as PropTypes from 'prop-types';
import c from 'classnames';


export interface IButtonProps
{
    primary?: boolean;
    secondary?: boolean;
    hollow?: boolean;
    pill?: boolean;
    wide?: boolean;
    tiny?: boolean;
    small?: boolean;
    medium?: boolean;
    large?: boolean;
    massive?: boolean;
    type?: 'button' | 'submit' | 'reset' | undefined;
    [rest: string]: any;
};


const Button: React.FC<IButtonProps> = ({
    type,
    primary,
    secondary,
    hollow,
    pill,
    wide,
    tiny,
    small,
    medium,
    large,
    massive,
    ...rest
}) => (
    <button
        {...rest}
        type={type}
        className={c('button', {
            primary,
            secondary,
            hollow,
            pill,
            wide,
            tiny,
            small,
            medium,
            large,
            massive,
        })}
    />
);


Button.propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    hollow: PropTypes.bool,
    pill: PropTypes.bool,
    wide: PropTypes.bool,
    tiny: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    massive: PropTypes.bool,
    type: PropTypes.oneOf([
        'button',
        'submit',
        'reset',
        undefined,
    ]),
};


Button.defaultProps = {
    primary: false,
    secondary: false,
    hollow: false,
    pill: false,
    wide: false,
    tiny: false,
    small: false,
    medium: false,
    large: false,
    massive: false,
    type: 'button',
};


export default Button;