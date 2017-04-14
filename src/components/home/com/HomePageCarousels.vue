<template>
  <div>
    <mt-swipe :auto="3000" :speed="1500" :show-indicators="false" class="home_carousel">
      <mt-swipe-item class="l page" v-for=" ul in carousels" key="mt1">
        <div class="l s-box" v-for="(val,key) in ul">
          <img :src="val.imgSrc">
          <p>{{val.text}}</p>
        </div>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  name: 'home-page-carousels',
  data () {
  	return {
      carousels:{},
      ul:{},
      key:{},
      val:{},
      imgSrc:'',
      text:''
  	}
  },
  beforeCreate () {
    fetch('static/json/shop_page.json')
      .then(response => response.json())
      .then(data => {
        this.carousels = data.home_carousels
      })
  }
}
</script>
<style scoped>
.home_carousel{
  width: 7.5rem;
  height: 3.4rem;
  background: #fff;
  position: relative;
  overflow: hidden;
  padding-top: 0.2rem;
}
.home_carousel div.page{
  width: 7.5rem;
  height: 3.4rem;
  background: #fff;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}
.home_carousel div.page div.s-box{
  width: 1.875rem;
  height: 1.7rem;
  box-sizing: border-box;
  padding: 0  0.4rem;
  overflow: hidden;
  position: relative;
}
.home_carousel div.page div.s-box img{
  width: 100%;
  height: 1.1rem;
}
.home_carousel div.page div.s-box p{
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 12px;
  text-align: center;
}
</style>
