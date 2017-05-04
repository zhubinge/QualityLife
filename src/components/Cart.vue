<template>
<div class="sum">
	<div class="header">
		<router-link to="javascript:history.back()" class="l iconfont">&#xe604;</router-link>
		<h2>{{title}}</h2>
		<span class="iconfont r">&#xf0003;</span>
	</div>
	<div class="fak"></div>
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
		<button class="f" @touchend="chan" ref="lol"
		 :style="{'background-color': backgroundC, 'border-color': borderC}"

		 >√</button>
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
	<div class="local">
		<span class="f">送至：</span>
		<span class="s">北京  ∨</span>
		<div class="content">
			<p class="t">北京￥99包邮</p>
			<p class="p">你还差<span>￥149,</span>即可享受<span>免运费</span></p>
		</div>
	</div>
	<div class="empty">
		<div></div>
		<div></div>
	</div>
	<div class="order">
		<p>凑单免运费：</p>
		<p>查看凑单单位<span>＞</span></p>
	</div>
	<div class="img">
		<ul>
			<li>
				<img src="/static/images/detailall/703.jpg">
				<p>不伤手的立白</p>
				<p>￥19</p>
			</li>
			<li>
				<img src="/static/images/detailall/704.jpg">
				<p>不伤手的立白</p>
				<p>￥19</p>
			</li>
			<li>
				<img src="/static/images/detailall/705.jpg">
				<p>不伤手的立白</p>
				<p>￥19</p>
			</li>
			<li>
				<img src="/static/images/detailall/706.jpg">
				<p>不伤手的立白</p>
				<p>￥19</p>
			</li>
			<li>
				<img src="/static/images/detailall/707.jpg">
				<p>不伤手的立白</p>
				<p>￥19</p>
			</li>
		</ul>
	</div>
	<div class="foot">
		<div class="f l" >
			<span class="f" @touchend="chan" ref="lol"
		 :style="{'background-color': backgroundC, 'border-color': borderC}">√</span>
			<span class="o">全选</span>
		</div>
		<div class="s l">
			<p>合计：￥0</p>
			<p>商品 ￥0 - 优惠 ￥0</p>
		</div>
		<div class="t l">
			<p>去结算</p>
		</div>
	</div>
	<div class="faker"></div>
	<bottomNav></bottomNav>
</div>
</template>
<script>
import { DatetimePicker } from 'mint-ui'
import HomeTop from './home/HomeTop'
import BottomNav from './BottomNav'
export default {
  name: 'cart',
  data(){
  	return {
  		title:'购物车',
  		backgroundC:'white',
  		borderC:'#ccc'
  	}
  },
  components: {
    BottomNav
  },
  methods: {
  	chan(){
  		console.log(document.cookie)
  		if (this.borderC === '#8bc146') {
	  		this.borderC = '#a9a9a9';
	  		this.backgroundC = '#fff';  			
  		}else{
	  		this.borderC = '#8bc146';
	  		this.backgroundC = '#8bc146';  			
  		}
  	}
  }
}
</script>
<style scoped>
.sum{
	background:#fff;
/*	position: relative;*/
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
	position:fixed;
}
.header a{
	color:#fff;
}
.header .l{
	flex:2;
	font-size: 26px;
}
.header h2{
	flex:6;
	font-size: 20px;
}
.header .r{
	flex:2;
	font-size: 26px;
}
.fak{
	height:1rem;
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
	line-height:.5rem;
	text-align: center;
	border:1px solid #a9a9a9;
	border-radius: 100%;
	float:left;
	margin-top:.8rem;
	margin-left:.5rem;
	color: #fff;
	font-weight: bold;
	font-size: 16px;
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
.local{
	height:1rem;
	background:#fff;
	border-bottom:1px solid #e7e7e7;
}
.local .f{
	float:left;
	margin-top:.3rem;
	margin-left:.2rem;
}
.local .s{
	float:left;
	margin-top:.3rem;
	width:1rem;
	height:.5rem;
	border:1px solid #e7e7e7;
	text-align:center;	
}
.local .content{
	float:left;
	margin-left:.3rem;
	margin-top:.1rem;
}
.local .content .p span{
	color:#cc0000;
}
.empty{
	height:.6rem;
}
.empty div:nth-child(1){
	background:#fff;
	height:.3rem;
}
.empty div:nth-child(2){
	background:#eee;
	height:.3rem;	
}
.order{
	height:1rem;
	background:#fff;
	line-height: 1rem;
	border-bottom:1px solid #e7e7e7;
}
.order p:nth-child(1){
	margin-left:.2rem;
	float:left;
}
.order p:nth-child(2){
	float:right;
	margin-right:.3rem;
}
.order p:nth-child(2) span{
	font-size:16px;
	margin-left:.2rem;
}
.img{
    width: 1069px;
    height: 3.3rem;
    overflow-y: hidden;
    overflow-x: scroll;
    border-bottom: 1px solid #e7e7e7;
}
.img ul{
	width:1069px;
}
.img ul li{
	width:2rem;
	height:3rem;
	display:inline-block;
	float:left;
}
.foot{
	height:1rem;
	background:#fff;
	border-bottom:1px solid #e7e7e7;
}
.foot .f span:nth-child(1){
	display:inline-block;
	width:.4rem;
	height:.4rem;
	border-radius: 100%;
	border:1px solid #a9a9a9;
	margin-top:.3rem;
	margin-left:.4rem;
	float: left;
}
.foot .f .o{
	margin-top:.3rem;
	margin-left:.2rem;
	float:left;
}
.foot .s{
	margin-left:1.5rem;
	margin-top:.1rem;
	margin-right:.1rem;
}
.foot .s p{
	text-align:right;
}
.foot .t{
	width:1.8rem;
	height:1rem;
	background:#666;
	text-align:center;
	line-height:1rem;
}
.faker{
	height:1rem;
}
</style>
