import api from '../../api/imgur';

const state = {
  images: []
};

const getters = {
  allImages: state => state.images
};

const mutations = {
  setImages: (state, images) => state.images = images
};

const actions = {
  fetchImages: async({ commit, rootState }) => {
    const response = await api.fetchImages(rootState.auth.token);
    commit('setImages', response.data.data);
  },
  uploadImage: ({ commit }) => {
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};


