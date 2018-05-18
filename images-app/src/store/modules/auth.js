import api from '../../api/imgur';
import qs from 'qs';

import { router } from '../../main';

const state = {
  token: window.localStorage.getItem('imgur_token')
}

const getters = {
  isLoggedIn: state => !!state.token
}

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
}

const actions = {
  login: () => {
    api.login();
  },
  finalizeLogin: ({ commit }, hash) => {
    const { access_token } = qs.parse(hash.replace('#', ''));
    commit('setToken', access_token);
    window.localStorage.setItem('imgur_token', access_token);
    router.push('/');
  },
  logout: ({ commit }) => {
    commit('setToken', null);
    window.localStorage.removeItem('imgur_token');
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}
