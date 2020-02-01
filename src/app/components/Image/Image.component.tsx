// Core
import * as React from 'react';
import * as PropTypes from 'prop-types';


export interface IImageProps {
    source?: string;
    fallback?: string;
    [rest: string]: any;
};


const Image: React.FC<IImageProps> = ({ source, fallback, ...rest }) => {
    const [src, setSource] = React.useState(source);


    const handleError = React.useCallback(
        () => setSource(fallback),
        [src],
    );

    return (
        <img
            {...rest}
            src={src}
            onError={handleError}
        />
    );
};


Image.propTypes = {
    source: PropTypes.string,
    fallback: PropTypes.string,
};


Image.defaultProps = {
    source: '',
    fallback: '',
};


export default Image;