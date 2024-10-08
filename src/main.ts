import { createApp } from "vue";

import App from "./App.vue";

// 在 main.ts 引入全局或公共的内容
import "normalize.css"; // pnpm add normalize.css
import "./styles/global.scss";  // pnpm add sass -D
import "./styles/variable.css";

const app = createApp(App);
app.mount("#app");