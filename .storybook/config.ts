// Core
import { configure } from '@storybook/react';
import '../src/styles/views/main.scss';

const req = require.context('../src', true, /\.stories\.tsx$/);


function loadStories() {
    req.keys().forEach(req);
}


configure(loadStories, module);