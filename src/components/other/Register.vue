<template>
  <div id="mine-register">
	<div class="register_header">
		<div class="center">
			<a href="#">登录</a>
		</div>
	</div>
	<div class="register_table">
	  <form id="userAction_regist">
			<input type="text" name="tel" placeholder="手机号" id="u_name" />
			<input type="button" value="获取验证码"  id="btnmessage"/><!-- <span id = "s_name">  </span> -->
			<input type="text" name="yanzheng" placeholder="验证码" id="s_name"/><!-- <span id="s_pass"> </span> -->
			
	  </form>
	</div>
	<div class="register_http">
		<p>温馨提示：未注册过饿了么账号的手机号，登录时将自动注册，且代表您已同意
			<a href="#">《用户服务协议》</a>
		</p>
	</div>
	<div id="register_login">
		<input type="button" value="登录" id="rege" />
	</div>
	<bottom-nav></bottom-nav>
  </div>
</template>

<script>
import BottomNav from '../BottomNav'
export default {
  name: 'mine-register',
  components: {
    BottomNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#mine-register{
	width: 100%;
	height: 100%;
	background: #f5f5f5;
}
#mine-register .register_header{
	height:0.8rem;
	background:#3199e8;
	font-size: 12px;
	color: white;
	padding: 0 0.5rem;
	box-sizing: border-box;
}
#mine-register .register_header .center a{
	color: white;
	text-align: center;
	font-size: 16px;
	
}
#mine-register .register_header .center{
	width: 50px;
	height: 0.8rem;
	text-align: center;
	margin: 0 auto;
	line-height: 0.8rem;
}
#mine-register .register_table{
	margin:0.2rem 0rem 0.2rem 0rem;  
}
#mine-register .register_table input{
	width: 100%;
	height: 0.8rem;
	border:1px solid #ccc;
	padding: 0 0.5rem;
	box-sizing: border-box;
}
#mine-register .register_http{
	font-size: 8px;
	padding: 8px;
	color: #ccc;
	padding: 0 0.5rem;
	box-sizing: border-box;
}
#mine-register .register_http a{
	color: #3199e8;
}
#mine-register #register_login{
	padding: 0 0.5rem;
	box-sizing: border-box;
}
#mine-register #register_login input{
	height: 0.8rem;
	width: 100%;
	border-radius: 0.3rem;
	background: #56d176;
	color: white;
}
</style>
