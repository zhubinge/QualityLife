<template>
<div class="sum">
	<div class="header">
		<router-link to="javascript:history.back()" class="l">↺</router-link>
		<h2>{{title}}</h2>
		<span class="iconfont r">&#xf0003;</span>
	</div>
	<div class="login">
		<button>登录</button>
		<div>你可以在登录后同步电脑与手机购物车中的商品</div>
	</div>
	<bottom-nav></bottom-nav>
</div>
</template>
<script>
import BottomNav from './BottomNav'
export default {
  name: 'cart',
  data(){
  	return {
	  title:'购物车'
  	}
  },
  components: {
    BottomNav
  }
}
</script>
<style scoped>
.sum{
	background:#fff;
}
.header{
	width:100%;
	height:1rem;
	line-height:1rem;
	background:#ffda75;
	text-align:center;
	box-sizing: border-box;
	color:#fff;
	padding: 0 0.3rem;
}
.header h2{
	display: inline-block;
}
.header a,.header span{
	color: #fff;
	font-size: 26px;
	font-weight: bold;
}
.header .login{
	display:flex;
	height:1rem;
}
</style>
