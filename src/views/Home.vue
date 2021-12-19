<template>
<keep-alive>
  <ListaUsuario />
</keep-alive>
</template>

<script>
import ListaUsuario from "@/components/ListaUsuario.vue";

export default {
  name: "Home",
  components: {
    ListaUsuario,
  },
};
</script>
