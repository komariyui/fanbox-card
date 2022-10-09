import { createApp } from 'vue'
import App from './App'
import card from "./page/index";
const app  = createApp(App)
app.config.globalProperties.$cardOpen = ()=>{
    alert("openCard");
}
app.use(card);
app.mount('#app');

