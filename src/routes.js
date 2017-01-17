import React from 'react';
import { Router, Route, IndexRoute, browserHistory, breadcrumbName } from 'react-router';

import Login from './components/Login';
import App from './components/common/Container';
import Block from './components/Block';

export default (
    <Router history={browserHistory}>
        <Route path="login" component={Login} />
        <Route path="/" component={App}>
            <IndexRoute breadcrumbName="one" component={App} />
            <Route breadcrumbName path="one">
                <IndexRoute component={Block} />
                <Route breadcrumbName="block" path="block" component={Block} />
            </Route>
        </Route>
    </Router>
);

