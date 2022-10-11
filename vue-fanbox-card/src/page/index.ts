import fanboxCard from "./card/index"
import { App } from 'vue';
const components = [fanboxCard];
const install = (app: App) => {
    components.forEach(component => {
        app.use(component.install);
    });
};
export default {install,fanboxCard};
