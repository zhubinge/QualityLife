<template>
<div>
<h1>nihao</h1>
    <mt-swipe :auto="3000" :speed="1500" :show-indicators="false" id="detail_list">
      <mt-swipe-item class="l page" v-for=" val in carousels" key="mt1">
          <img :src="val.imgSrc" >
          heiheihei
      </mt-swipe-item>
    </mt-swipe>

    <div class="goodstop" v-for="detailLists in detailLists">
      <h3>{{detailLists.com_name}}</h3>
      <span class="newprice price">￥69</span>
      <span class="oldprice price">￥79</span>
      <div class="left"><span class="new">新价格</span> </div>
      <div class="left right"><span class="sign">新</span></div>
      </div>
      <h3>商品：</h3>
      <div><span class="name">拖把</span></div>
   
  </div>
</template>
<script>
export default {
    name: 'detail-list',
    data () {
    return {
      detailLists: {},
     
    }
  },
  beforeCreate () {
    var search = {com_id:10101}
      this.$http.post('/api/com/getcom',search)
        .then((response) => {
          this.detailLists = response.data;
          console.log(this.detailLists)
        })
        .catch((reject) => {
          console.log(reject)
        })
  }
}
</script>
<style scoped>
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
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.5rem;
  font-weight: 100;
}
span{
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
.new,.newprice{
  text-align: right;
  padding-right: 10px;
}
.new{
  font-size:0.2rem;
  width: 0.8rem;
  float: right;
  background: #ff0;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  margin-top: 10px

}
.sign{
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
</style>