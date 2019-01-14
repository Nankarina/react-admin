import React from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage'
import Option from './routes/option'
import Single from './routes/single'
import File from './routes/file'
import Login from './routes/login'
import Test from './routes/test'
import Example from './routes/example'
import First from './routes/first'
import Second from './routes/second'
import { IntlProvider } from 'react-intl' // react国际化
const { ConnectedRouter } = routerRedux
const messageLan = {}
function RouterConfig({ history }) {
  return (
    <IntlProvider locale={navigator.language} messages={messageLan}>
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
              {/* <Route
                component={Option}
                exact
                path="/Option"
              /> */}
              
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
               <Route
                component={Example}
                exact
                path="/example"
              />
              <Route
                component={First}
                exact
                path="/first"
              />
               <Route
                component={Second}
                exact
                path="/second"
              />
              {/* <Route
                component={Test}
                exact
                path="/test"
              /> */}
            </Switch>
          </IndexPage>)}
        />
      </Switch>
    </ConnectedRouter>
    </IntlProvider>
  );
}

export default RouterConfig;
