<template>
  <div class="Kitchen">
    <ul class="household_ul">
    	<li v-for="item in items" class="household_items l">
    		<img :src="item.img1">
    		<p>{{item.title}}</p>
    	</li>
    </ul>
    <div class="pic">
		<img src="static/images/household_img/2.jpg">
    </div>
    <div class="recommend">
    	<h4 class="subcat-title">
    		Rico.S的精心推荐：
    	</h4>
    	<ul class="household_ul2">
    		<li v-for="recommend in recommends">
    			<img :src="recommend.img2">
    			<span class="title">{{recommend.title}}</span>
    			<span class="new">新 </span>
    			<div class="price">
    				<span class="l">￥{{recommend.price}}</span>
    				<span class="r">评论：{{recommend.comment}}</span>
    			</div>
    		</li>
    	</ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Kitchen',
  data () {
    return {
       items:{},
       img1:{},
       household_products:{},
       recommend:{},
       recommends:{},
       title:{},
       price:{},
       comment:{},
       img2:{}
    }
  },
	  beforeCreate () {
	    fetch('../static/json/house_hold.json')
	      .then(response => response.json())
	      .then(data => {
	        this.items = data.household_products;
	        console.log(this.items);
	        this.recommends = data.household_recommends;
	        console.log(this.recommends);
	      })
	}

}
</script>
<style scoped>
.Kitchen{
	background-color:#f2f2f2;
}
.household_ul{
	overflow: hidden;
	width: 100%;
	background: #fff;
}
.household_ul .household_items{
	width: 25% !important;
	height: 2rem;
	margin-top: 0.5rem;
}
.household_ul .household_items img{
	width: 80%;
	margin-left: 10%;
	text-align: center;
	height: 1.5rem;
}
.household_ul p{
	text-align: center;
}
.pic{
	width: 100%;
	margin-top: 0.3rem;

}
.pic img{
	width: 100%;
}
.recommend{
	width: 100%;
	overflow: hidden;
	height: auto;
}
.subcat-title{
	max-width: 96%;
    text-align: center;
    font-size: 1.5em;
    color: #000;
    line-height: 2.5em;
}
.household_ul2{
	background: #fff;
}
.household_ul2 li{
	margin-top: .2rem;
	overflow: hidden;
}

.household_ul2 .title{
	padding:0 0.3rem;
	margin-top: 0.1rem
}
.household_ul2 .new{
	background:#f00;
	color:#fff;
}
.household_ul2 .price{
	padding:0 0.3rem;
	margin-top: 0.1rem;
}
.household_ul2 .price .r{
	color: #999;
}
</style>
