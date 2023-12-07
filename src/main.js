import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import i18n from "./locales/i18n";

createApp(App).use(router).use(i18n).mount("#app");