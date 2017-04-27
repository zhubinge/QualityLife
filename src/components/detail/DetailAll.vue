<template>
<div class="detail_all">
    <div class="detail_top">
        <div class="top_nav">全部产品</div>
        <div class="top_search nofocus">
            <input type="text" placeholder="搜索商品" class="ints" @focus="handleFocus">
        </div>
        <div class="top_search focusinput">
            <input type="text" placeholder="搜索商品" class="int" @focus="handleFocus" :style="blocks">
            <input type="button" value="取消" class="off" v-if="none===true" v-on:click="cli">
        </div>
    </div>
    <div class="box"></div>
    <div class="detail_box" v-for="detailList in detailLists">
        <p class="detail_title">{{detailList.class_name}}</p>
        <ul class="detail_ul">
            <router-link
             v-for="(list,idx) in detailList.class_info"
             tag="li"
             class="l detail_list" 
             :to="'/detail/class/' + list.info_id"
             :key="idx"
             >
                <img :src="'static/images/dateilall/' + list.imgSrc"/>
                <p class="detail_text">{{list.text}}</p>
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
            detailLists:{},
            none:false,
            blocks:{
                width:'90%',
                left: null
            }
        }
    },
    methods: {
        handleFocus: function() {
           this.none=true,
           this.blocks.left = 0
        },
        cli: function() {
            this.none=false,
            this.blocks.left = '0.4rem'
        }
    },
    beforeCreate () {
        this.$http.get('/api/class/getclass')
          .then((response) => {
            this.detailLists = response.data
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
.detail_all{
    width: 100%;
    overflow: hidden;
    text-align: center;
}
.detail_all .detail_top{
    width: 100%;
    overflow: hidden;
    position: fixed;
}
.detail_all .detail_top .top_nav{
    width:100%;
    height: 1rem;
    line-height: 1rem;
    background:#ffda75;
    font-size: 20px;
    color: #fff;
}
.detail_all .detail_top .top_search{
    width:100%;
    height: 1.2rem;
    line-height: 1.2rem;
    background:#f2f2f2;
    border-bottom: 0.02rem solid #666;
    position:relative;
}
.detail_all .detail_top .top_search .int{
    display:inline-block;
    height: 0.8rem;
    font-size: 16px; 
    text-align: center;
    border-radius: 0.2rem;
    background-image: url(/static/images/search.png);
    background-repeat: no-repeat;
    background-position: 1.7rem .1rem;
    position:absolute;
    top:0.2rem;
    left:0.4rem;
}
.detail_all .detail_top .top_search .off{
    height:0.8rem;
    width:20%;
    position:absolute;
    top:0.19rem;
    right:0;
/*    display:none;  */
    background:#f2f2f2;
    color:black;
}
.detail_all .box{
    width: 100%;
    height: 2.2rem;
}
.detail_all .detail_box{
    width:100%;
    overflow: hidden;
}
.detail_all .detail_box .detail_title{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: #f2f2f2;
    font-size: 18px;
    overflow:hidden;
}
.detail_all .detail_box .detail_title:first-child{
    padding-top: 0.5rem;
}
.detail_all .detail_box .detail_ul{
    width: 100%;
    overflow: hidden;
}
.detail_all .detail_box .detail_ul .detail_list{
    width: 2.5rem;
    overflow: hidden;
    box-sizing: border-box;
    padding: 0.2rem;
    border-right:0.04rem solid  #f2f2f2;
    border-bottom:0.04rem solid  #f2f2f2;
}
.detail_all .detail_box .detail_ul .detail_list img{
    display: inline-block;
    width: 80%; 
}
.detail_all .detail_box .detail_ul .detail_list p.detail_text{
    height: 0.5rem;
    line-height: 0.5rem;
}
</style>
