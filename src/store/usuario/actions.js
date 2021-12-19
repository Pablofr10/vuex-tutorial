import api from '../../services'

export default {
  async buscaUsuarios({ commit }, payload) {
    const {
      data: { data },
    } = await api.get(payload);
    commit("ADD_USUARIO", data);
  },
};
