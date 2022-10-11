import { defineComponent, ref } from 'vue';
import fanboxCard from "./page/index"

export default defineComponent({
  setup() {
    let miao:string;
    const miaomiao =ref(false);
    const openMiao = ()=>{
      miaomiao.value = true
    }
    const msg = ref<string>('Vue3 + TypeScript + TSX')
    return () => (
        <div>
          <button onClick={()=>openMiao()}>打开模态框</button>
          <fanboxCard show={miaomiao.value} image={require('../card-image.jpeg')} onClick={()=>{miaomiao.value=false}}></fanboxCard>
        </div>
   )
  },
});

