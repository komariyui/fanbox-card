import { defineComponent, ref } from 'vue';
import fanboxCard from "@/page/card";
export default defineComponent({
  setup() {
    let miao:string;
    const msg = ref<string>('Vue3 + TypeScript + TSX')
    return () => <fanboxCard show={true} image={require('../card-image.jpeg')}></fanboxCard>
  },
});

