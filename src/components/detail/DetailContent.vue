<template>
	<div id="content">
        <ul class="main r" v-for="(details,detailType) in shopMessages.shopDetailType">
            <li id="intype">{{detailType}}</li>
            <li class="other" v-for="detail in details" :id="detail.shopDetailId">
                <div class="l"><img :src="detail.shopDetailImg" class="autoWh"></div>
                <div class="ri l">
                    <span>{{detail.shopDetailName}}</span>
                    <span>月售{{detail.shopDetailSale}}份</span>
                    <span>￥{{detail.shopDetailPrice}}</span>
                </div>
                <div class="addminus r" :nameClass="detail.shopDetailId">
                    <span class="minus" @touchend="minus(detail)">-</span>
                    <input type="text" class="piece" v-model="detail.count"/>
                    <span class="add" @touchend="add(detail)">+</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapGetters, mapActions ,mapState } from 'vuex'
export default {
  name: 'detail-content',
  computed: mapState({
    shopMessages: 'shopMessages'
  }),
  methods:{
    otherTouchFun: function () {

    },
    add:function(detail){
      detail.count++
    },
    minus:function(detail){
      if (detail.count <= 1) {
          detail.count = 0
    　}else{
        　　detail.count--            
    　}
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
#content{
    width: 7.5rem;
    height: auto;
    overflow: hidden;
    position: absolute;
    top: 3.8rem;
    left: 0;
    z-index: -1;
    padding-bottom: 0.9rem;
}
#content .main{
    background:#fff;
    width:6.05rem;
}
#content .main li{
    width: 100%;
    height:1.8rem;
    padding: 0.2rem;
    overflow: hidden;
    box-sizing: border-box;
}
#content .main li#intype{
    height:0.5rem;
    line-height:0.5rem;
    background:#f8f8f8;
    padding:0 0.2rem;
    border-bottom: 0;
    text-align: left;
}
#content .main li div.l{
    width: 1.4rem;
    height: 1.4rem;
    overflow: hidden;
}
#content .main li div.l img{
    width: 100%;
    height: 100%;
}

#content .main li.other .ri{
    width: 1.5rem;
    height: 100%;
    padding-left: 0.25rem;
    font-size: 0.22rem;
    color:#666;
    text-align: left;
}
#content .main li.other .ri span{
    display: block;
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.14rem;
}
#content .main li.other .addminus{
    height: 100%;
    line-height: 1.2rem;
    overflow: hidden;
}

#content .main li.other .addminus span,#content .main li.other .addminus input{
    display: inline-block;
    width:0.43rem;
    height:0.43rem;
    line-height:0.43rem;
    text-align: center;
    border-radius: 50%;
    font-size: 0.24rem;
}

#content .main li.other .addminus .minus{
    background: #fff;
    border:0.02rem solid #0096ff;
    color: #0096ff;
}

#content .main li.other .addminus .add{
    background: #0096ff;
    border:0.02rem solid #C7C7CC;
    color: #fff;
}
</style>
