<template>
  <div id="login">
  	<div id="fff">
		<div id="login_header">
			<router-link to="javascript :history.back(-1);" class="l iconfont">&#xe604;</router-link>
			<span class="one">登录</span>
		</div>
		<div class="two">
			<div class="ipt-box"  v-if="user">
				<input type="text" placeholder="用户名"
					onfocus="this.placeholder=''" 
					onblur="this.placeholder='用户名'"
					class="ipt" ref="user"
					v-model="params.username"
					@input="ruleFun('u')">
				<b v-if="ruleu === true" class="ok">√</b>
				<b v-if="ruleu === false" class="no">×</b>
				<b v-if="ruleu === 0" class="atwill"></b>
			</div>
			<div class="ipt-box"  v-if="tel">
				<input type="text" placeholder="手机号码"
					onfocus="this.placeholder=''" 
					onblur="this.placeholder='手机号码'"
					class="ipt"ref="tel"
					v-model="params.tel"
					@input="ruleFun('t')">
				<b v-if="ruleu === true" class="ok">√</b>
				<b v-if="ruleu === false" class="no">×</b>
				<b v-if="ruleu === 0" class="atwill"></b>
			</div>
			<div class="ipt-box">
<!-- 			vue-validator 内置一些常用的验证规则：
				required — 输入值不能为空
				pattern — 必须匹配pattern表示的正则表达式
				minlength — 输入值长度不能小于minlength表示的值
				maxlength — 输入的值不能大于maxlength表示的值
				min — 输入值不能小于min表示的值
				max — 输入值不能大于max表示的值 -->
				<input type="text" placeholder="请输入密码"
					onfocus="this.placeholder=''"
					onblur="this.placeholder='请输入密码'"
					class="ipt" ref="password"
					v-model="params.password"
					pattern
					@input="ruleFun('p')">
				<b v-if="rulep === true" class="ok">√</b>
				<b v-if="rulep === false" class="no">×</b>
				<b v-if="rulep === 0" class="atwill"></b>
			</div>
			<button @touchend="login">登录</button>
			<button @touchend="register">注册</button>
			<p class="rule ok" v-if="ruleu === true">
				* 用户名：字母8-16位,汉字6-12位。
			</p>
			<p class="rule no" v-if="ruleu === false">
				* 用户名：字母8-16位,汉字6-12位。
			</p>
			<p class="rule atwill" v-if="ruleu === 0">
				* 用户名：字母8-16位,汉字6-12位。
			</p>
			<p class="rule ok" v-if="rulep === true">
				* 密码8-16位,可以包含数字/字母/下划线。<br/>&nbsp;&nbsp;
			</p>
			<p class="rule no" v-if="rulep === false">
				* 密码8-16位,可以包含数字/字母/下划线。<br/>&nbsp;&nbsp;
			</p>
			<p class="rule atwill" v-if="rulep === 0">
				* 密码8-16位,可以包含数字/字母/下划线。<br/>&nbsp;&nbsp;
			</p>
		</div>
	</div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import md5 from 'js-md5'
export default {
	name: 'login',
	data () {
		return {
			tel: false,
			user: true,
		    rulep: 0,
		    ruleu: 0,
	  		params : { 
            	username : '',
            	password : '',
            	tel : ''
            }
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
	  	ruleFun (w) {
            let userfocus = 0;
            let pwdfocus = 0;
	  		if (w === 'p') {
	  			pwdfocus = 1
	  		}else if(w === 'u') {
	  			userfocus = 1
	  		}else{
	  			return
	  		}
	  		if ( this.params.username !== '' && this.params.username !== undefined && userfocus === 1) {
		  		//user不为空
	  			if((/[\u4e00-\u9fa5]+/).test(this.params.username) === true){
	  				if(this.params.username.length >= 6 && this.params.username.length < 12){
		  				this.ruleu = true
		  				return
	  				}else{
		  				this.ruleu = false
		  				return
	  				}
	  				return
	  			}else{
		  			if(this.params.username.length >= 8 && this.params.username.length < 16) {
		  				this.ruleu = true
		  				return
					}else{
		  				this.ruleu = false
		  				return
					}
					return
	  			}
	  			return
	  		}else if(this.params.password !== '' && this.params.password !== undefined && pwdfocus === 1) {
  				//password不为空
  				if(this.params.password.length >= 8 && this.params.password.length < 16) {
	  				this.rulep = true
	  				return
				}else{
	  				this.rulep = false
	  				return
				}
				return
			}else{
		  		if (userfocus === 1) {
  					this.ruleu = false
  					return
		  		}	  		
	  			if (pwdfocus === 1) {
		  			this.rulep = false
		  			return
		  		}
	  			return
	  		}
		},
	  	isExist (params) {
	        this.$http.post('/api/login/getaccount',params)
	        	.then((res) => {
	            	if (res.data.status) {
	            		if (res.data.status === 1) {
	            			//用户名不存在，可以注册
	            			return true
	            		}else if(res.data.status === 2){
	            			//用户名已存在
							this.alertFun('用户名已存在，请重新输入！')
							return
	            		}else if(res.data.status === 0){
	            			//数据库响应失败
							this.alertFun('服务器响应失败，请稍候重试！')
							return
	            		}else{
							this.alertFun('注册失败，请重试！')
							return
	            		}
	            	}else{
	            		return
	            	}
	        	})
		        .catch((reject) => {
		        	console.log(reject)
		        })
	  	},
    	register () {
    		let params = {};
    		if (this.user === true) {
    			params.username = this.params.username,
    			params.password = this.params.password
    		}else if(this.user === true){
    			params.tel = this.params.tel,
    			params.password = this.params.password
    		}else{
    			return
    		}
			if (this.rulep === true && this.ruleu === true) {
  				var e = this.isExist(params);
  				console.log(this.isExist(params))
			  	if ( 'haha' === true) {
			  		console.log('params true')
			        this.$http.post('/api/login/createAccount',params)
			        	.then((response) => {
							this.params.username = ''
			  				this.params.password = ''
			        		if(response.data.status === 1){
								this.alertFun('注册成功，请登录！')
								return
			          		}else if(response.data.status === 0){
								this.alertFun('服务器响应失败，请稍候重试！')
								return
			          		}else{
								this.alertFun('注册失败，请重试！')
								return
			          		}
			        	})
				        .catch((reject) => {
				        	console.log(reject)
				        })
				    return
			    }
			}else{
				this.alertFun('用户名或密码不正确，请重新输入！')
				return
			}
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
	        this.$http.get('/api/login/getAccount')
	        	.then((res) => {
	            	console.log(res.data)
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
#login .two .atwill{
	color: #fff;
}


</style>
