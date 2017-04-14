<template>
    <div id="cartcon">
        <div id="cartcon-top">
            <div class="hd">
                <span>购物车</span>
                <span @touchend="touchNoneFun">清空</span>
            </div>
            <ul class="list_cartcon">
                <li>
                    <span>分段配送费</span> 购物车满45元免配送费
                </li>
                <li>双拼鸡排套餐<p>￥15<span class="minus">-</span><span class="piece">1</span><span class="add">+</span></p></li>
                <li>双拼鸡排套餐<p>￥15<span class="minus">-</span><span class="piece">1</span><span class="add">+</span></p></li>
                <li>双拼鸡排套餐<p>￥15<span class="minus">-</span><span class="piece">1</span><span class="add">+</span></p></li>
                <li>餐盒<p>￥4</p></li>
            </ul>
        </div>
        <div id="cart" @touchend="touchBlockFun">
            <div class="left l" >
                <div class="ic"></div>
                    <p id="countp" class="l">
                        <span>￥<b class="countp_num" v-model="counts.num">{{counts.num}}</b></span>
                        <span>另需配送费4元</span>
                    </p>
                </div>
            <div class="r right">
                <a href="">15元起送</a>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import { mapGetters, mapActions ,mapState } from 'vuex'
export default {
  name: 'detail-cart',
  computed: mapState({
    counts: 'counts',
    shopMessages: 'shopMessages'
  }),
    mutations: {
        touchNoneFun (state) {
            document.getElementById('cartcon-top').style.bottom = '-5.2rem'
            setTimeout(function(){
                document.getElementById('cartcon-top').style.display = 'none'
            },2000)
        },
        touchBlockFun (state) {
            document.getElementById('cartcon-top').style.
            display = 'block'
            setTimeout(function(){
                document.getElementById('cartcon-top').style.bottom = 0
            },200)
        }
    },
    actions: {
        actionB ({ dispatch, commit }) {
            return dispatch('actionA').then(() => {
            commit('someOtherMutation')
            })
        }
    },
    created () {
    fetch('static/json/shop_page.json')
    .then(response => response.json())
    .then(data => {
        this.shopMessages = data.shop_list[this.$route.params.id]
    })
  }
}
</script>

<style scoped>
#cartcon{
    position: fixed;
    bottom: 0;
    left: 0;
}
.shop-detail #cartcon-top{
    position: relative;
    bottom: -7.5rem;
    left: 0;
    height: auto;
    overflow: hidden;
    transition-duration: 2s;
    border-top: 0.02rem solid #0096ff;
    background:#f8f8f8;
    padding-bottom: 1rem;
    display: none;
}
.shop-detail #cartcon-top .hd{
    width:6.9rem;
    height:0.8rem;
    line-height: 0.8rem;
    overflow: hidden;
    padding: 0 0.3rem;
}
.shop-detail #cartcon-top .hd span:nth-child(1){
    float: left;
    font-size:0.32rem;
    color:#666;
}

.shop-detail #cartcon-top .hd span:nth-child(2){
    float: right;
    font-size:0.26rem;
    color: #7a7a7a;
}
.shop-detail ul.list_cartcon{
    width: 100%;
}

.shop-detail ul.list_cartcon li{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    box-sizing: border-box;
    color: #070707;
    font-size: 0.28rem;
    padding: 0  0.3rem;
    border-bottom: 0.02rem solid #efefef;
    overflow: hidden;
}

.shop-detail ul.list_cartcon > li:nth-child(1){
    background:#fff;
    height:0.6rem;
    line-height:0.6rem;
}
.shop-detail ul.list_cartcon > li:nth-child(1) > span{
    display: inline-block;
    height:0.6rem;
    line-height:0.6rem;
    color: #ff711c;
}

.shop-detail ul.list_cartcon li:last-child {
    height: 0.6rem;
    line-height: 0.6rem;
}
.shop-detail ul.list_cartcon li:last-child > span{
    float: right;
}
.shop-detail ul.list_cartcon li > p{
    display: inline-block;
    float: right;
    color:#ff5e00;
    font-size: 0.24rem;
}
.shop-detail ul.list_cartcon li > p > span:nth-child(1){
    margin-right: 0.2rem;
    color: #ff711c;
}
.shop-detail ul.list_cartcon li p span{
    display: inline-block;
    width:0.42rem;
    height:0.42rem;
    line-height:0.42rem;
    text-align: center;
    border-radius: 50%;
    font-size: 0.24rem;
    margin: 0.06rem;
}
.shop-detail ul.list_cartcon li p span.minus{
    background: #fff;
    border:0.02rem solid #0096ff;
    color: #0096ff;
}
.shop-detail ul.list_cartcon li p span.add{
    background: #0096ff;
    border:0.02rem solid #fff;
    color: #fff;
}
.shop-detail ul.list_cartcon li p span.piece{
    color: #646464;
}

.shop-detail #cart{
    width:100%;
    height:0.98rem;
    background: #fff;
    position:fixed;
    bottom: 0;
    /*z-index: 5;*/
}
.shop-detail #cart .left{
    width:5.3rem;
    height:0.98rem;
    line-height: 0.98rem;
    float: left;
    background:rgba(0,0,0,.2);
}
.shop-detail #cart .left .ic{
    width:0.94rem;
    height:0.94rem;
    line-height:0.94rem;
    text-align: center;
    border:0.1rem solid #888;
    border-radius: 50%;
    background:#999;
    font-size: 0.57rem;
    color: #ccc;
    position: absolute;
    bottom:0.04rem;
    left:0.3rem;
}

.shop-detail #cart .left p#countp{
    height: 100%;
    overflow: hidden;
}
.shop-detail #cart .left p#countp span{
    display: block;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.3rem;
    color: #fff;
    padding-left: 1.7rem;
}
.shop-detail #cart .left p#countp span:nth-child(1){
    margin-top: 0.05rem;
}
.shop-detail #cart .left p#countp span:nth-child(1) b.countp_num{
    font-weight:100;
    color: #0096ff;
}

.shop-detail #cart div.right{
    width:2.2rem;
    height:0.98rem;
    line-height:0.98rem;
    background:rgba(69,69,71,0.7);
    float:right;
    font-size:0.3rem;
    text-align:center;
}
.shop-detail .activec .right{
    font-size: 0.33rem;
    color: #fff;
}
.shop-detail #cart .right a{
    color: #fff;
    border-bottom: none;
    line-height:0.98rem;
}
</style>
