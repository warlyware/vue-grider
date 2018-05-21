import api from '../../api/imgur';
import { router } from '../../main';

const state = {
  images: []
}

const getters = {
  allImages: (state) => state.images
}
const actions = {
  fetchImages: async ({ rootState, commit }) => {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    commit('setImages', response.data.data);
  },
  uploadImages: async ({ rootState }, images) => {
    console.log('images', images);
    const { token } = rootState.auth;

    await api.upload(images, token);
    router.push('/');
  }
}

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
