export default {

  namespace: 'user',

  state: {
    userInfo: ''
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    }
  },

  effects: {
    *login({ payload}, {call, put}) {
      console.log('inRouter')
      yield call(routerRedux.replace('/Option'))
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    }
  }

};
