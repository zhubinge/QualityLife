<template>
<div class="detail_all">
    <div class="detail_top">
        <div class="top_nav">全部产品</div>
        <div class="top_search">
            <input type="text" placeholder="搜索商品" class="off l"
             v-if="focusD === true" autofocus />
            <input type="text" placeholder="搜索商品" class="int" 
            @touchend="handleFocus" v-if="focusD === false" 
             disabled autocomplete="off"/>
            <span class="l" v-if="focusD === true" @touchend="focusNone">
                取消
            </span>
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
                <img :src="'static/images/detailall/' + list.imgSrc"/>
                <p class="detail_text">{{list.text}}</p>
            </router-link>
        </ul>
    </div>
    <div class="box2"></div>
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
            focusD:false
        }
    },
    methods: {
        handleFocus: function() {
           this.focusD = true
        },
        focusNone: function() {
            this.focusD = false
        }
    },
    beforeCreate () {
        this.$http.get('/api/class/getclass')
          .then((response) => {
            this.detailLists = response.data
            console.log(this.detailLists)
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
    box-sizing: border-box;
    padding: 0 0.3rem;
    overflow: hidden;
}
.detail_all .detail_top .top_search .int{
    display:inline-block;
    width: 90%;
    height: 0.8rem;
    background: #fff;
    font-size: 16px; 
    text-align: center;
    border-radius: 0.2rem;
}
.detail_all .detail_top .top_search .off{
    display:inline-block;
    width: 88%;
    height: 0.8rem;
    background: #fff;
    font-size: 16px;
    text-align: left;
    text-indent: 1em;
    border-radius: 0.2rem;
    margin-top: 0.2rem;
}
.detail_all .detail_top .top_search span{
    display: block;
    width: 12%;
    height: 0.8rem;
    text-align: center;
}

.detail_all .box{
    width: 100%;
    height: 2.2rem;
}
.detail_all .box2{
    width: 100%;
    height: 1rem;
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
