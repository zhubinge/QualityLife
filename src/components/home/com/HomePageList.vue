<template>
	<div class="shop-page-list">
      <ul class="img">
      	<li v-for="img in imgs">
      		<img :src="img.imgSrc">	
      	</li> 
      </ul>
      <ul class="group">
        <li v-for="list in lists">
          <img :src="list.shopDetailImg">
          <p>{{list.shopDetailName}}</p>
          <p class="second">￥{{list.shopDetailprize}}</p>             
        </li>           
      </ul>
      <div class="slide"></div>
      <h2 class="word">夏凉床品 新品首发</h2>
      <ul class="picture">
        <li v-for="pic in pics">
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
          <img :src="year.shopDetailImg">
          <span>{{year.shopDetailName}}</span>
        </li>
      </ul> 
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
      years: {}
    }
  },
  beforeCreate () {
    fetch('static/json/shop_page.json')
      .then(response => response.json())
      .then(data => {
        this.lists = data.shop_list
        this.imgs = data.shop_class
        this.pics = data.shop_picture
        this.loops = data.shop_circle
        this.years = data.shop_round
      })
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




.shop-page-list .faker{
  width:100%;
  height:1rem;
}

</style>
