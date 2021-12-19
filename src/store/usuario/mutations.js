export default {
  ADD_USUARIO(state, payload) {
    state.listaUsuarios = payload;
  },
  ADD_FAVORITO(state, payload) {
    const selecionado = state.listaUsuarios.find((x) => x.id === payload);
    state.listaFavoritos.push(selecionado);
  },
  REMOVE_FAVORITO(state, payload) {
    state.listaFavoritos = state.listaFavoritos.filter((x) => x.id !== payload);
  },
};
