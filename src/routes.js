import React from 'react';
import { Router, Route, IndexRoute, browserHistory, breadcrumbName } from 'react-router';

import Login from './components/Login';
import App from './components/common/App';
import Blocks from './components/Block';

export default (
    <Router>
        <Route path="login" component={Login} />
        <Route path="/" component={App}>
            <IndexRoute breadcrumbName="one" component={App} />
            <Route breadcrumbName="one" path="one">
                <IndexRoute component={Blocks} />
                <Route breadcrumbName="block" path="block" component={Blocks} />
            </Route>
        </Route>
    </Router>
);

