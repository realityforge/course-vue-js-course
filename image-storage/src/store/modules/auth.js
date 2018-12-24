import qs from 'qs';
import api from '../../api/imgur';

const state = {
  token: window.localStorage.getItem('imgur.access_token')
};

const getters = {
  // Each getter always have a single parameter that is state
  isAuthenticated: state => !!state.token
};

const mutations = {
  // Each mutation has at least one parameter that is state and then 0 or more additional parameters defined by mutation
  setToken: (state, token) => state.token = token
};

const actions = {
  login: () => {
    api.login();
  },
  loginComplete: ({ commit }, hash) => {
    const queryString = qs.parse(hash.replace('#', ''));
    let accessToken = queryString.access_token;
    commit('setToken', accessToken);
    window.localStorage.setItem('imgur.access_token', accessToken);
  },
  logout: ({ commit }) => {
    // Commit's first parameter is the string that matches mutation key and
    // contains as many parameters as you want following. In this case we are
    // just setting token to be null.
    commit('setToken', null);
    window.localStorage.removeItem('imgur.access_token');
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};


