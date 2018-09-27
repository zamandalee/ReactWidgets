import React from 'react';

import Clock from './clock.jsx';
import Tabs from './tabs.jsx';
import Weather from './weather.jsx';

const Root = () => (
    <div>
        <Clock />
        <Tabs content={[ {title: 'one', content: 'first tab!'}, {title: 'two', content: 'second tab!'}, {title: 'three', content: 'third tab!'}]} />
        <Weather />
    </div>
);

export default Root;
