<template>
<div class="detailClassBody">
	<div class="top_nav"  v-for="product in productLists">
        <a href="javascript:history.back()" class="l"> < </a>
         <p class="l">{{product.class_name}}</p>

    </div>
    <div class="top_nav2">
        <span>新品</span>
        <span>畅销</span>
        <span>价格</span>
    </div>
    <div class="productsList">
        <div v-for="productList in productLists" class="goods">
            <li :to="'/detail/' + productList.com_id">
            <img :src="'static/images/commodity/'+productList.com_img">
            <p>{{productList.com_name}}</p>
            <div id="bot">
                <span class="sign" v-if="productList.is_recommend">推荐</span>
                <span class="newPrice">￥ {{productList.original_price}}</span>
                <span class="oldPrice">￥{{productList.present_price}}</span>
                <span class="new" v-if="productList.is_new">新</span>
                <span class="right">评论：{{productList.sales_count}}</span>
             </div>
           </li>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'detail-class',
    data () {
        return {
            productLists:{},
            productList:{}
        }
    },
    beforeCreate () {
    	var cla = location.href;
    	cla = cla.slice(37);
        var that = this;
      // var search = {info_id:this.$route.params.classId}
      var search = {"info_id":cla}
      console.log(search)
      this.$http.post('/api/com/getcom',search)
        .then((response) => {
          that.productLists = response.data
          console.log(that.productLists);
        })
        .catch((reject) => {
          // console.log(reject)
        })
      // this.$http.get('/api/class/getClass')
      // .then((response) => {
      //   that.classLists = response.data
      //   console.log(that.classLists)
      // })
      // .catch((reject) => {
      //   console.log(reject)
      // })

    },
}
</script>
<style scoped>
.detailClassBody{
    background: #f2f2f2;
}
.top_nav{
    width:100%;
    height: 1rem;
    /*background: #ffda75;*/
    background:#ffda75;
}
.top_nav a{
	width: 10%;
	color: white;
	font-size: 0.5rem;
    height: 1rem;
    line-height: 1rem;
}
.top_nav p{
	width: 80%;
    text-align: center;
    font-size: 20px;
    color: #fff;
    height: 1rem;
    line-height: 1rem;
}
.top_nav2{
    display: flex;
    background: #fff;
}
.top_nav2 span{
    flex: 1;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
    color: #999;
    border-right: 1px solid #f2f2f2;
}
.top_nav2 span:nth-child(3){
    border:none;
}
/*粘的的样式*/
.productsList{
    background: #eee;
    padding: 8px;
/*    height: 100px;
*/}
.goods{
    background:#fff;
    border: 1px #ccc solid;
    margin-top: 10px;
    border-radius: 5px;
}
img{
    width: 100%;
    height: 3.3rem
    
}
p{
    width: 100%;
  box-sizing: border-box;
    height: 0.6rem;
    line-height: 0.6rem;
    padding:0 0.2rem;
    font-size: 0.3rem;
  overflow: hidden;
  text-overflow:ellipsis;


}
span.new{
    display: inline-block;
    background: #f00;
    margin-left: 0.2rem;
    color: #fff

}
span.oldPrice{
    text-decoration: line-through;
    color: #ccc;

}
span.sign{
    display: inline-block;
    background: #ff0;
    margin-left: 0.1rem
}
span.right{
    display: inline-block;
    float: right;
    margin-right: 0.2rem
}
#bot{
    height: 30px;
}
</style>
