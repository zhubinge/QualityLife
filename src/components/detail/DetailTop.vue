<template>
    <header class="detail-top">
        <router-link to="/index" class="toIndex">‹</router-link>
        <div class="shop_headercon">
            <img class="l" :src="shopMessages.shopHeader">
            <div class="cen l">
                <span class="p1">{{shopMessages.shopName}}</span>
                <p>
                	<span v-if="shopMessages.fengNiao" class="l">商家配送 /&nbsp;</span>
                	<span class="l">{{shopMessages.time}}分钟送达 /&nbsp;</span>
                	<span class="l"> 配送费￥{{shopMessages.peiSongFei}}</span>
                </p>
                <span class="gongGao">公告：{{shopMessages.gongGao}}</span>
            </div>
        </div>
        <p class="bottom">
        	<span class="l">减</span>
        	<span class="l"> 满10减1， 满30减2，满40减3</span>
        	<span class="r"> 2个活动></span>
        </p>
    </header>
</template>
<script>
export default {
  name: 'detail-top',
  data () {
    return{
        shopMessages:{}
    }
  },
  beforeCreate () {
    fetch('static/json/shop_page.json')
      .then(response => response.json())
      .then(data => {
        this.shopMessages = data.shop_list[this.$route.params.id]
      });
  }
}
</script>

<style scoped>
header.detail-top{
    width:100%;
    height: 3.2rem;
    padding:0.3rem;
    padding-top:0.4rem;
    padding-bottom: 0;
    box-sizing: border-box;
    background:#0096ff;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
}
header.detail-top > a.toIndex{
	padding: 0 0.2rem;
    line-height: 0.6rem;
	font-size: 36px;
    color: #fff;
    position: absolute;
    top:0;
    left:0;
}
header.detail-top .shop_headercon{
    height: auto;
    overflow: hidden;
    clear:both;
    margin-top: 0.2rem;
}
header.detail-top .shop_headercon img{
    display: inline-block;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.02rem solid #fff;
}
header.detail-top .shop_headercon div.cen.l{
    width: 5rem;
    height: 1.8rem;
    box-sizing: border-box;
    line-height: 0;
    border: 0;
    padding-left:0.2rem ;
}
header.detail-top .shop_headercon div.cen.l > span{
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    color: #Fff;
    text-align: left;
}
header.detail-top > .shop_headercon div.cen.l > p{
	height: 0.6rem;
    line-height: 0.6rem;
}
header.detail-top > .shop_headercon div.cen.l > p > span{
    display: inline;
    background: ntop;
    color: #fff;
    font-size: 14px;
}
header.detail-top > .shop_headercon div.cen.l > span.p1{
    font-weight: bold;
    font-size: 20px;
}
header.detail-top > .shop_headercon div.cen.l > span.gongGao{
    font-size: 14px;
}
header.detail-top > p.bottom {
    display: inline-block;
    width: 100%;
    height: 0.7rem;
    line-height: 0.7rem;
    color: #fff;
}
header.detail-top > p.bottom > span:nth-child(1){
    display:inline-block;
    width: 0.4rem;
    height: 0.4rem;
    line-height: 0.4rem;
    background: #fff;
    color: #0096ff;
    margin-top: 0.15rem;
    margin-right: 0.15rem;
    text-align: center;
}
</style>
