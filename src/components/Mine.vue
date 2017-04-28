<template>
<div>
    <div class="mine_nav">
        <h2 class="mine_nav2 l">账户中心</h2>
        <router-link to="/index/set" class="l iconfont">&#xf0003;</router-link>
    </div>
    <div class="box"></div>
    <div class="loginRegisterChunk">
    	<p>您 还 未 登 陆</p>
    	<div class="loginRegisterBoxWords">
    		<router-link to="/login">登陆</router-link>
    		<router-link to="/register">注册</router-link>
    	</div>
    </div>
    <ul class="server">
    	<li class="l"><a href="#"><i class="iconfont">&#xe625;</i>待支付</a></li>
    	<li class="l"><a href="#"><i class="iconfont">&#xe677;</i>待发货</a></li>
    	<li class="l borderNone"><a href="#"><i class="iconfont">&#xe646;</i>待收货</a></li>
    	<li class="l"><a href="#"><i class="iconfont">&#x34bc;</i>待评论</a></li>
    	<li class="l"><a href="#"><i class="iconfont">&#xe630;</i>回复</a></li>
    	<li class="l borderNone"><a href="#"><i class="iconfont">&#xe629;</i>退换货</a></li>
    </ul>
    <bottom-nav></bottom-nav>
</div>
</template>
<script>
import BottomNav from './BottomNav'
export default {
  name: 'mine',
  components: {
    BottomNav
  }
}
</script>
<style scoped>
.mine_nav{
	width: 100%;
	height: 1rem;
	line-height: 1rem;
    background: #ffda75;
    color: #fff; 
    position: fixed;
}
.box{
	width: 100%;
	height: 1rem;
}
.mine_nav .mine_nav2{
	width: 80%;
	margin-left: 10%;
    text-align: center;
}
.mine_nav a.iconfont{
	font-size: 26px;
	color: #fff;
}
.loginRegisterChunk{
	width: 100%;
	height: 2.2rem;
	background: url(../../static/images/login_background.jpg) no-repeat center;
}
.loginRegisterChunk p{
	width: 100%;
	height: 1rem;
	line-height: 1rem;
	text-align: center;
	font-size: 16px;
	font-weight: bold;
	color: #666;
}
.loginRegisterChunk .loginRegisterBoxWords{
	width: 4rem;
	height: 0.8rem;
	line-height: 0.8rem;
	border-radius: 0.5rem;
	border:0.02rem solid #ffda75;
	background: rgba(255,255,255,0.5);
	position: relative;
	left: 50%;
	margin-left: -2rem;
}
.loginRegisterChunk .loginRegisterBoxWords a{
	display: inline-block;
	width: 1.95rem;
	height: 0.8rem;
	box-sizing: border-box;
	font-size: 16px;
	font-weight: bold;
	color: #ffda75;
	margin: 0;
	padding: 0;
}
.loginRegisterChunk .loginRegisterBoxWords a:nth-child(1){
	border-right:0.02rem solid #ffda75;
}
.loginRegisterChunk .loginRegisterBoxWords a:nth-child(1){
	border-right:0.02rem solid #ffda75;
}
.server{
	width: 100%;
	height: 2.2rem;
}
.server li{
	width: 27%;
	height: 0.9rem;
	border-right: 1px solid #ccc;
	padding: 0.2rem;
}
.server li.borderNone{
	border-right: none;
}
</style>
