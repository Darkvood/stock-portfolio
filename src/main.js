import { createApp, h } from "vue";

import { store } from "~/store";
import { router } from "~/router";

import "~/assets/styles/main.scss";

import Layout from "~/layout/default.vue";

const app = createApp(Layout);

app.use(store);
app.use(router);

app.mount("#app");
