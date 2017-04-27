<template>
<div>
    <div class="mineNav">
        <h2 class="mineNav2 l">账户中心</h2>
        <span class="l">设置</span>
    </div>
    <div class="loginRegisterChunk">
    	<p>您 还 未 登 陆</p>
    	<div class="loginRegisterBoxWords">
    		<span>登陆</span>
    		<span>注册</span>
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
    <router-view class="child-view"></router-view>
    <bottom-nav></bottom-nav>
</div>
</template>
<script>
import BottomNav from './BottomNav'
export default {
  name: 'account',
  components: {
    BottomNav
  }
}
</script>
<style scoped>
.mineNav{
	width: 100%;
	height: 1rem;
	line-height: 1rem;
    background:#ffda75;
    color: #fff;
}
.mineNav .mineNav2{
	width: 80%;
	margin-left: 10%;
    text-align: center;
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
	padding: 0.1rem;
	width: 4rem;
	margin-left: 25%;
	height: 0.6rem;
	border:1px solid #ffda75;
	border-radius: 0.5rem; 
}
.loginRegisterChunk .loginRegisterBoxWords span{
	display: inline-block;
	width:1.9rem;
	height: 0.6rem;
	line-height: 0.6rem;
	text-align: center;
	font-size: 16px;
	font-weight: bold;
	color: #ffda75;
}
.loginRegisterChunk .loginRegisterBoxWords span:nth-child(1){
	border-right:1px solid #ffda75;
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
