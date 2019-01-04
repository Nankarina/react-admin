import React from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage'
import Option from './routes/option'
import Single from './routes/single'
import File from './routes/file'
import Login from './routes/login'
const { ConnectedRouter } = routerRedux

function RouterConfig({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route
          component={Login}
          exact
          path="/login"
        />
        <Route
          component={Login}
          exact
          path="/"
        />
        <Route
          render={() => (<IndexPage>
            <Switch>
              <Route
                component={Option}
                exact
                path="/Option"
              />
              
              <Route
                component={Single}
                exact
                path="/Single"
              />
              <Route
                component={File}
                exact
                path="/File"
              />
            </Switch>
          </IndexPage>)}
        />
      </Switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;
