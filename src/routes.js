import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { components, containers } from './components';

export default (
    <Router>
        <Route path="login" component={containers.Login} />
        <Route path="/" component={components.App}>
            <IndexRoute component={containers.Blocks} />
            <Route path="one">
                <IndexRoute component={containers.Blocks} />
                <Route path="block" component={containers.Blocks} />
                <Route path="dnd" component={containers.Dnd} />
            </Route>
        </Route>
    </Router>
);

