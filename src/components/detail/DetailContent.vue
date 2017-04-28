<template>
<div class="detail_content">
  <div id="top"><div class="return"><a href="javascript:history.back()" style="color:#fff;font-size:0.5rem;"><</a></div>商品介绍</div>
    <mt-swipe
     id="detail_list"
     v-for=" detailList in detailLists"
     :auto="3000"
     :speed="1500"
     :show-indicators="true"
     key="detailList"
     style="height: 8rem;"
     >
      <mt-swipe-item class="l page" v-for="n in detailList.carousel_count"
      key="n">
          <img :src="'static/images/commodity/carousel_' + detailList.com_id + '_' + n + '.jpg'">
          <img :src="'static/images/commodity/carousel_' + detailList.com_id + '_' + n + '.jpg'" style="height: 8rem;">
      </mt-swipe-item>
    </mt-swipe>
    <div class="goodstop" v-for="detailLists in detailLists">
      <h3>{{detailLists.com_name}}</h3>
      <span class="newprice price">￥{{detailLists.original_price}}</span>
      <span class="oldprice price">￥{{detailLists.present_price}}</span>
      <div class="left"><span class="new">新价格</span> </div>
      <div class="left right"><span class="sign" v-if="detailLists.is_new">新</span></div>
      </div>
      <h3>数量：</h3>
      <div class="count">
        <span class="reduce" v-on:click="reduce()">-</span>
        <input type="text" :value="count"  />
        <span class="plus" v-on:click="plus()">+</span>
      </div>
      <div>
          <ul>
            <li><a href="#" class="tag">商品介绍</a></li>
            <li><a href="#">规格参数</a></li>
            <li><a href="#">评论</a></li>
          </ul>
      </div>
      <div v-for=" detailList in detailLists">
        <div v-for="n in detailList.detail_count" key="n">
          <img :src="'static/images/commodity/detail_' + detailList.com_id + '_' + n + '.jpg'" style="height: 6rem; width:100%" />
        </div>
      </div>
      <h3>商品：</h3>
      <div><span class="name">拖把</span></div>   
      <div id="footer">
        <ul>
        <router-link to="/index">
             <li class="second"><i class="iconfont">&#xe600;</i>首页</li>
          </router-link>
          <router-link to="/index">
            <li class="first"><i class="iconfont">&#xe636;</i>客服</li>
          </router-link>
          <router-link to="/cart">
              <li class="third"><i class="iconfont">&#xe60d;</i></li>
          </router-link>
          
             <li class="fourth" v-on:click="change()">加入购物车</li>
          
        </ul>
        
      </div>
      <div id="other" v-if="other">
        <div class="optt"></div>
        <div class="cart" v-for="detailLists in detailLists">
          <h1 v-on:click="change()">X</h1>
          <img :src="'static/images/commodity/'+detailLists.com_img">
          <h3>{{detailLists.com_name}}</h3>
          <button>确定</button>
        </div>
      </div>
 
  </div>
</template>
<script>
export default {
    name: 'detail-list',
    data () {
    return {
      detailLists: {},
      count:1,
      other:false
    }
  },
  beforeCreate () {
    var search = {com_id:this.$route.params.detailId}
    this.$http.post('/api/com/getcom',search)
      .then((response) => {
        this.detailLists = response.data;
        console.log(this.detailLists)
    })
  },
  methods:{
    reduce:function(){
      this.count--;
      if(this.count<=0){
        this.count=0;
      }
    },
    plus:function(){
      this.count++;
    },
    change:function(){
      if(this.other===true){
        this.other=false;
      }else{
      this.other=true}
    }
  }

}
</script>
<style scoped>
#detail_list{
  height: 8rem;

}
#detail_list img{
  height: 8rem;
}

#top{
  height: 1rem;
  width: 100%;
  background:#ffda75;
  text-align: center;
  font-size: 0.4rem;
  color: #fff;
  line-height: 1rem
}
#top .return{
  float: left;
}
#detail_list{
  width: 7.5rem;
  height: 5rem;
  position: relative;
}
#detail_list div.page{
  width: 7.5rem;
  height: 5rem;
  background: red;
  position: absolute;
  display: block;
  box-sizing: border-box;
}
#detail_list div.page img{
  width: 100%;
  height: 5.1rem;
}
.goodstop{
  width: 100%;
  height: 2.8rem;
  border-bottom: 1px solid #ccc;


}
.goodstop h3{
  width: 100%;
  text-align: center;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.4rem;
  font-weight: 100;
}
.goodstop span{
  display: block;
  width: 47%;
  float: left;
  height: 0.6rem;
  line-height:0.6rem; 
  margin-top: 0.5rem;
}
.left{
  width: 46%;
  float: left;
  margin-left: 0.4rem
}
.right{
  margin-left: 0;
}
.goodstop .new,.newprice{
  text-align: right;
  padding-right: 10px;
}
.goodstop .new{
  font-size:0.2rem;
  width: 0.8rem;
  float: right;
  background: #ff0;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  margin-top: 10px

}
.goodstop .sign{
  background: red;
  color: #fff;
  margin-left: 5px;
  width: 0.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  margin-top: 10px

}
.price{
  font-size: 0.4rem
}
.newprice{
  color: red;
}
.oldprice{
  color: #aaa;
  text-decoration: line-through;
}
.name{
  width: 1rem;
  height: 0.7rem;
  border:1px #ccc solid;
  line-height: 0.7rem;
  text-align: center;
}
.count{
  width: 2.7rem;
  height: 1.4rem;
  margin:0 auto;
}
.count .reduce,.plus{
  display: block;
  width: 0.7rem;
  height: 0.6rem;
  background: #eee;
  border:1px solid #ccc;
  text-align: center;
  line-height: 0.6rem;
  float:left;
  font-size: 0.6rem;
}
.count input{
  float: left;
  border: 1px solid #ccc;
  width: 1rem;
  height: 0.59rem;
  text-align: center;
  font-size: 0.4rem
}
ul{
  height: 1rem;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;

}
li{
  float: left;
  width: 33%;
  text-align: center;
  line-height: 1rem;
}
a{
  display: inline-block;
  height: 0.6rem;
  line-height: 0.6rem

}
a.tag{
  background: #ffda75;
  color: #fff;
  border-radius: 10px;
}
#footer{
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 1.1rem;
}
#footer ul{
  width: 100%;
  background: #fff;
  height: 1.1rem;
  line-height: 1.1rem;

}
#footer ul li.first{
  width: 1.5rem;
  color: #ffda75;
}
#footer ul li.second{
  width: 1.5rem;
  color: #ffda75
}
#footer ul li.third{
  width: 2rem;
  height: 1.1rem;
}
#footer ul li.third .iconfont{
  height: 90%;
  margin-top: 0;
  font-size: 0.5rem;
  color: #f60;
  border: 1px solid #f60;
  border-radius: 10px;
  margin-top: 2px;
  box-sizing: border-box;
}
#footer ul li.fourth{
  width: 2.2rem;
  height: 1.1rem;
  background: #ffda75;
  border-radius: 10px;
  margin-left: 10px;
  height: 0.8rem;
  line-height: 0.8rem;
  margin-top: 8px;
  color: #fff;
  font-size: 0.3rem;
}
.iconfont{
  display: block;
  height: 0.4rem;
  margin-top: -0.13rem;
  font-size: 0.4rem;
  color: #ffda75
}
#other{
  position: fixed;
  height: 100%;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 99999
}
#other .optt{
  height: 50%;
  width: 100%;
  background: #000;
  opacity: 0.3;
}
#other .cart{
  background: #fff;
  height: 50%;
  width: 100%
}
#other .cart h1{
  text-align: right;
  height: 1rem;
  font-weight: 100;
  font-size: 0.4rem
}
#other .cart img{
  height: 2rem;
  width: 2rem;
  margin:0 auto;
  border-radius: 1px solid #0ff;
}
#other .cart h3{
  width: 100%;
  text-align: center;
  height: 1rem;
  line-height: 1rem;
}
#other .cart button{
  width: 3rem;
  height: 1rem;
  border-radius: 10px;
  background: #ffda75;
  margin:1.5rem auto;
  display: block;
  color: #fff;
}
a{
  display: inline;
}
</style>