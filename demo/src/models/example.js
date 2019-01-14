import { getCompanyList } from '../services/example'
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
    *getCompanyList({ payload}, {call, put}) {
      const { rows } = yield call(getCompanyList, payload)
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
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    }
  }

};
