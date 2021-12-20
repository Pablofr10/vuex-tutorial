import { pessoas } from '../mutations-types';

const { ADD_PESSOAS, ADD_FAVORITO, REMOVER_FAVORITO } = pessoas;

export default {
    async adicionaPessoas({commit}, payload){
        const req = await fetch(`https://reqres.in/api/${payload}`);
        const { data } = await req.json();
        commit(ADD_PESSOAS, data);
    },
    adicionaFavorito({commit}, payload){
        commit(ADD_FAVORITO, payload);
    },
    removeFavorito({commit}, payload){
        commit(REMOVER_FAVORITO, payload);
    }
}