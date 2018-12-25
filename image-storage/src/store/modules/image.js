import api from '../../api/imgur';
import {router} from '../../main';

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
  uploadImages: async({ commit, rootState }, images) => {
    await api.uploadImages(rootState.auth.token, images);
    router.push('/');
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};


