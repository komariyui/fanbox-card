<template>
  <div>
    <card :show="isShow"></card>
    <button @click="openMiaoMiao()">打开</button>
  </div>

</template>

<script lang="ts">

import {defineComponent, ref} from 'vue';
import card,{openCard} from "../page/card/main";
export default defineComponent({
  components:{
    card
  },
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup(){
    const isShow = ref(true);

    return{
      openMiaoMiao(){
        openCard();
    },
    isShow
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
