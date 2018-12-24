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
  fetchImages: ({ commit }) => {
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


