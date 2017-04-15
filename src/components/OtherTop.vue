<template>
  <div class="other-top">
    <h2 class="l">Quality Life</h2>
    <a href="/search">搜索</a>
  </div>
</template>
<script>
export default {
  name: 'other-top'
}
</script>
<style scoped>
.other-top{
  position: fixed;
  top: 0;
  left: 0;
  width: 6.9rem;
  height: 1rem;
  line-height: 1rem;
  background: #ffda75;
  padding: 0 0.3rem;
}
.other-top h2{
  width: 4.9rem;
  height: 100%;
  padding-left: 1rem;
  text-align: center;
  color: #fff;
}
.other-top a{
  display: inline-block;
  width: 1rem;
  height: 100%;
  color: #fff;
}
</style>
