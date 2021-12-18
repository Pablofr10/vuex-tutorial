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
import { onMounted, ref } from "vue";
export default {
  components: {},
  setup() {
    const listaFavoritos = ref([]);

    onMounted(() => {
      listaFavoritos.value = [
        {
          id: 7,
          email: "michael.lawson@reqres.in",
          first_name: "Michael",
          last_name: "Lawson",
          avatar: "https://reqres.in/img/faces/7-image.jpg",
        },
        {
          id: 8,
          email: "lindsay.ferguson@reqres.in",
          first_name: "Lindsay",
          last_name: "Ferguson",
          avatar: "https://reqres.in/img/faces/8-image.jpg",
        },
        {
          id: 9,
          email: "tobias.funke@reqres.in",
          first_name: "Tobias",
          last_name: "Funke",
          avatar: "https://reqres.in/img/faces/9-image.jpg",
        },
        {
          id: 10,
          email: "byron.fields@reqres.in",
          first_name: "Byron",
          last_name: "Fields",
          avatar: "https://reqres.in/img/faces/10-image.jpg",
        },
      ];
    });

    function removeFavorito(idUsuario) {
      listaFavoritos.value = listaFavoritos.value.filter(
        (x) => x.id !== idUsuario
      );
    }

    return {
      listaFavoritos,
      removeFavorito,
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
