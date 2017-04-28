<template>
  <div id="login">
  	<div id="fff">
		<div id="login_header">
			<router-link to="javascript :history.back(-1);" class="l iconfont">&#xe604;</router-link>
			<span class="one">登录</span>
		</div>
		<div class="two">
			<div class="ipt-box">
				<input type="text" placeholder="用户名"
					onfocus="this.placeholder=''" 
					onblur="this.placeholder='用户名'"
					class="ipt" v-if="user" ref="user"
					@input="ruleFun">
				<b v-if="ruleu === true" class="ok">√</b>
				<b v-if="ruleu === false" class="no">×</b>
				<b v-if="ruleu === 0" class="atwill"></b>
			</div>
			<div class="ipt-box">
				<input type="text" placeholder="请输入密码"
					onfocus="this.placeholder=''"
					onblur="this.placeholder='请输入密码'"
					class="ipt" ref="password"
					@input="ruleFun">
				<b v-if="rulep === true" class="ok">√</b>
				<b v-if="rulep === false" class="no">×</b>
				<b v-if="rulep === 0" class="atwill"></b>
			</div>
			<button @touchend="login">登录</button>
			<button @touchend="ruleFun('reg')">注册</button>
			<p class="rule ok" v-if="ruleu === true && rulep === true">* 密码8-16位,必须以字母开头,<br/>&nbsp;&nbsp;并且包含数字/字母/下划线,<br/>&nbsp;&nbsp;不能是纯数字/字母/下划线。</p>
			<p class="rule no" v-if="ruleu === false || rulep === false">* 密码8-16位,必须以字母开头,<br/>&nbsp;&nbsp;并且包含数字/字母/下划线,<br/>&nbsp;&nbsp;不能是纯数字/字母/下划线。</p>
			<p class="rule atwill" v-if="ruleu === 0 && rulep === 0">* 密码8-16位,必须以字母开头,<br/>&nbsp;&nbsp;并且包含数字/字母/下划线,<br/>&nbsp;&nbsp;不能是纯数字/字母/下划线。</p>
		</div>
	</div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
	name: 'login',
	data () {
		return {
			tel: false,
			user: true,
			userRule: /^[A-Za-z]{1}\w{8,16}/,
		    rulep: 0,
		    ruleu: 0
	  	}
	},
	components: {
	},
	methods: {
		alertFun (message) {
			Toast({
				message: message ,
				position: 'center',
				duration: 2000
			});
		},
	  	setCookie(){
		  	document.cookie = 'user=' + this.$refs.user.value
		  	console.log(document.cookie)
	  	},
	  	ruleFun (reg) {
	  		let params = { 
            	username : this.$refs.user.value,
            	password : this.$refs.password.value
            };
	  		if (this.$refs.password.value !== '' && this.$refs.password.value !== undefined ) {
		  		this.rulep = true
		  		if ( this.$refs.user.value !== '' && this.$refs.user.value !== undefined ) {
		  			let userRule = this.userRule
		  			if(userRule.test(this.$refs.user.value)){
		  				this.ruleu = true
		  				//格式验证成功，数据库校验用户名
		  				if(reg === 'reg'){
		  					this.$refs.user.value = ''
				  			this.$refs.password.value = ''
			  				this.isExist(params);
		  				}else{
		  					return
		  				}
					}else{
		  				this.ruleu = false
		  				if (reg === 'reg') {
		  					this.$refs.user.value = ''
				  			this.$refs.password.value = ''
			  				this.alertFun(
			  					'密码8-16位,必须以字母开头，' +
			  					'可以包含数字、字母、下划线。' +
			  					'请重新输入！'
			  				)
		  				}
		  			}
		  		}else{
		  			this.rulep = false
		  			if (reg === 'reg') {
		  				this.$refs.user.value = ''
				  		this.$refs.password.value = ''
						this.alertFun('密码不能为空，请重新输入！')
		  			}
		  		}
	  		}else{
		  		this.ruleu = false
		  		if (reg === 'reg') {
		  			this.$refs.user.value = ''
				  	this.$refs.password.value = ''
					this.alertFun('密码不能为空，请重新输入！')
		  		}
	  		}
	  	},
	  	isExist (params) {
	        this.$http.post('/api/login/getaccount',params)
	        	.then((res) => {
	            	if (res.data.status) {
	            		if (res.data.status === 1) {
	            			//用户名不存在，可以注册
	            			this.register (params)
	            		}else if(res.data.status === 2){
	            			//用户名已存在
							this.alertFun('用户名已存在，请重新输入！')
	            		}else if(res.data.status === 0){
	            			//数据库响应失败
							this.alertFun('服务器响应失败，请稍候重试！')
	            		}else{
							this.alertFun('注册失败，请重试！')
	            		}
	            	}
	        	})
		        .catch((reject) => {
		        	console.log(reject)
		        })
	  	},
    	register (params) {
	        this.$http.post('/api/login/createAccount',params)
	          .then((response) => {
	          	if(response.data.status === 1){
					this.alertFun('注册成功，请登录！')
	          	}else if(response.data.status === 0){
					this.alertFun('服务器响应失败，请稍候重试！')
	          	}else{
					this.alertFun('注册失败，请重试！')
	          	}
	          })
	          .catch((reject) => {
	            console.log(reject)
	          })
		},
		login (params) {
	        // 获取已有账号密码
	        this.$http.post('/api/login/getAccount',params)
	        	.then((res) => {
	            	console.log(res.data)
	            	if (res.data.status) {
	            		if (res.data.status === 1) {
	            			//用户名不存在，可以注册
							this.alertFun('用户名密码不匹配，请重新输入！')
	            		}else if(res.data.status === 2){
	            			//用户名密码匹配成功
			  				// this.setCookie()
							this.alertFun('登陆成功！')
	            		}else if(res.data.status === 0){
	            			//数据库响应失败
							this.alertFun('服务器响应失败，请稍候重试！')
	            		}else{
							this.alertFun('注册失败，请重试！')
	            		}
	            	}
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
	background-color: #ffda75;
	text-align: center;
	padding: 0 0.18rem;
	color: #000;
	font-size: 20px;
}
#login #login_header a{
	color: #000;
	font-size: 20px;
}
#login .two{
	width: 6.4rem;
	position: absolute;
	bottom: 1.3rem;
	left: 50%;
	margin-left: -3.2rem;
	overflow: hidden;
}
#login .two .ipt-box{
	position: relative;
}
#login .two .ipt-box b{
	margin: 0;
	display: block;
	width: 0.5rem;
	height: 0.5rem;
	line-height: 0.55rem;
	border: 0.04rem solid #fff;
	border-radius: 50%;
	position: absolute;
	right: 0rem;
	top: 50%;
	margin-top: -0.25rem;
	text-align: center;
	font-size: 20px;
}
#login .two .ipt-box b.no{
	line-height: 0.5rem;
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
	color: #ffda75;
}
#login .two input{
	width: 88%;
	background: rgba(0,0,0,0.3);
	border-radius: 0.2rem;
}
::-webkit-input-placeholder{
	color: #ccc;
} 
:-moz-placeholder {
	color: #ccc; 
} 
::-moz-placeholder {
	color: #ccc; 
} 
:-ms-input-placeholder {
	color: #ccc; 
} 
#login .two input.ipt{
	text-indent: 1em;
}
#login .two button,#login .two a{
	border: 0;
	color: #000;
	background: #ffda75;
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
	margin-top: 0.5rem;
}
#login .two .ok{
	color: green;
}
#login .two .no{
	color: red;
}


</style>
