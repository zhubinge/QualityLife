<template>
  <div id="login">
		<div id="login_header">
			<a href="/"><</a>
			<span>我的</span>
			<span> </span>
		</div>
		<div id="login_banner1">
			<img class="l" src="">
			<div class="l">
				<span>已登陆</span>
				<p>130****5962</p>
			</div>
		</div>
		<div id="login_banner2">
			<div class="l">
				<i class="iconfont orange"></i>
				<p>余额</p>
			</div>
			<div class="l">
				<i class="iconfont red"></i>
				<p>优惠</p>
			</div>
			<div class="l">
				<i class="iconfont green"></i>
				<p>积分</p>
			</div>
		</div>
		<div id="login_bottom">
			<div class="login_hui"></div>
			<ul>
				<li><i class="iconfont blue"></i><a href="#">我的订单</a></li>
				<li><i class="iconfont red"></i><a href="#">积分商城</a></li>
				<li><i class="iconfont orange"></i><a href="#">饿了么会员卡</a></li>
			</ul>
			<div class="login_hui"></div>
			<ul>
				<li><i class="iconfont blue"></i><a href="#">服务中心</a></li>
				<li><i class="iconfont blue"></i><a href="#">下载饿了么APP</a></li>
			</ul>
		</div>
		<bottom-nav></bottom-nav>
  </div>
</template>

<script>
import BottomNav from '../BottomNav'
export default {
  name: 'login',
  components: {
    BottomNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login .login_orange{color: #ff9900;}
#login .login_red{color:#ff5f3e;}
#login .login_green{color:#6ac20b ;}
#login .login_blue{color:#4aa5f0 ;}


#login #login_header{
	height: 0.8rem;
	line-height: 0.8rem;
	display: flex;
	justify-content: space-between;
	background: #0097ff;
	padding: 0 0.18rem;
}
#login #login_header span,#login #login_header a{
	color: #fff;
	font-size: 16px;
	font-weight: bold;
}
#login #login_banner1{
	overflow: hidden;
	padding: 0.16rem;
	background: #0097ff;
	color: #fff;
}
#login #login_banner1 img{
	margin-right: 0.24rem;
}
#login #login_banner1 div.l a{
	height:0.3rem;
	line-height: 0.3rem;
	font-size: 20px;
	margin-top:0.4rem;
	color: white;
}
#login #login_banner1 div.l p{
	height: 0.25rem;
	line-height: 0.25rem;
	margin-top:0.3rem; 
}
#login #login_banner2{
	display: flex;
	border-bottom: 1px solid #ccc;

}
#login #login_banner2 div{
	flex: 1;
	text-align: center;
	height: 1.2rem;
	padding-top: 0.2rem;
	border-right: 1px solid #ccc;
}
#login #login_banner2 i{
	font-size: 30px;
}
#login #login_banner2 p{
	height: 0.3rem;
}
#login #login_bottom{
	background: #f4f4f4;
	height: 100%;	
}
#login #login_bottom ul i{
	margin-right: 0.15rem;
}
#login .login_hui{
	height: 0.15rem;
}
#login #login_bottom li{
	height: 0.8rem;
	line-height: 0.8rem;
	font-size:16px ;
	text-indent: 0.3rem;
	border-bottom: 1px solid #ccc;
	background: #fff;
}
#login #login_bottom i{
	font-size: 18px;
}
</style>
