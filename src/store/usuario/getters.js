export default {
    totalFavoritos (state) {
        return state.listaFavoritos.length
    },
    isFavorito: (state) => (id) => {
        return state.listaFavoritos.some(x => x.id === id);
    },
    testeNome(){
        return "Nome duplicado";
     }
}