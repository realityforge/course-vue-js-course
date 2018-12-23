const state = {
  token: null
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
  logout: ({ commit }) => {
    // Commit's first parameter is the string that matches mutation key and
    // contains as many parameters as you want following. In this case we are
    // just setting token to be null.
    commit('setToken', null);
  }
};



