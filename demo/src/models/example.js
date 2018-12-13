import { getCompanyList } from '../services/example'
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
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    }
  }

};
