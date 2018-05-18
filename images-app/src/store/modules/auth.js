import api from '../../api/imgur';
import qs from 'qs';

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
    window.localStorage.setItem('imgur_token', access_token);
    commit('setToken', access_token);
  },
  logout: ({ commit }) => {
    commit('setToken', null);
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}
