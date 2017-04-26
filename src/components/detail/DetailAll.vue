<template>
<div>
    <div class="top_nav">
        <p>全部产品</p>
    </div>
    <div class="search">
        <input type="text" placeholder="搜索商品">
    </div>
    <div class="h_box" v-for="detailList in detailLists">
<<<<<<< HEAD
        <p class="h_title">{{detailList.class_name}}</p>
        <ul class="product">
            <router-link :to="list.info_id" tag="li" class="l" v-for="list in detailList.class_info">
                <img :src="'static/images/dateilall/' + list.imgSrc"/>
=======
        <div class="h_title">
            <p>{{detailList.class_name}}</p>
        </div>
        <ul class="product" v-for="list in detailList.class_info">
            <router-link tag="li" :to="'/detail/class/' + list.info_id" class="l" >
                <img :src="'static/images/dateilAll/' + list.imgSrc"/>
>>>>>>> ca94cd4688879de4bd824f0da276a89f37a4b584
                <p class="product_title">{{list.text}}</p>
            </router-link>
        </ul>
    </div>
    <bottom-nav></bottom-nav>
</div>
</template>
<script>
import Vuex from 'vuex'
import BottomNav from '../BottomNav'
export default {
    name: 'detail-all',
    data () {
        return {
            detailLists:{}
        }
    },
    beforeCreate () {
<<<<<<< HEAD
        this.$http.get('/api/class/getclass')
          .then((response) => {
            this.detailLists = response.data;
            console.log(this.detailLists)
=======
        var that = this;//=======================
        this.$http.get('/api/class/getClass')
          .then((response) => {
<<<<<<< HEAD

            that.detailLists = response.data;
            console.log(that.detailLists)
            
=======
            that.detailLists = response.data;
            console.log(that.detailLists)

>>>>>>> fa77722879a201c8114d18f2468395c1ecaf773f
>>>>>>> ca94cd4688879de4bd824f0da276a89f37a4b584
          })
          .catch((reject) => {
            console.log(reject)
          })
    },
    components:{
        BottomNav
    },
 }
</script>
<style scoped>
#detail-all{
    width:1.45rem;
    height: 100%;
    background: #f8f8f8;
    overflow: hidden;
    position: fixed;
    top:  3.9rem;
    left: 0;
}
#detail-all li{
    width:1.45rem;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    font-size: 14px;
    color: #a0a0a0;
    box-sizing: border-box;
    border-left: 0.06rem solid #eee;
    border-bottom: 0.02rem solid #eee;
}

#detail-all li.active{
    background: #fff;
    color: #0096ff;
    border-left: 0.06rem solid #0096ff;
}
.top_nav{
    width:100%;
    height: 1rem;
    /*background: #ffda75;*/
    background:#ffda75;
}
.top_nav p{
    text-align: center;
    font-size: 20px;
    color: #fff;
    height: 1rem;
    line-height: 1rem;
}
.search{
    width:100%;
    height: 1.2rem;
    background:#f2f2f2;

}
.search input{
    width: 80%;
    height: 0.8rem;
    border-radius: 0.2rem;
    margin-left: 10%;
    font-size: 16px; 
    text-align: center;
    margin-top: 0.2rem;
}
.h_box{
    width:100%;
    overflow: auto;
}
.h_box .h_title{
    width: 100%;
    height: 1.3rem;
    background: #f2f2f2;
    line-height: 1.8rem;
    font-size: 18px;
}
.h_box .h_title p{
    width: 100%;
    text-align: center;
}
.h_box .product{
    width: 100%;
    overflow:hidden;
}
.h_box:nth-child(9){
    margin-bottom: 2rem;
}
.h_box .product li{
    width: 33%;
    border:1px solid  #f2f2f2;
    border-left: none;
    border-top: none;
}

.h_box .product li img{
    width: 60%!important;
    margin: auto;
    padding-top: 0.2rem;    
}
.h_box .product li p{
    height: 0.2rem;
    line-height: 0.2rem;
    padding-bottom: 0.2rem;
    padding-top: .5rem;
    margin:auto;
    text-align: center;
}

</style>
