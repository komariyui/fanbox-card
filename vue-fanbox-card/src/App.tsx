import { defineComponent, ref } from 'vue';
import {openCard,closeCard} from "@/page/card";

export default defineComponent({
  setup() {
    let miao:string;
    const miaomiao =ref(false);
    const openMiao = ()=>{
      openCard()
    }
    const msg = ref<string>('Vue3 + TypeScript + TSX')
    return () => (
        <div>
          <button onClick={()=>openMiao()}>打开模态框</button>
          <fanboxCard show={true} image={require('../card-image.jpeg')}></fanboxCard>
        </div>
   )
  },
});

