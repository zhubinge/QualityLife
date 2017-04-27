<<<<<<< HEAD
<template>
  <div class="account_page">
    <bottom-nav></bottom-nav>
  </div>
</template>
<script>
import BottomNav from './BottomNav'
export default {
  name: 'account',
  data () {
    return {
      carousels:{},
      classLists:{},
      comList:{}
    }
  },
  components: {
    BottomNav
  },
  beforeCreate () {
    //首页轮播图
    var homeSearch = {
      content :'home_carousels'
    };
    this.$http.post('/api/home/getContent',homeSearch)
      .then((response) => {
        this.carousels = response.data
      })
      .catch((reject) => {
        console.log(reject)
      })
    //分类
    this.$http.get('/api/class/getClass')
      .then((response) => {
        this.classLists = response.data
      })
      .catch((reject) => {
        console.log(reject)
      })
  },
  methods: {
    all(){
      this.$http.get('/api/com/getcom')
        .then((response) => {
          console.log(response.data)
        })
        .catch((reject) => {
          console.log(reject)
        })
    },
    search(){
      var search = {"info_id":101}
      this.$http.post('/api/com/getcom',search)
        .then((response) => {
          console.log(response.data)
        })
        .catch((reject) => {
          console.log(reject)
        })
    }
  }
}
</script>
<style scoped>
ul.l{
  height: 5rem;
  margin-left: 0.2rem;
}
input,button{
  border: 0.04rem solid #ccc;
  height: 0.8rem;
  font-size: 20px;
}
</style>
=======
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
>>>>>>> a910a5b1eddce98f4cecda913ac2f2381dcf9c66
