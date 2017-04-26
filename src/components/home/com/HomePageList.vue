<template>
	<div class="shop-page-list">
      <ul class="img">
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
      <div class="faker"></div>   
	</div>
</template>
<script>
export default {
  name: 'home-page-list',
  data () {
    return {
      lists: {},
      list: {},
      carousels: {},
      shopLists: {},
      img: {},
      imgs: {},
      pic: {},
      pics: {},
      loop: {},
      loops: {},
      year: {},
      years: {},
      col: {},
      cols: {},
      last: {},
      lasts: {}
      carousels: {}
    }
  },
  beforeCreate () {
<<<<<<< HEAD
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
=======
    // fetch('static/json/shop_page.json')
    //   .then(response => response.json())
    //   .then(data => {
    //     this.lists = data.shop_list
    //     this.imgs = data.shop_class
    //     this.pics = data.shop_picture
    //     this.loops = data.shop_circle
    //     this.years = data.shop_round
    //     this.cols = data.shop_data
    //     this.lasts = data.shop_last
    //   })
>>>>>>> 0a286c381ee78ceab894394a4b65b81c48ff6330
  }
}
</script>
<style scoped>
.shop-page-list{
  overflow:hidden;
}
.shop-page-list .img li{
	margin-top:.2rem;
  overflow:hidden;
}
.shop-page-list .img  img{
	width:100%;
	height:3rem;
}
.shop-page-list .group{
  text-align: center;
  overflow:hidden;
}
.shop-page-list .group li{
  float:left;
  width:2.4rem;
  height:3rem;
}
.shop-page-list .group li img{
  width:2.4rem;
  height:2rem;
}
.shop-page-list .group li p{
  font-size:12px;
}
.shop-page-list .group .second{
  color:#ac2c2b;
}
.shop-page-list .group li:nth-child(2){
  margin:0 0.1rem;
}
.shop-page-list .group li:nth-child(5){
  margin:0 0.1rem;
}

.slide{
  width:100%;
  height:.3rem;
  background:#ccc;
}
.word{
  text-align: center;
  color:red;
  margin-top:.5rem;
  margin-bottom:.2rem;
  color:#ac2c2b;
}


.shop-page-list .picture{
  text-align: center;
  overflow:hidden;
}
.shop-page-list .picture li{
  float:left;
  width:2.4rem;
  height:3rem;
}
.shop-page-list .picture li img{
  width:2.4rem;
  height:2rem;
}
.shop-page-list .picture li p{
  font-size:12px;
}
.shop-page-list .picture .second{
  color:#ac2c2b;
}
.shop-page-list .picture li:nth-child(2){
  margin:0 0.1rem;
}
.shop-page-list .picture li:nth-child(5){
  margin:0 0.1rem;
}



.shop-page-list .loop{
  text-align: center;
  overflow:hidden;
  font-size:12px;
  border:.1rem solid #ac2c2b;
}
.shop-page-list .loop li{
  float:left;
  width:2.3rem;
  height:3rem;
}
.shop-page-list .loop li img{
  width:2.4rem;
  height:2rem;
}
.shop-page-list .loop li p span{
  margin-left:.1rem;
  text-decoration:line-through;
  color:#bebebe;
}
.shop-page-list .loop .second{
  color:#ac2c2b;
}
/*.shop-page-list .loop span{
  display:inline-block;
}*/
.shop-page-list .loop li:nth-child(2){
  margin:0 0.1rem;
}
.shop-page-list .loop li:nth-child(5){
  margin:0 0.1rem;
}






.shop-page-list .content{
  text-align: center;
  height:1.5rem;
  background:#ac2c2b;
  overflow:hidden;
  color:#d4c6bd;
}
.shop-page-list .content h2{
  margin-top:.2rem;
}

.shop-page-list .nav{
  height:1rem;
  background:#ac2c2b;
  line-height:1rem;
  text-align: center;
  color:#d4c6bd;
  margin-top:.2rem;
}


.shop-page-list .year{
  text-align: center;
  overflow:hidden;
}
.shop-page-list .year li{
  float:left;
  width:3.6rem;
  height:3rem;
  border:.1rem solid #ac2c2b;
}
.shop-page-list .year li:nth-child(odd){
  border-right:none;
}
.shop-page-list .year li:nth-child(3){
  border-top:none;
  border-bottom:none;
}
.shop-page-list .year li:nth-child(4){
  border-top:none;
  border-bottom:none;
}
.shop-page-list .year li img{
  width:3.6rem;
  height:3rem;
}
.shop-page-list .year li p{
  font-size:12px;
}
.shop-page-list .year .second{
  color:#ac2c2b;
}

.shop-page-list .empty{
  background:#ccc;
  height:.3rem;
  width:100%;
  margin-top:.5rem;
  margin-bottom:.3rem;
}


.shop-page-list .sale{
  height:1.5rem;
  text-align: center;
}
.shop-page-list .sale h2{
  color:#ac2c2b;
}




.shop-page-list .col{
  text-align: center;
  overflow:hidden;
}
.shop-page-list .col li{
  float:left;
  width:3.5rem;
  height:4rem;
}
.shop-page-list .col li img{
  width:3.5rem;
  height:4rem;
}
.shop-page-list .col li p{
  font-size:12px;
}
.shop-page-list .col .second{
  color:#ac2c2b;
}
.shop-page-list .col li{
  margin:0 0.1rem;
}
.shop-page-list .col .pos{
  position:relative;
}
.shop-page-list .col .poss{
  position:absolute;
  bottom:3rem;
  left:.1rem;
  color:black;
}
.shop-page-list .col .poss P:nth-child(2){
  font-size: 16px;
}

.shop-page-list .slow{
  text-align: center;
  height:1.5rem;
  line-height: 1.5rem;
  color:#ac2c2b;
}





.shop-page-list .last{
  overflow: hidden;
  text-align: center;
}
.shop-page-list .last li{
  float:left;
  width:3.5rem;
  height:4rem;
  margin-left:.15rem;
}
.shop-page-list .last li img{
  width:3.5rem;
  height:3rem;
}
.shop-page-list .last li p{
  font-size:12px;
}
.shop-page-list .last li p:nth-child(3){
  color:#ac2c2b;
}
.shop-page-list .last li:nth-child(2){
  margin:0 0.1rem;
}
.shop-page-list .last li:nth-child(5){
  margin:0 0.1rem;
}


.shop-page-list .foot{
  text-align: center;
  background:#eee;
  height:1rem;
  line-height: 1rem;
}




.shop-page-list .faker{
  width:100%;
  height:1rem;
}

</style>
