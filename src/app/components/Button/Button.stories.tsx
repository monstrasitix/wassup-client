// Core
import * as React from 'react';
import { storiesOf } from '@storybook/react';


// Components
import Button from './Button.component';


const stories =  storiesOf('Button', module);


stories.add('Plain', () => (
    <Button className="button" children="Button" />
));


stories.add('Themed', () => (
    <>
        <Button className="button" children="Button" />
        <Button className="button primary" children="Button" />
        <Button className="button secondary" children="Button" />
    </>
));