import { createApp } from 'vue'
import App from './App'
import card from "./page/index";
const app  = createApp(App)
app.use(card);
app.mount('#app');

