<template>
  <div class="card">
    <div class="imagem-container">
      <img :src="usuario.avatar" alt="imagem avatar" />
    </div>
    <span>{{ usuario.first_name + " " + usuario.last_name }}</span>
    <a class="favorito" @click="mudarFavorito(usuario.id)">
      <img v-if="favorito" src="@/assets/heart.svg" alt="favorito icone" />
      <img v-else src="@/assets/heart-outline.svg" alt="favorito icone" />
    </a>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["usuario"],
  emits: ["selecionado", "removeSelecionado"],
  setup(prop, { emit }) {
    const favorito = ref(false);

    function mudarFavorito(idUsuario) {
      favorito.value = !favorito.value;

      if (favorito.value) {
        emit("selecionado", idUsuario);
        return;
      }

      emit("removeSelecionado", idUsuario);
    }

    return { mudarFavorito, favorito };
  },
};
</script>

<style>
.card {
  padding: 10px;
  background: #ffedec;
  border-radius: 5px;
  position: relative;
}

.imagem-container {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  padding-top: 10px;
}

.imagem-container img {
  border-radius: 50%;
}

.card span {
  margin-top: 10px;
  display: block;
  text-align: center;
}

.favorito {
  position: absolute;
  top: 10px;
  right: 5px;
  cursor: pointer;
}

.favorito img {
  width: 30px;
  margin: 0 auto;
}
</style>
