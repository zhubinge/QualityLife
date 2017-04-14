<template>
    <ul class="list l" id="detail-list">
        <li v-for="(details,detailType) in shopMessages.shopDetailType" v-on:touchend="listTouchFun">
            {{detailType}}
        </li>
    </ul>
</template>
<script>
export default {
    name: 'detail-list',
    data () {
        return {
        	shopMessages: {},
            detailType:{},
            details:{},
            detail:{},
            count:0
        }
    },
    methods:{
    listTouchFun: function (e) {
        var li = document.getElementsByClassName('list')[0].children
        for (var i = 0; i < li.length; i++) {
            li[i].className = ''
        }
        e.target.className = 'active'
    },
    add:function(detail){
        detail.count++
        console.log(detail.count)
    },
    minus:function(detail){
        if (detail.count <= 1) {
            detail.count = 0
        }else{
            detail.count--            
        }
        console.log(detail.count)
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
#detail-list{
    width:1.45rem;
    height: 100%;
    background: #f8f8f8;
    overflow: hidden;
    position: fixed;
    top:  3.9rem;
    left: 0;
}
#detail-list li{
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

#detail-list li.active{
    background: #fff;
    color: #0096ff;
    border-left: 0.06rem solid #0096ff;
}
</style>
