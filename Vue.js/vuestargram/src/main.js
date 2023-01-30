import { createApp } from "vue";
import App from "./App.vue";
import mitt from "mitt";
import axios from "axios";

axios.defaults.baseURL = 'https://localhost:8888'
let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.config.globalProperties.axios = axios;
 
app.mount("#app");
