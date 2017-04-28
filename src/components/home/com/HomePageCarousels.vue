<template>
  <div id="home_carousel_page">
    <div class="box"></div>
    <mt-swipe
     :auto="4000"
     :speed="500"
     :show-indicators="true"
     id="home_carousel"
     >
      <mt-swipe-item class="page" v-for="(carousel,idx) in carousels.this_data" :key="idx" :id="idx">
          <img :src="'static/images/' + carousel.imgSrc">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui'
export default {
  name: 'home-page-carousels',
  data () {
    return {
      carousels: {}
    }
  },
  beforeCreate () {
    //首页轮播图
    var homeSearch = {
      content :"home_carousels"
    };
    this.$http.post('/api/home/getcontent',homeSearch)
      .then((response) => {
        this.carousels = response.data[0]
      })
      .catch((reject) => {
        console.log(reject)
      })
  }
}
</script>
<style scoped>
#home_carousel_page{
  width: 100%;
  overflow: hidden;
}
#home_carousel_page .box{
  width: 100%;
  height: 2rem;
  overflow: hidden;
  background: #fff;
}

#home_carousel{
  height: 5rem;
  overflow: hidden;
}
#home_carousel div.page{
  height: 5rem;
  overflow: hidden;
}
#home_carousel div.page img{
  width: 100%;
}
</style>
