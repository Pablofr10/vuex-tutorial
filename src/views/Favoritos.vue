<template>
  <h1>Lista de favoritos</h1>
  <div class="lista">
    <div v-for="item in listaFavoritos" :key="item.id">
      <div class="card">
        <div class="imagem-container">
          <img :src="item.avatar" alt="imagem avatar" />
        </div>
        <span>{{ item.first_name + " " + item.last_name }}</span>
        <a class="favorito" @click="removeFavorito(item.id)">
          <span>X</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {usuarioStore, loginStore} from '../store/cadastro'
import { storeToRefs } from 'pinia';
export default {
  components: {},
  setup() {
    const store = usuarioStore()
    const login = loginStore()
    const { listaFavoritos } = storeToRefs(store)

    console.log(login.nome)

    return {
      listaFavoritos,
      removeFavorito: store.removeUsuario
    };
  },
};
</script>

<style scoped>
.favorito span {
  font-size: 25px;
  color: #f04f47;
  text-align: center;
}
</style>
