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
		<button>登录</button>
		<div>你可以在登录后同步电脑与手机购物车中的商品</div>
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
	font-size: 16px;
}
.header .login{
	display:flex;
	height:1rem;
}
</style>
