<template>
  <div class="new-detail">
    <h1>最近一周新品</h1>
    <div id="goods">
    	<img src="static/image/carousel_10102_4.jpg">
    	<p>防滑洗碗手套</p>
    	<span class="new">新品首发优惠</span><span class="newPrice">￥ 49</span><span class="oldPrice">￥ 59</span><span class="sign">新</span>
    	<span class="right">评论：0</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'new-detail'
}
</script>
<style scoped>
.new-detail{
	background: #eee;
	padding: 8px
}
#goods{
	background:#fff;
	border: 1px #ccc solid
}
h1{
	margin:0 auto;
	margin-top: 100px;
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
	height: 0.6rem;
	line-height: 0.6rem;
	text-indent: 0.5rem;
	font-size: 0.3rem
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
</style>
