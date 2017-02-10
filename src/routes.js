import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { components, containers } from './components';

export default (
  <Router>
    <Route path="login" component={containers.Login} />
    <Route path="/" component={components.App}>
      <IndexRoute component={containers.Blocks} />
      <Route path="pluginUnit">
        <IndexRoute component={containers.Blocks} />
        <Route path="block" component={containers.Blocks} />
        <Route path="dnd" component={containers.Dnd} />
        <Route path="color" component={containers.Color} />
        <Route path="tabs" component={containers.Tabs} />
      </Route>
      <Route path="domOpera">
        <Route path="findDomNode" component={containers.FindeDomNode} />
        <Route path="refs" component={containers.Refs} />
        <Route path="cloneElement" component={containers.CloneElement} />
      </Route>
    </Route>
  </Router>
);

