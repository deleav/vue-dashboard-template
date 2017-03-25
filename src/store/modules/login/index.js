import * as types from './types';

export default {
  namespaced: true,
  state: {
    email: 'sunny4817@gmail.com',
    password: '1234qwer'
  },
  mutations: {
    [types.updateEmail]( state, payload ) {
      state.email = payload.value;
    },
    [types.updatePassword]( state, payload ) {
      state.password = payload.value;
    }
  },
}