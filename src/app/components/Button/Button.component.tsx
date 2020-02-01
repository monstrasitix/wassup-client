// Core
import * as React from 'react';
import * as PropTypes from 'prop-types';
import c from 'classnames';
import * as _ from 'lodash';


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


export const classNames = [
    'primary',
    'secondary',
    'hollow',
    'pill',
    'wide',
    'tiny',
    'small',
    'medium',
    'large',
    'massive',
];


export const setDefault = (types, value) => types.reduce((acc, name) => ({
    ...acc, [name]: value,
}), {});


const Button: React.FC<IButtonProps> = ({ type, ...rest }) => (
    <button
        {..._.omit(rest, classNames)}
        type={type}
        className={c('button', _.pick(rest, classNames))}
    />
);


Button.propTypes = {
    ...setDefault(classNames, PropTypes.bool),
    type: PropTypes.oneOf([
        'button',
        'submit',
        'reset',
        undefined,
    ]),
};


Button.defaultProps = {
    ...setDefault(classNames, false),
    type: 'button',
};


export default Button;