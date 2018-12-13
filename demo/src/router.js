import React from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage'
import Option from './routes/option'
import Single from './routes/single'
import File from './routes/file'
const { ConnectedRouter } = routerRedux
function RouterConfig({ history }) {
  return (
    <ConnectedRouter history={history}>
    <IndexPage>
      <Switch>
        <Route
            component={Option}
            exact
            path="/option"
        />
        <Route
            component={Single}
            exact
            path="/single"
        />
        <Route
            component={File}
            exact
            path="/file"
        />
      </Switch>
      </IndexPage>
    </ConnectedRouter>
  );
}

export default RouterConfig;
