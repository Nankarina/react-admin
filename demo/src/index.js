import dva from 'dva';
import createLoading from "dva-loading"
import { addLocaleData } from 'react-intl' // react国际化
import zh from 'react-intl/locale-data/zh'// react-intl语言包
import en from 'react-intl/locale-data/en'// react-intl语言包
import intl from 'intl'
import zhCN from './i18n/zh_CN'// 中文
import enUS from './i18n/en_US'// 英文
import './index.less';
addLocaleData([...en, ...zh])
function GetQueryString(name){
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if(r!=null)return  unescape(r[2]); return null;
}
// function chooseLocale(lan) {
//     if(lan === 'zh_CN'){
//       return zhCN
//     }else if(lan === 'en_US'){
//       return en_US
//     }
//   }
//   chooseLocale(GetQueryString("locale"))
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);
// 全局loading
app.use(createLoading());
// 5. Start
app.start('#root');
