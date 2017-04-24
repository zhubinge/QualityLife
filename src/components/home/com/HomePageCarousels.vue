<template>
  <div>
    <mt-swipe :auto="3000" :speed="1500" :show-indicators="false" id="home_carousel">
      <mt-swipe-item class="l page" v-for=" val in carousels" key="mt1">
          <img :src="val.imgSrc">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  name: 'home-page-carousels',
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
#home_carousel{
  width: 7.5rem;
  height: 5rem;
  position: relative;
}
#home_carousel div.page{
  width: 7.5rem;
  height: 5rem;
  background: #fff;
  position: absolute;
  display: block;
  box-sizing: border-box;
}
#home_carousel div.page img{
  width: 100%;
  height: 5.1rem;
}

</style>
