<template>
<div>
    <mt-swipe :auto="3000" :speed="1500" :show-indicators="false" id="detail_list">
      <mt-swipe-item class="l page" v-for=" val in carousels" key="mt1">
          <img :src="val.imgSrc">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
    name: 'detail-list',
    data () {
    return {
      carousels: {},
      ul: {},
      key: {},
      val: {},
      imgSrc: '',
      text: ''
    }
  },
  beforeCreate () {
    fetch('static/json/shop_page.json')
      .then(response => response.json())
      .then(data => {
        this.carousels = data.home_carousels
        // console.log(this.carousels)
      })
  }
}
</script>
<style scoped>
#detail_list{
  width: 7.5rem;
  height: 5rem;
  position: relative;
}
#detail_list div.page{
  width: 7.5rem;
  height: 5rem;
  background: #fff;
  position: absolute;
  display: block;
  box-sizing: border-box;
}
#detail_list div.page img{
  width: 100%;
  height: 5.1rem;
}
</style>
