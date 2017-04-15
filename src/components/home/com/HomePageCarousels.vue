<template>
  <div class="carousel_box">
    <mt-swipe :auto="3000" :speed="1500" :show-indicators="true" id="home_carousel">
      <mt-swipe-item class="l page" v-for=" carousel in carousels" key="mt1">
          <img :src="carousel.imgSrc">
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
      carousel: {}
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
.carousel_box{
  width: 7.5rem;
  height: 5rem;
  z-index: -1;
  position: relative;
}
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
