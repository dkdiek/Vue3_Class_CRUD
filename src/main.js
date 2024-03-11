// import Vue from "vue";
import { createApp } from "vue";
import App from "./App";
import router from "./routes/index";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

createApp(App).use(router).use(ElementPlus).mount("#app");
