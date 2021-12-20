export default {
    ADD_FAVORITO(state, payload){
        const usuarioSelecionado = state.listaPessoas.find((x) => x.id === payload);
        state.listaFavoritos = [...state.listaFavoritos, usuarioSelecionado];
    },
    REMOVER_FAVORITO(state, payload){
        state.listaFavoritos = state.listaFavoritos.filter((x) => x.id !== payload);
    },
    ADD_PESSOAS(state, payload){
        state.listaPessoas = [];
        state.listaPessoas = payload;
    }
}