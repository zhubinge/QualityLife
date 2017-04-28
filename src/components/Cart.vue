<template>
<div class="sum">
	<div class="header">
		<span class="s"><a href="javascript:history.back()">&lt;</a></span>
		<h1 class="h">购物车</h1>
		<div class="alter">
			<span class="iconfont">&#xf0003;</span>
			<p>修改</p>
		</div>
	</div>
	<div class="login">
		<router-link to="/login"><a href=""><button>登录</button></a></router-link>
		<span class="log">你可以在登录后同步电脑与手机购物车中的商品</span>
	</div>
	<div class="change">
		<input type="text" class="int l" placeholder="礼品兑换处，请输入兑换码">
		<input type="button" value="兑换" class="int1 l">
	</div>
	<div class="year">
		<span class="f">6周年</span>
		<span class="s">满300，全场75折，截止4月28日</span>
	</div>
	<div class="horse">
		<span class="f"></span>
		<img src="static/images/cart.jpg">
		<div class="content">
			<p class="s">
				<span>马桶强力疏通器</span>
				<span>￥36</span>
			</p>
			<p class="t">
				<span>￥39</span>
			</p>
			<p class="p">
				<span>新品首发优惠</span>
				<span>x 1</span>
			</p>
		</div>
	</div>
</div>
</template>
<script>
import HomeTop from './home/HomeTop'
import BottomNav from './BottomNav'
export default {
  name: 'cart',
  components: {
    HomeTop,
    BottomNav
  }
}
</script>
<style scoped>
.sum{
	background:#fff;
}
.header{
	background:#ffda75;
	width:100%;
	height:1rem;
	text-align:center;
	line-height:1rem;
	display:flex;
	flex:10;
	color:#fff;
}
.header a{
	color:#fff;
}
.header .s{
	flex:2;
	font-size: 26px;
}
.header .h{
	flex:6;
	font-size: 20px;
}
.header .alter{
	flex:2;
	margin-right:.2rem;
}
.header .alter{
	display:flex;
	flex:2;
}
.header .alter span{
	flex:1;
	font-size: 26px;
}
.header .alter p{
	flex:1;
	font-size: 18px;
}
.login{
	display:flex;
	flex:10;
	height:1rem;
	background: #f0fae6;
}
.login a{
	flex:3;
	height:1rem;
}
.login a button{
	width:1.4rem;
	height:0.7rem;
	border:1px solid #8bc146;
	margin-top:.12rem;
	color:#8bc146;
	background:#fff;
}
.login .log{
	flex:7;
	height:1rem;
	margin-top:.05rem;
	color:#333;
	display: table-cell;
}
.change{
	height:1.1rem;
	background:#fff;
	border-bottom:1px solid #e7e7e7;
}
.change .int{
	width:80%;
	height:0.8rem;
	margin-top: .1rem;
	margin-left:1%;
	border:1px solid #e7e7e7;
}
.int::-webkit-input-placeholder {
	text-align: center;
}
.change .int1{
	width:16%;
	height:0.8rem;
	margin-top:.11rem;
	margin-right:1%;
	border:1px solid #8bc146;
	color:#8bc146;
	background:#fff;
}
.year{
	height:1rem;
	border:1px solid #e7e7e7;	
}
.year .f{
	width:.8rem;
	height:.4rem;
	background:#ab2c2b;
	color:#fff;
	margin-top:.3rem;
	margin-left:.4rem;
	display:inline-block;
	text-align: center;
}
.year .s{
	display:inline-block;
	margin-left: .1rem;	
}
.horse{
	height:2rem;
	border-bottom:1px solid #e7e7e7;
}

.horse .f{
	width:.5rem;
	height:.5rem;
	border:1px solid #a9a9a9;
	border-radius: 100%;
	float:left;
	margin-top:.8rem;
	margin-left:.5rem;
}
.horse img{
	float:left;
	width:2rem;
	height:2rem;
}
.horse .content{
	float:left;
	margin-left:.5rem;
}
.horse .content p{
	margin-top:.15rem;
}
.horse .content .s span:nth-child(2){
	margin-left:1rem;
}
.horse .content .t span{
	margin-left:3.05rem;
	font-size: 12px;
	text-decoration:line-through;
	color:#a9a9a9;
}
.horse .content .p span:nth-child(2){
	margin-left: 1.5rem;
}
</style>
