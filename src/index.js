import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import Timeline from './components/Timeline';

// render(<Timeline/>, document.getElementById('root'));

render(<App name='World'/>, document.getElementById('root'));
