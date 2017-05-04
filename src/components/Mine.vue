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
    <ul class="myMessage">
    	<li><a href="#"><span class="l"><i class="iconfont">&#xe652;</i>我的订单</span><span class="r"><i class="iconfont">&#xe609;</i></span></a></li>
    	<li><a href="#"><span class="l"><i class="iconfont">&#xe605;</i>我的优惠券</span><span class="r"><i class="iconfont">&#xe609;</i></span></a></li>
    	<li><a href="#"><span class="l"><i class="iconfont">&#xe61c;</i>现金积分</span><span class="r"><i class="iconfont">&#xe609;</i></span></a></li>
    	<li><a href="#"><span class="l"><i class="iconfont">&#xe684;</i>关于发票</span><span class="r"><i class="iconfont">&#xe609;</i></span></a></li>
    	<li><a href="#"><span class="l"><i class="iconfont">&#xf0003;</i>密码和登陆信息</span><span class="r"><i class="iconfont">&#xe609;</i></span></a></li>
    	<li><a href="#"><span class="l"><i class="iconfont">&#xe652;</i>老会员建议</span><span class="r"><i class="iconfont">&#xe609;</i></span></a></li>
    	<li><a href="#"><span class="l"><i class="iconfont">&#xe80a;</i>客户服务</span><span class="r"><i class="iconfont">&#xe609;</i></span></a></li>
    	<li><a href="#"><span class="l"><i class="iconfont">&#xe5b4;</i>地址管理</span><span class="r"><i class="iconfont">&#xe609;</i></span></a></li>
    	<li><a href="#"><span class="l"><i class="iconfont">&#xe6e2;</i>手机验证</span><span class="r"><i class="iconfont">&#xe609;</i></span></a></li>
    </ul>
    <div class="box"></div>
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
.box{
	height: 1rem;
	width: 100%;
}
.mine_nav{
	width: 100%;
	height: 1rem;
	line-height: 1rem;
    background: #ffda75;
    color: #fff; 
    position: fixed;
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
	z-index: 666s;
	width: 100%;
	height: 3rem;
	background: url(../../static/images/background.jpg) no-repeat center;
	position: relative;
}
.loginRegisterChunk p{
	width: 100%;
	height: 50%;
	line-height: 1.5rem;
	text-align: center;
	font-size: 18px;
	font-weight: bold;
	color: #fff;
}
.loginRegisterChunk .loginRegisterBoxWords{
	width: 4rem;
	height: 0.8rem;
	line-height: 0.8rem;
	border-radius: 0.5rem;
	border:0.02rem solid #ffda75;
	background: rgba(255,255,255,0.5);
	position: absolute;
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
	overflow: hidden;
	border-bottom: 1px solid #ccc;
}
.server li{
	width: 33%;
	height: 0.6rem;
	padding:0.2rem 0;
}
.server li a{
	display: inline-block;
	width: 100%;
	height: 100%;
	border-right: 1px solid #ccc;
}
.iconfont{
	font-size: 20px;
	margin-right: 0.2rem;
}
.server li.borderNone a{
	border-right: none;
}
.myMessage{
	padding: 0 0.2rem;
	overflow: auto;
	width: 100%;
	box-sizing: border-box;
}
.myMessage li{
	width: 100%;
	height: 1rem;
	line-height: 1rem;
}
.myMessage li a{
	display: inline-block;
	width: 100%;
	height: 1rem;
	line-height: 1rem;
	border-bottom: 1px solid #ccc;
}

.myMessage li:nth-child(1) span:nth-child(1) .iconfont{
	color: #00d800;
}
.myMessage li:nth-child(2) span:nth-child(1) .iconfont{
	color: #e94;
	opacity: 0.5;
}
.myMessage li:nth-child(3) span:nth-child(1) .iconfont{
	color: #f99dee;
	opacity: 0.5;
}
.myMessage li:nth-child(4) span:nth-child(1) .iconfont{
	color: #99dd00;
	opacity:0.5;
}
.myMessage li:nth-child(5) span:nth-child(1) .iconfont{
	color: #9699fc;
}
.myMessage li:nth-child(6) span:nth-child(1) .iconfont{
	color: #fe9822;
}
.myMessage li:nth-child(7) span:nth-child(1) .iconfont{
	color: #3df9a3;
}
.myMessage li:nth-child(8) span:nth-child(1) .iconfont{
	color: #f9b462;
}
.myMessage li:nth-child(9) span:nth-child(1) .iconfont{
	color: #ccc;
    height: 1rem;
    line-height: 1rem;
}

</style>
