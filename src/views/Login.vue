<template>
  <div class="login">
    <form @submit.prevent="logarSistema()">
      <label for="usuario">Usuário</label>
      <input
        type="text"
        id="usuario"
        name="usuario"
        v-model="usuario"
        placeholder="Digite seu usuário"
      />

      <label for="senha">Senha</label>
      <input
        type="password"
        name="senha"
        v-model="senha"
        placeholder="Digite sua senha"
      />
      <button>Entrar</button>
    </form>
    {{ usuario }}
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const usuario = ref("");
    const senha = ref("");

    function logarSistema() {
      console.log(usuario.value, senha.value);
    }
    return { usuario, senha, logarSistema };
  },
};
</script>

<style scoped>
.login {
  width: 300px;
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
}

.login form {
  background: #9199a1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
}

.login form input {
  padding: 5px;
  border-radius: 2px;
  border: none;
}

.login form input:focus {
  outline: none;
  background: #f8fce8;
}

.login form button {
  padding: 5px 15px;
  border: none;
  cursor: pointer;
  background: #118d54;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 2px;
  transition: 0.2s;
}

.login form button:hover {
  background: #237c54;
}
</style>
