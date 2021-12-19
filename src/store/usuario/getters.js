export default {
  totalFavoritos(state) {
    return state.listaFavoritos.length;
  },
  favoritoSelecionado: (state) => (id) => {
    return state.listaFavoritos.some((x) => x.id === id);
  },
  testeNamespace(){
    return 'teste dashboard'
  }
};
