<template>
	<div class="detail-all" :id="$route.params.id" >
        <detail-top></detail-top>
	    <ul id="nav">
            <router-link tag="li" :to="'/' + $route.params.id + '/detail'" active-class="active" class="l">商品</router-link>
            <router-link tag="li" :to="'/' + $route.params.id + '/evaluate'" active-class="active" class="l">评价</router-link>
        </ul>
        <router-view class="clild-view"></router-view>
        <detail-list></detail-list>
        <detail-cart></detail-cart>
	</div>
</template>
<script>
import DetailTop from './DetailTop'
import DetailCart from './DetailCart'
import DetailList from './DetailList'
export default {
  name: 'detail-all',
  data () {
    return {
      shopId: null
    }
  },
  components: {
    DetailCart,
    DetailTop,
    DetailList
  },
  beforeCreate () {
    this.shopId = '/detail/' + this.$route.params.id
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail-all #nav {
    width:100%;
    height:0.72rem;
    background-color:#fff;
    position: fixed;
    top: 3.1rem;
    left: 0;
}
.detail-all #nav li{
    width:50%;
    height:0.72rem;
    line-height: 0.72rem;
    text-align: center;
    font-size:0.3rem;
    color:#333;
}
.active{
    color: #0096ff;
    border-bottom:0.06rem solid #0096ff;
}
</style>
