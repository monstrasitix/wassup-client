// Core
import * as React from 'react';
import { storiesOf } from '@storybook/react';


// Components
import Button from './Button.component';


const stories =  storiesOf('Button', module);


stories.add('Plain', () => (
    <Button children="Button" />
));


stories.add('Themed', () => (
    <>
        <Button children="Button" />
        <Button primary children="Button" />
        <Button secondary children="Button" />
    </>
));