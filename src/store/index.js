import { createStore } from "vuex";
import usuario from './usuario'
import login from './login'


export default createStore({
  modules: {
    usuario,
    login
  }
});
