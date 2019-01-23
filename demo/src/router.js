import React from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage'
// import Option from './routes/option'
import Single from './routes/single'
import File from './routes/file'
import Login from './routes/login'
// import Test from './routes/test'
import Example from './routes/example'
import First from './routes/first'
import Second from './routes/second'
import { addLocaleData } from 'react-intl' // react国际化
import { IntlProvider } from 'react-intl' // react国际化

import zh from 'react-intl/locale-data/zh'// react-intl语言包
import en from 'react-intl/locale-data/en'// react-intl语言包
// import intl from 'intl'
import zhCN from './i18n/zh_CN'// 中文
import enUS from './i18n/en_US'// 英文
addLocaleData([...en, ...zh])




const { ConnectedRouter } = routerRedux

let messageLan = {}
if(localStorage.lan && localStorage.getItem('lan') === 'zh_CN'){
  messageLan = zhCN
}else if(localStorage.lan && localStorage.getItem('lan') === 'en_US'){
  messageLan = enUS
}
const enterTab = () => {
  console.log('进入路由做一些事情，嘿嘿嘿')
}
function RouterConfig({ history }) {
  return (
    <IntlProvider locale={navigator.language} messages={messageLan}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route
          component={Login}
          exact
          path="/login"
          onEnter={enterTab.bind(this)}
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
