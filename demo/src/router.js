import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage'
import Option from './routes/option'
import Single from './routes/single'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route
            component={IndexPage}
            exact
            path="/"
        />
        <Router
            component={Option}
            exact
            path="/option"
        />
        <Router
            component={Single}
            exact
            path="/single"
        />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
