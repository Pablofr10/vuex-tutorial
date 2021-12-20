import { createStore } from 'vuex';
import usuario from './usuario'
import teste from './teste'


const store = createStore({

    modules: {
        usuario,
        teste
    }
})


export default store;