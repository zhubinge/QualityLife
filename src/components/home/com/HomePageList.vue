<template>
	<div class="shop_page_list">
    <ul class="one">
      <router-link class="l" tag="li" to="">
        <i class="iconfont">&#xe601;</i>
        全场折扣
      </router-link>
      <router-link class="l" tag="li" to="/index/newdetail">
        新品首发
        <i class="iconfont">&#xe501;</i>
      </router-link>
    </ul>
    <div class="recommend_title">
      <h2>周年庆，新商品</h2>
      <p>700款人气商品&nbsp;&nbsp;超值新价格</p>
    </div>
    <ul class="shop_recommend_list">
      <router-link
       v-for="(shopList,idx) in shopLists"
       :to="'/detail/' + shopList.com_id"
       :key="idx"
       tag="li"
       class="l"
       >
        <img :src="'static/images/commodity/' + shopList.com_img">
        <p class="price">
          <b class="red">￥{{shopList.original_price}}</b>
          <span class="line">￥{{shopList.present_price}}</span>
        </p>
        <p class="shop_name">{{shopList.com_name}}</p>
      </router-link>
      <router-link to="/index/newdetail" class="bottom">周年庆，新商品，新价格<b>></b></router-link>
    </ul>
    <ul class="three">
      <li class="three_title">
        <h2>新品首发优惠</h2>
        <span>天天有新品&nbsp;&nbsp;每天来逛逛</span>
        <b></b>
        <b></b>
      </li>
      <li class="hot_list"
       v-for="(hotList,idx) in hotLists"
       :to="'/detail/' + hotList.com_id"
       :key="idx"
       tag="li"
      >
        <img :src="'static/images/commodity/detail_' + hotList.com_id + '_2' +'.jpg'">
      </li>
    </ul>

      <!-- <ul class="img">
      	<li v-for="img in imgs">
      	<li v-for="img in carousels">
      		<img :src="img.imgSrc">	
      	</li> 
      </ul>
      <ul class="group">
        <li v-for="list in lists">
        <li v-for="list in carousels">
          <img :src="list.shopDetailImg">
          <p>{{list.shopDetailName}}</p>
          <p class="second">￥{{list.shopDetailprize}}</p>             
        </li>           
      </ul>
      <div class="slide"></div>
      <h2 class="word">夏凉床品 新品首发</h2>
      <ul class="picture">
        <li v-for="pic in pics">
        <li v-for="pic in carousels">
          <img :src="pic.shopDetailImg">
          <p>{{pic.shopDetailName}}</p>
          <p class="second">￥{{pic.shopDetailprize}}</p>             
        </li>           
      </ul>
      <div class="content">
        <h2>6周年，新价格</h2>
        <p>700款人气商品 超值新价格</p>      
      </div>
      <ul class="loop">
        <li v-for="loop in loops">
        <li v-for="loop in carousels">
          <img :src="loop.shopDetailImg">
          <p class="second">￥{{loop.shopDetailprize}}<span>￥{{loop.cost}}</span> </p>
          <p>{{loop.shopDetailName}}</p>            
        </li>
      </ul>
      <div class="nav">
        <h2>更多，6周年新价格</h2>
      </div>
      <ul class="year">
        <li v-for="year in years">
        <li v-for="year in carousels">
          <img :src="year.shopDetailImg">
          <span>{{year.shopDetailName}}</span>
        </li>
      </ul>
      <div class="empty"></div>
      <div class="sale">
        <h2>热卖中</h2>
        <p>大家都在买的好东西</p>
      </div>
      <ul class="col">
        <li v-for="col in carousels">
          <img :src="col.shopDetailImg">
          <div class="pos">
            <div class="poss">
              <p>{{col.shopDetailName}}</p>
              <p>￥{{col.shopDetailprize}}</p>              
            </div>
          </div>
        </li>
      </ul>
      <div class="slow">
        <h2>慢慢逛</h2>        
      </div>
      <ul class="last">
        <li v-for="last in carousels">
          <img :src="last.shopDetailImg">
          <p>{{last.shopDetailName}}</p>
          <p>￥{{last.shopDetailprize}}</p>
        </li>
      </ul>
      <div class="foot">
        <p>O(∩_∩)O没有更多了</p>
      </div>
      <div class="faker"></div> -->
      <div class="box"></div>
	</div>
</template>
<script>
export default {
  name: 'home-page-list',
  data () {
    return {
      carousels: {},
      shopLists:[],
      hotLists:[]
    }
  },
  beforeCreate () {
    var homeSearch = {
      content :'home_carousels'
    };
    this.$http.post('/api/home/getcontent',homeSearch)
      .then((response) => {
        this.carousels = response.data
      })
      .catch((reject) => {
        console.log(reject)
      })
    var newSearch = {
      is_recommend :true
    }
    this.$http.post('/api/com/getcom',newSearch)
      .then((response) => {
        var data = response.data;
        var arr = [];
        for (var i = 0; i < data.length; i++) {
          if (i < 6) {
            arr.push(data[i])
          }
        }
        this.shopLists = arr;
        var arr2 = [];
        var len = data.length;
        for (var i = 0; i < 3; i++) {
          arr2.push(data[Math.floor(Math.random()*len)])
        }
        this.hotLists = arr2;
      })
      .catch((reject) => {
        console.log(reject)
      })
  }
}
</script>
<style scoped>
.box{
  width: 100%;
  height: 1rem;
}
.shop_page_list{
  width: 100%;
  overflow: hidden;
}
.shop_page_list .one{
  width: 100%;
  height: 2rem;
  box-sizing: border-box;
  padding: 0.2rem 0;
  display: flex;
  text-align: center;
}
.shop_page_list .one li{
  flex: 1;
  width: 50%;
  height: 100%;
  line-height: 1.6rem;
  background: #70a8c4;
  color: #fff;
  font-size: 18px;
}
.shop_page_list .one li:nth-child(1){
  margin-right: 0.1rem;
}
.shop_page_list .one li i{
  font-size: 60px;
}
.shop_page_list .recommend_title{
  width: 100%;
  background: #72a553;
  color: #fff;
  box-sizing: border-box;
  padding: 0.3rem 0.2rem;
  text-align: center;
}
.shop_page_list .recommend_title h2{
  height: 0.7rem;
}
.shop_page_list .recommend_title p{
  font-size: 14px;
}
.shop_page_list .shop_recommend_list{
  width: 100%;
  height: auto;
  padding: 0.25rem;
  background: #72a553;
  box-sizing: border-box;
  overflow: hidden;
}
.shop_page_list .shop_recommend_list li{
  width: 3.4rem;
  height: 4.5rem;
  padding: 0.2rem;
  background: #fff;
  box-sizing: border-box;
  margin-bottom: 0.2rem;
  overflow: hidden;
}
.shop_page_list .shop_recommend_list li:nth-child(odd){
  margin-right: 0.2rem;
}
.shop_page_list .shop_recommend_list li img{
  width: 100%;
}
.shop_page_list .shop_recommend_list li p.price{
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  margin-top: 0.2rem;
}
.shop_page_list .shop_recommend_list li p.price .red{
  color: red;
}
.shop_page_list .shop_recommend_list li p.price .line{
  text-decoration:line-through;
  color: #aaa;
}
.shop_page_list .shop_recommend_list li p.shop_name{
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.shop_page_list .shop_recommend_list .bottom{
  display: block;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  color: #fff;
  text-align: center;
  clear: both;
}
.shop_page_list .shop_recommend_list .bottom b{
  display: inline-block;
  width: 0.3rem;
  height: 0.3rem;
  line-height: 0.3rem;
  border-radius: 50%;
  background: #fff;
  color: #72a553;
  text-align: center;
  margin-left: 0.1rem;
}
.shop_page_list .three{
  width: 100%;
  text-align: center;
}
.shop_page_list .three .three_title{
  width: 100%;
  height: 2rem;
  padding: 0 0.2rem;
  box-sizing: border-box;
  position: relative;
}
.shop_page_list .three .three_title h2{
  color: #72a553;
  line-height: 1rem;
}
.shop_page_list .three .three_title b{
  display: inline-block;
  top: 0;
  position: absolute;
  width: 25%;
  height: 1.2rem;
  border-bottom: 0.02rem solid #aaa;
}
.shop_page_list .three .three_title b:nth-child(3){
  left: 0.2rem;
}
.shop_page_list .three .three_title b:nth-child(4){
  right: 0.2rem;
}
.shop_page_list .three li.hot_list{
  width: 100%;
  height: 4rem;
}
.shop_page_list .three li.hot_list img{
  width: 100%;
}

</style>
