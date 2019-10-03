<template>
  <div class="container">
    <head-content></head-content>
      <router-view></router-view>
    <foot-content></foot-content>
  </div>
</template>
<script>
import Head from "../shared/Head.vue"
import Foot from "../shared/Foot.vue"
export default {
  components:{
    HeadContent:Head,
    FootContent:Foot
  }

}
</script>
<style scoped>

</style>
