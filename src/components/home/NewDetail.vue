<template>
  <div class="new-detail">
    <h1>最近一周新品</h1>
    <div v-for="shopList in shopLists" id="goods">
    	<router-link :to="'/detail/' + shopList.com_id">
        <img :src="'static/images/commodity/'+shopList.com_img">
      	<p>{{shopList.com_name}}}</p>
      	<div id="bot">
        	<span class="new l">新品首发优惠</span>
          <span class="newPrice l">￥ {{shopList.original_price}}</span>
          <span class="oldPrice l">￥{{shopList.present_price}}</span>
          <span class="sign l">新</span>
        	<span class="right r">评论：0</span>
    	 </div>
       </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'new-detail',
  data () {
    return {
      shopLists: {}
    }
  },
  beforeCreate () {

    var search = {is_new:true}
    this.$http.post('/api/com/getcom',search)
      .then((response) => {
        this.shopLists = response.data;
      })
      .catch((reject) => {
        console.log(reject)
      })

  },
  methods:{
    search(){

    }
  }
}
</script>
<style scoped>
.new-detail{
	background: #eee;
}
#goods{
	background:#fff;
	border: 1px #ccc solid;
	margin-top: 10px;
	border-radius: 5px;
}
h1{
	margin:0 auto;
	width: 100%;
	text-align: center;
	font-size: 0.5rem;
	font-weight: 100
}
img{
	width: 100%;
}
p{
	width: 100%;
  box-sizing: border-box;
	height: 0.6rem;
	line-height: 0.6rem;
	padding:0 0.2rem;
	font-size: 0.3rem;
  overflow: hidden;
  text-overflow:ellipsis;


}
span.new{
	display: inline-block;
	background: #ff0;
  padding:0 0.2rem;
  color: #3e3e3e;
}
span.oldPrice{
	text-decoration: line-through;
  line-height: 0.5rem;
	color: #ccc;
}
span.newPrice{
  line-height: 0.5rem;
  color: #000;
  font-size: 16px;
  font-weight: bold;
  margin-left: 0.2rem;
}
span.sign{
  display: inline-block;
  background: #f00;
  color: #fff;
  padding: 0 0.1rem;
  margin-left: 0.2rem;
  margin-right: 0.1rem;
}
span.right{
	display: inline-block;
}
#bot{
  box-sizing: border-box;
  padding: 0 0.3rem;
	height: 0.6rem;
  text-align: center;
}
</style>
