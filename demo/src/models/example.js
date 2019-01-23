import { getDataList } from '../services/example'
import { routerRedux } from "dva/router"
export default {

  namespace: 'example',

  state: {
    companyList: {
      rows: []
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *getDataList({ payload}, {call, put}) {
      const { rows } = yield call(getDataList, payload)
      yield put({
        type:'save',
        payload: {
          companyList: {
            rows
          }
        }
      })
    },
    *login({ payload}, {call, put }) {
      yield put(routerRedux.replace('/example'))
    },
    *loginOut({ payload}, { call, put }){
      yield put(routerRedux.replace('/login'))
    },
    * redirect ({ payload }, { put }) {
      const { name } = payload
      yield put(routerRedux.push(name));
    },
    
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    }
  }

};
