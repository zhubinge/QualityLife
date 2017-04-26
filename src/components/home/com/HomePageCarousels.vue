<template>
  <div>
    <mt-swipe :auto="3000" :speed="1500" :show-indicators="false" id="home_carousel">
      <mt-swipe-item class="l page" v-for="val in carousels" key="mt1">
          <img :src="'static/images/'+ val.imgSrc">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
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
      content :'home_carousels'
    };
    this.$http.post('/api/home/getContent',homeSearch)
      .then((response) => {
        this.carousels = response.data
        console.log(this.carousels)
      })
      .catch((reject) => {
        console.log(reject)
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
