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
<<<<<<< HEAD
          <img :src="'static/images/commodity/carousel_' + detailList.com_id + '_' + n + '.jpg'">
=======
          <img :src="'static/images/commodity/carousel_' + detailList.com_id + '_' + n + '.jpg'" style="height: 8rem;">

>>>>>>> a910a5b1eddce98f4cecda913ac2f2381dcf9c66
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

          <img :src="'static/images/commodity/detail_' + detailList.com_id + '_' + n + '.jpg'" style="height: 6rem; width:100%">
        
        
      </div>
      </div>
<<<<<<< HEAD
      <h3>商品：</h3>
      <div><span class="name">拖把</span></div>
=======
   
>>>>>>> a910a5b1eddce98f4cecda913ac2f2381dcf9c66
  </div>
</template>
<script>
export default {
    name: 'detail-list',
    data () {
    return {
      detailLists: {},
      count:0
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
</style>