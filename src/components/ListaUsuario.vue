<template>
  <h1>Lista de usuários</h1>

  <span v-for="(nome, i) in nomeSelecionados" :key="i">
    {{ nome }}{{ nomeSelecionados.length > 1 ? ", " : "" }}
  </span>
  <div class="lista">
    <div v-for="item in listaPessoas" :key="item.id">
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
import { computed, ref, onMounted } from "vue";
import { useStore } from 'vuex'

export default {
  components: {
    Usuario,
  },
  setup() {

    const store = useStore();

    const selecionados = ref([]);
    const listaPessoas = computed(() => store.state.usuario.listaPessoas);

    const nomeSelecionados = computed(() => {
      return selecionados.value.map((x) => `${x.first_name} ${x.last_name}`);
    });

    function setUsuarioSelecionado(idUsuario) {
      store.dispatch('usuario/adicionaFavorito', idUsuario);
    }

    function removeUsuarioSelecionado(idUsuario) {
      store.dispatch('usuario/removeFavorito', idUsuario);
    }

    onMounted(() => {
      store.dispatch('usuario/adicionaPessoas', 'users?page=2')
    })

    return {
      listaPessoas,
      setUsuarioSelecionado,
      removeUsuarioSelecionado,
      nomeSelecionados,
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
