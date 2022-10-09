import fanboxCard,{openCard,closeCard} from './main';
import {App} from 'vue'
fanboxCard.install = (app: App) => {
    app.component(fanboxCard.name, fanboxCard);
};
export default fanboxCard;
export {openCard,closeCard};
