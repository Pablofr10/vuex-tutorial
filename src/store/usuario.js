import { defineStore } from "pinia";

export const usuarioStore = defineStore("usuario", {
  state: () => {
    return {
      listaPessoas: [],
      listaFavoritos: [],
    };
  },
  getters: {
    totalFavoritos: (state) => state.listaFavoritos.length,
    isFavorito: (state) => (id) =>
      state.listaFavoritos.some((x) => x.id === id),
  },
  actions: {
    adicionaUsuario(idUsuario) {
      const usuarioSelecionado = this.listaPessoas.find(
        (x) => x.id == idUsuario
      );
      this.listaFavoritos = [...this.listaFavoritos, usuarioSelecionado];
    },

    removeUsuario(idUsuario) {
      this.listaFavoritos = this.listaFavoritos.filter(
        (x) => x.id !== idUsuario
      );
    },
    async buscaUsuarios(endpoint) {
      const request = await fetch("https://reqres.in/api/" + endpoint);
      const { data } = await request.json();
      this.listaPessoas = data;
    },
  },
});
