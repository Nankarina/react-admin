import dva from 'dva';
import createLoading from "dva-loading"

import './index.less';

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
