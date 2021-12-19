<template>
  <h1>Lista de usuários</h1>
  <div class="lista">
    <div v-for="item in listaUsuarios" :key="item.id">
      <Usuario
        @selecionado="setUsuarioSelecionado($event)"
        @removeSelecionado="removeUsuarioSelecionado($event)"
        :usuario="item"
      />
    </div>
  </div>
</template>

<script>
import Usuario from "@/components/Usuario.vue";
import { useStore } from "vuex";
import { ref, onMounted } from 'vue';
export default {
  components: {
    Usuario,
  },
  setup() {
    const store = useStore();
    const listaUsuarios = ref([]);

    async function buscaUsuarios(){
      await store.dispatch('usuario/buscaUsuarios', 'users?page=2');
      listaUsuarios.value = store.state.usuario.listaUsuarios;
    }

    function setUsuarioSelecionado(idUsuario) {
      store.commit("usuario/ADD_FAVORITO", idUsuario);
    }

    function removeUsuarioSelecionado(idUsuario) {
      store.commit("usuario/REMOVE_FAVORITO", idUsuario);
    }

    onMounted(() => {
      buscaUsuarios();
      console.log(store.getters['testeNamespace'])
    });

    return {
      listaUsuarios,
      setUsuarioSelecionado,
      removeUsuarioSelecionado,
    };
  },
};
</script>

<style>
h1 {
  text-align: center;
}

.lista {
  display: grid;
  margin: 0 20px;
  grid-template-columns: repeat(4, minmax(200px, 400px));
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>
