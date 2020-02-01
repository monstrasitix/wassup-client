// Core
import c from 'classnames';
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';


// Components
import Button from '../components/Button/Button.component';


// Views
import Dashboard from './Dashboard.view';


export interface ILandingProps {};


const Landing: React.FC<ILandingProps> = () => {
    const [toggled, setToggle] = React.useState(true);

    const handleToggle = React.useCallback(
        () => setToggle(!toggled),
        [toggled],
    );
    
    return (
        <div className="landing">
            <div className={c('landing-column sidebar', { pushed: toggled })}>
                <div className="landing-info">
                    <p><strong>John Doe</strong></p>
                    <p>Order 01/02/2020</p>
                </div>

                <Button primary wide>View Order</Button>

                <br/>

                <nav className="menu">
                    <ul className="menu-list">
                        {new Array(5).fill(0).map((_, index) => (
                            <li className="menu-item" key={index}>
                                <a href="#" className="menu-link">
                                    <i className="fa fa-leaf" />{' Some Link'}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <main className={c('landing-column main', { pushed: toggled })}>
                <nav>
                    <Button primary onClick={handleToggle}>
                        <i className="fas fa-bars" />
                    </Button>
                </nav>

                <br/>

                <Switch>
                    <Route component={Dashboard} />
                </Switch>
            </main>
        </div>
    );
};


Landing.propTypes = {};
Landing.defaultProps = {};


export default Landing;