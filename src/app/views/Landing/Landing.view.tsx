// Core
import * as React from 'react';
import c from 'classnames';


// Components
import Button from '../../components/Button/Button.component';

export interface ILandingProps {};


const Landing: React.FC<ILandingProps> = () => {
    const [toggled, setToggle] = React.useState(true);

    const handleToggle = React.useCallback(
        () => setToggle(old => !old),
        [toggled],
    );
    
    return (
        <div className="landing">
            <div className={c('landing-column sidebar', { pushed: toggled })}>
                One
            </div>

            <div className={c('landing-column main', { pushed: toggled })}>
                <nav>
                    <Button primary onClick={handleToggle}>
                        <i className="fas fa-bars" />
                    </Button>
                </nav>
            </div>
        </div>
    );
};


Landing.propTypes = {};
Landing.defaultProps = {};


export default Landing;