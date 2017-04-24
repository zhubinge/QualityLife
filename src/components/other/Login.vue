<template>
  <div id="login">
		<div id="login_header">
			<router-link to="/index" class="l">↺</router-link>
			<span class="one">登录</span>
		</div>
		<div class="two">
			<input type="text" placeholder="请输入手机号"
				onfocus="this.placeholder=''" 
				onblur="this.placeholder='请输入手机号'"
				class="ipt" v-if="tel" ref="tel" id="tel"
				
				><b></b>
			<input type="text" placeholder="用户名"
				onfocus="this.placeholder=''" 
				onblur="this.placeholder='用户名'"
				class="ipt" v-if="user" ref="user" id="user"
				 v-model="account"
				>
			<input type="password" placeholder="请输入密码"
				onfocus="this.placeholder=''"
				onblur="this.placeholder='请输入密码'"
				class="ipt" ref="password" v-model="password"
				>
			<button @touchend="login">登录</button>
			<button @touchend="regFun">注册</button>
			<span v-if="tel" @touchend="userFun">切换到用户名登录 ⇆</span>
			<span v-if="user" @touchend="telFun">切换到手机号登录 ⇆</span>
			<p class="rule ok" v-if="rule === true">* 密码8-16位,必须以字母开头,<br/>&nbsp;&nbsp;包含数字、字母、下划线</p>
			<p class="rule no" v-if="rule === false">* 密码8-16位,必须以字母开头,<br/>&nbsp;&nbsp;包含数字、字母、下划线</p>
			<p class="rule atwill" v-if="rule === 0">* 密码8-16位,必须以字母开头,<br/>&nbsp;&nbsp;包含数字、字母、下划线</p>
		</div>
  </div>
</template>

<script>
export default {
	name: 'login',
	data () {
		return {
			tel: false,
			user: true,
			userRule: /^[A-Za-z]{1}\w{8,16}/,
		    account : '',
		    password : '',
		    rule: 0
	  	}
	},
	components: {
	},
	methods: {
    	telFun () {
	  		this.$refs.user.value = ''
	  		this.$refs.password.value = ''
			this.user = false
	  		this.tel = true
	  	},
	  	userFun () {
	  		this.$refs.tel.value = ''
	  		this.$refs.password.value = ''
	  		this.tel = false
	  		this.user = true
	  	},
	  	regFun () {
	  		if (this.$refs.password.value !== '' && this.$refs.password.value !== undefined ) {
		  		if (this.user === true && this.$refs.user.value !== '' && this.$refs.user.value !== undefined ) {
		  			let userRule = this.userRule
		  			if(userRule.test(this.$refs.user.value)){
		  				this.rule = true
		  			}else{
		  				this.rule = false
		  			}
					console.log( 'user----' + this.$refs.user.value)
					console.log( 'password----' + this.$refs.password.value)
		  			this.$refs.user.value = ''
					this.$refs.password.value = ''
		  		}else if (this.tel === true && this.$refs.tel.value !== '' && this.$refs.tel.value !== undefined ) {

		  			console.log('tel----' + this.$refs.tel.value)
		  			console.log('password----' + this.$refs.password.value)
		  			this.$refs.tel.value = ''
		  			this.$refs.password.value = ''
		  		}else{
		  			alert('请输入正确的用户名/手机号！！')
		  		}
	  		}else{
				this.$refs.password.value = ''
				alert('密码不能为空！')
	  		}
	  	},
    	login () {
	        // 获取已有账号密码
	        this.$http.get('/api/login/getAccount')
	          .then((response) => {
	            // 响应成功回调
	            console.log(response.data)
	            let res = response.data
	            for (let i = 0; i < res.length; i++) {
		            for (let key in res[i]){
		            	console.log( key + "-------" + res[i][key])
		            }	            	
	            }
	            let params = { 
	              account : this.account,
	              password : this.password
	            };
	            // 创建一个账号密码
	            return this.$http.post('/api/login/createAccount',params);
	          })
	          .then((response) => {
	            console.log(response)
	          })
	          .catch((reject) => {
	            console.log(reject)
	          })
		}
    }
}
</script>
<style scoped>
#login{
	width: 7.5rem;
	height: 13.34rem;
	background: url("/static/images/login_background.jpg") no-repeat center;
	background-size: auto 100%;
	position: relative;
}
#login #login_header{
	height: 1rem;
	line-height: 1rem;
	background-color: rgba(255,255,255,.5);
	text-align: center;
	padding: 0 0.18rem;
	color: #666;
	font-size: 20px;
}
#login #login_header a{
	font-size: 20px;
}
#login .two{
	width: 6.4rem;
	position: absolute;
	bottom: 3rem;
	left: 50%;
	margin-left: -3.2rem;
	overflow: hidden;
}
#login .two input,#login .two button,#login .two a{
	display: block;
	width: 100%;
	height: 1rem;
	line-height: 1rem;
	margin-top: 0.5rem;
	border-bottom: 0.02rem solid #666;
	background: none;
	font-size: 18px;
}
::-webkit-input-placeholder{
	color: #888; 
} 
:-moz-placeholder {
	color: #888; 
} 
::-moz-placeholder {
	color: #888; 
} 
:-ms-input-placeholder {
	color: #888; 
} 
#login .two input.ipt{
	text-indent: 1em;
}
#login .two button,#login .two a{
	border: 0;
	background-color: rgba(444,444,444,0.4);
	border-radius: 0.2rem;
}
#login .two span{
	line-height: 1rem;
	margin-top: 0.4rem;
	font-size: 14px;
	color: #000;
}
#login .two p.rule{
	font-weight: bold;
}
#login .two p.ok{
	color: green;
}
#login .two p.no{
	color: red;
}
#login .two p.atwill{
	color: blue;
}

</style>
