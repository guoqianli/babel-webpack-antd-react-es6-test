import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Login from './components/Login';
import App from './components/common/App';
import Blocks from './components/Block';

export default (
    <Router>
        <Route path="login" component={Login} />
        <Route path="/" component={App}>
            <IndexRoute component={Blocks} />
            <Route path="one">
                <IndexRoute component={Blocks} />
                <Route path="block" component={Blocks} />
            </Route>
        </Route>
    </Router>
);

