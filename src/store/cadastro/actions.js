const actions = {
  adicionaUsuario(idUsuario) {
    const usuarioSelecionado = this.listaPessoas.find((x) => x.id == idUsuario);
    this.listaFavoritos = [...this.listaFavoritos, usuarioSelecionado];
  },

  removeUsuario(idUsuario) {
    this.listaFavoritos = this.listaFavoritos.filter((x) => x.id !== idUsuario);
  },
  async buscaUsuarios(endpoint) {
    const request = await fetch("https://reqres.in/api/" + endpoint);
    const { data } = await request.json();
    this.listaPessoas = data;
  },
};

export default { ...actions };
