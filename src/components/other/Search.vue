<template>
  <div class="search">
    <h1>{{ msg }}</h1>
	<bottom-nav></bottom-nav>
  </div>
</template>

<script>
import BottomNav from '../BottomNav'
export default {
  name: 'search',
  data () {
    return {
      msg: 'Search'
    }
  },
  components:{
    BottomNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
