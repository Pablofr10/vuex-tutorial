<template>
  <h1>Lista de favoritos {{totalFavoritos}}</h1>
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
import { onMounted, computed } from "vue";
import { useStore } from 'vuex';
export default {
  components: {},
  setup() {

    const store = useStore();

    const listaFavoritos = computed(() => store.state.usuario.listaFavoritos);
    const totalFavoritos = computed(() => store.getters['usuario/totalFavoritos']);

    onMounted(() => {
    });

    function removeFavorito(idUsuario) {
      store.dispatch('usuario/removeFavorito', idUsuario);
    }

    return {
      listaFavoritos,
      removeFavorito,
      totalFavoritos
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
