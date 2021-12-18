import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toastr from "./components/Toastr.vue";

const app = createApp(App);

app.component("toastr", Toastr);
app.use(router);
app.mount("#app");
