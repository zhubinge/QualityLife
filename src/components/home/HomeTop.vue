<template>
  <header class="home-top">
  <div class="top">
    <h2 class="l">{{title}}</h2>
    <router-link to="/detail/all" class="iconfont">&#xe62c;</router-link>
  </div>
    <div class="two">
      <ul class="twoul">
        <router-link to="/index/home" tag="li" active-class="active" class="l">首页</router-link>
        <router-link to="/index/newdetail" tag="li" active-class="active" class="l">新品</router-link>
        <router-link tag="li" active-class="active" class="l" key="classList"
         v-for="classList in classLists" :to="'/index/class/' + classList.class_id">
         {{classList.class_name}}</router-link>
<!--         <router-link to="/index/kitchen" tag="li" active-class="active" class="l">厨房餐饮</router-link>
        <router-link to="/index/life" tag="li" active-class="active" class="l">家居布艺</router-link>
        <router-link to="/index/decorate" tag="li" active-class="active" class="l">节日礼品</router-link>
        <router-link to="/index/bedding" tag="li" active-class="active" class="l">床品</router-link>
        <router-link to="/index/travel" tag="li" active-class="active" class="l">园艺</router-link>
        <router-link to="/index/know" tag="li" active-class="active" class="l">收纳整理</router-link>
        <router-link to="/index/about" tag="li" active-class="active" class="l">关于{{title}}</router-link> --> 
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  name: 'home-top',
  data () {
    return {
      title:'Quality Life',
      classLists:[]
    }
  },
  components: {
  },
  beforeCreate () {
    this.$http.get('/api/class/getclass')
      .then((response) => {
        this.classLists = response.data
      })
      .catch((reject) => {
        console.log(reject)
      })
  }
}
</script>
<style scoped>
header.home-top{
  width: 100%;
  color: #fff;
  text-align: center;
  overflow: hidden;
  border-bottom: 0.04rem solid #ccc;
  position: fixed;
  z-index: 1;
}
.home-top .top{
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  background: #ffda75;
  padding-left:0.3rem;
  box-sizing: border-box;
}
.home-top .top h2{
  width: 4.9rem;
  height: 100%;
  padding-left: 1rem;
}
.home-top .top a{
  display: inline-block;
  width: 1rem;
  height: 100%;
  font-size: 20px;
  color: #fff;
}
.home-top .two{
  width: 7.5rem;
  height: 1rem;
  line-height: 1rem;
  overflow: hidden;
  overflow-x: scroll;
  background: #fff;
}
.home-top .two .twoul{
  width: 21rem;
}
.home-top .two .twoul li{
  /*width: 1.1rem;*/
  height: 0.9rem;
  line-height: 1rem;
  padding: 0 0.4rem;
}
.home-top .two .twoul li:nth-child(9),.home-top .two .twoul li:nth-child(10){
  width: 2rem;
}
li{
  color: #3e3e3e;
}
.active{
  color: #ffda75;
  border-bottom: 0.1rem solid #ffda75;
}
/*.home-top input.two{
  width: 100%;
  height: 0.7rem;
  border-radius: 0.35rem;
  text-indent: 1em;
  text-align: center;
  margin: 0.2rem 0;
}
::-webkit-input-placeholder {
  text-align: center;
  color: #666;
 }
::-moz-placeholder {
  text-align: center;
  color: #666;
}
:-ms-input-placeholder { 
  text-align: center;
  color: #666;
}
input:-moz-placeholder {
  text-align: center;
  color: #666;
}*/
</style>
