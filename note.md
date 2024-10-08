# Vue3项目-可视化大屏

1. 搭建静态

- 设置重置样式
  - 下载包
    pnpm add normalize.css
  - 引入

```ts
import { createApp } from "vue";
import App from "./App.vue";

// 在 main.ts 引入全局或公共的内容
import "normalize.css"; // pnpm add normalize.css

const app = createApp(App);
app.mount("#app");
```
2. 设置全局样式
