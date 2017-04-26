<template>
  <div id="mine-noLogin">
		<div id="login_header">
			<a href="/"><</a>
			<span>我的</span>
			<span> </span>
		</div>
		<div id="login_banner1">
			<img class="l" src="">
			<div class="l">
				<a href="#/mine/register">登录注册</a>
				<p>登陆后显示更多特权</p>
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
  name: 'mine-noLogin',
  components: {
    BottomNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mine-noLogin .login_orange{color: #ff9900;}
#mine-noLogin .login_red{color:#ff5f3e;}
#mine-noLogin .login_green{color:#6ac20b ;}
#mine-noLogin .login_blue{color:#4aa5f0 ;}


#mine-noLogin #login_header{
	height: 0.8rem;
	line-height: 0.8rem;
	display: flex;
	justify-content: space-between;
	background: #0097ff;
	padding: 0 0.18rem;
}
#mine-noLogin #login_header span,#mine-noLogin #login_header a{
	color: #fff;
	font-size: 16px;
	font-weight: bold;
}
#mine-noLogin #login_banner1{
	overflow: hidden;
	padding: 0.16rem;
	background: #0097ff;
	color: #fff;
}
#mine-noLogin #login_banner1 img{
	margin-right: 0.24rem;
}
#mine-noLogin #login_banner1 div.l a{
	height:0.3rem;
	line-height: 0.3rem;
	font-size: 20px;
	margin-top:0.4rem;
	color: white;
}
#mine-noLogin #login_banner1 div.l p{
	height: 0.25rem;
	line-height: 0.25rem;
	margin-top:0.3rem; 
}
#mine-noLogin #login_banner2{
	display: flex;
	border-bottom: 1px solid #ccc;

}
#mine-noLogin #login_banner2 div{
	flex: 1;
	text-align: center;
	height: 1.2rem;
	padding-top: 0.2rem;
	border-right: 1px solid #ccc;
}
#mine-noLogin #login_banner2 i{
	font-size: 30px;
}
#mine-noLogin #login_banner2 p{
	height: 0.3rem;
}
#mine-noLogin #login_bottom{
	background: #f4f4f4;
	height: 100%;	
}
#mine-noLogin #login_bottom ul i{
	margin-right: 0.15rem;
}
#mine-noLogin .login_hui{
	height: 0.15rem;
}
#mine-noLogin #login_bottom li{
	height: 0.8rem;
	line-height: 0.8rem;
	font-size:16px ;
	text-indent: 0.3rem;
	border-bottom: 1px solid #ccc;
	background: #fff;
}
#mine-noLogin #login_bottom i{
	font-size: 18px;
}

</style>
