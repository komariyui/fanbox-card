<template>
  <div>
    <card :show="showS"></card>

  </div>

</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import card from "../page/card/main";
export default defineComponent({
  components:{
    card
  },
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup(){
    let showS = ref(true);
    return{
      openMiaoMiao(){
        showS.value = !showS.value;
        ////
    },
    showS
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
