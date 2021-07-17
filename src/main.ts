import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueI18nPlugin from "@/plugins/ext-vue-18n";

createApp(App).use(router).use(VueI18nPlugin).mount("#app");
