import * as types from './types';

export default {
  namespaced: true,
  state: {
    email: 'sunny4817@gmail.com',
    password: '1234qwer',
    token: ''
  },
  mutations: {
    [types.updateEmail]( state, payload ) {
      state.email = payload.value;
    },
    [types.updatePassword]( state, payload ) {
      state.password = payload.value;
    },
    [types.updateToken]( state, payload ) {
      sessionStorage.token = payload.value;
      state.token = payload.value;
    }
  },
}