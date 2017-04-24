<template>
<div>
    <div class="top_nav">
        <p>全部产品</p>
    </div>
    <div class="search">
        <input type="text" placeholder="搜索商品">
    </div>
    <div class="h_box" v-for="h_item in h_items">
        <div class="h_title">
            <p>{{h_item.typeName}}</p>

        </div>
        <ul class="product">
            <li class="l" v-for="product in h_items">
                <img :src="product.typeName"/>
            <p class="product_title">{{product.typeName}}</p>
            <div v-for="pre in product">
                <p>{{pre.classText}}</p>
                <p>{{pre.imgsrc}}</p>
            </div>         
            </li>
        </ul>
    </div>

    <router-view class="child-view"></router-view>
    <bottom-nav></bottom-nav>
</div>
</template>
<script>
import BottomNav from './BottomNav'
export default {
    name: 'detail-all',
    data () {
        return {
           h_items:{},
           h_item:{},
           typeName:{},
           product_class:{},
           classText:{},
           imgsrc:{},
           product:{},
           products:{}
        }
      },
      beforeCreate () {
        fetch('../static/json/detail_all.json')
          .then(response => response.json())
          .then(data => {
            console.log(data.shoptype);
            this.h_items = data.shoptype
          })
    },
    //  beforeCreate () {
    //     fetch('static/json/shop_page.json')
    //     .then(response => response.json())
    //     .then(data => {
    //     this.shopMessages = data.shop_list[this.$route.params.id]
    // })
    components:{
        BottomNav
    },
//     methods:{
//     listTouchFun: function (e) {
//         var li = document.getElementsByClassName('list')[0].children
//         for (var i = 0; i < li.length; i++) {
//             li[i].className = ''
//         }
//         e.target.className = 'active'
//     },
//     add:function(detail){
//         detail.count++
//         console.log(detail.count)
//     },
//     minus:function(detail){
//         if (detail.count <= 1) {
//             detail.count = 0
//         }else{
//             detail.count--            
//         }
//         console.log(detail.count)
//     }
// },
//     beforeCreate () {
//         fetch('static/json/shop_page.json')
//         .then(response => response.json())
//         .then(data => {
//         this.shopMessages = data.shop_list[this.$route.params.id]
//     });
//   }
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
    overflow: hidden;
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
    padding-bottom: 0.1rem;
    padding-top: .5rem;
    margin:auto;
    text-align: center;
}

</style>
