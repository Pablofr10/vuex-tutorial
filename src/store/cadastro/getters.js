const getters = {
  totalFavoritos: (state) => state.listaFavoritos.length,
  isFavorito: (state) => (id) => state.listaFavoritos.some((x) => x.id === id),
};

export default { ...getters };
