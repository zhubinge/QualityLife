<template>
  <div class="new-detail">
    <h1>最近一周新品</h1>
    <div v-for="shopList in shopLists" id="goods">
    	<router-link :to="'/detail/' + shopList.com_id">
        <img :src="'static/images/commodity/'+shopList.com_img">
      	<p>{{shopList.com_name}}}</p>
      	<div id="bot">
        	<span class="new">新品首发优惠</span><span class="newPrice">￥ {{shopList.original_price}}</span><span class="oldPrice">￥{{shopList.present_price}}</span><span class="sign">新</span>
        	<span class="right">评论：0</span>
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
	padding: 8px
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
	height: 3.3rem
	
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
	margin-left: 0.5rem;

}
span.oldPrice{
	text-decoration: line-through;
	color: #ccc;

}
span.sign{
	display: inline-block;
	background: #f00;
	color: #fff;
	margin-left: 0.1rem
}
span.right{
	display: inline-block;
	float: right;
	margin-right: 0.8rem
}
#bot{
	height: 30px;
}
</style>
