import { defineStore } from "pinia";
import state from "./state";
import getters from "./getters";
import actions from "./actions";

export const usuarioStore = defineStore("usuario-cadastro", {
  state,
  getters,
  actions,
});

export const loginStore = defineStore("login", {
  state: () => {
    return {
      nome: "Pablo Codes",
    };
  },
});
