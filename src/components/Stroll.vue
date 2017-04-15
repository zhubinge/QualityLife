<template>
<div class="stroll_page">
  <div class="other-top">
    <h2 class="l">闲逛</h2>
    <a href="/search">搜索</a>
  </div>
  <div class="waterf">
    <waterfall
      :line="line"
      :line-gap="187.5"
      :min-line-gap="187.5"
      :max-line-gap="187.5"
      :watch="items"
      ref="waterfall"
    >
      <waterfall-slot
        v-for="(item, index) in items"
        :width="item.width"
        :height="item.height"
        :order="index"
        :key="item.index"
        move-class="item-move"
      >
      <div v-for="detail in details">
        <a class="item" :index="item.index" :style="'border-color:' + item.ranborder"
          
        >
          <b>
            <a href="/" :style="'background:' + item.ranborder">新价格</a>
            <a href="/" :style="'background:' + item.ranborder">hot热卖</a>
            <a href="/" :style="'background:' + item.ranborder">今日新品</a>
          </b>
          <img :src="detail.shopDetailStrollImg"/>
          <span :style="item.rancolor">{{detail.shopDetailName}}</span>
          <p><span class="l">￥{{detail.shopDetailComment}}</span><span class="r">月销{{detail.shopDetailCount}}</span></p>
        </a>
        </div>
      </waterfall-slot>
    </waterfall>
  </div>
  <bottom-nav></bottom-nav>
</div>
</template>
<script>
import BottomNav from './BottomNav'
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
export default {
  name: 'stroll',
  data () {
    return {
      details: {},
      detail: {},
      line: 'v',
      items: ItemFactory.get(100),
      isBusy: false
    }
  },
  methods: {
    addItems: function () {
      if (!this.isBusy && this.items.length < 500) {
        this.isBusy = true
        this.items.push.apply(this.items, ItemFactory.get(50))
      }
    },
    shuffle: function () {
      this.items.sort(function () {
        return Math.random() - 0.5
      })
    },
    reflowed: function () {
      this.isBusy = false
    }
  },
  components: {
    BottomNav,
    Waterfall,
    WaterfallSlot
  },
  beforeCreate () {
    fetch('static/json/stroll_page.json')
      .then(response => response.json())
      .then(data => {
        this.details = data.shop_list
      })
  }
}

var ItemFactory = (function () {
  var lastIndex = 0
  function generateRandomItems (count) {
    var items = [], i
    for (i = 0; i < count; i++) {
      items[i] = {
        index: lastIndex++,
        rancolor: {
          color: getRandomColor()
        },
        ranborder: getRandomColor(),
        width: 100 + ~~(Math.random() * 50),
        height: 150 + ~~(Math.random() * 50)
      }
    }
    return items
  }
  function getRandomColor () {
    var colors = [
      'rgba(21,174,103,.5)',
      'rgba(245,163,59,.5)',
      'rgba(255,230,135,.5)',
      'rgba(194,217,78,.5)',
      'rgba(195,123,177,.5)',
      'rgba(125,205,244,.5)',
      'rgba(80,216,216,.5)',
      'rgba(255,73,73,.5)'
    ]
    return colors[~~(Math.random() * colors.length)]
  }
  return {
    get: generateRandomItems
  }
})()
// document.body.addEventListener('click', function () {
//   app.shuffle()
//   // app.$refs.waterfall.$emit('reflow') // manually trigger reflow action
// }, false)

// window.addEventListener('scroll', function () {
//   var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
//   if (scrollTop + window.innerHeight >= document.body.clientHeight) {
//     this.addItems()
//   }
// })

</script>
<style scoped>
.other-top{
  position: fixed;
  top: 0;
  left: 0;
  width: 6.9rem;
  height: 1rem;
  line-height: 1rem;
  background: #ffda75;
  padding: 0 0.3rem;
}
.other-top h2{
  width: 4.9rem;
  height: 100%;
  padding-left: 1rem;
  text-align: center;
  color: #fff;
}
.other-top a{
  display: inline-block;
  width: 1rem;
  height: 100%;
  color: #fff;
}
.stroll_bottom{
  width: 100%;
  height: 1rem;
  background: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
}
.waterf{
  position: absolute;
  width: 7.5rem;
  height: 100%;
  z-index: -1;
  top: 1rem;
}
.item-move {
  transition: all .5s cubic-bezier(.55,0,.1,1);
  -webkit-transition: all .5s cubic-bezier(.55,0,.1,1);
}
.item-move .item b {
  display: none;
}
.item {
  display: block;
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
  right: 0.1rem;
  bottom: 0.1rem;
  box-sizing: border-box;
  padding: 0.14rem;
  border: 0.04rem solid;
  border-radius: 0.1rem;
  overflow: hidden;
}
.item img{
  width: 100%;
  height: 80%;
  border-radius: 0.1rem;
}
.item > span{
  margin-top: 0.1rem;
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 12px;
}
.item > p{
  height: 12%;
  line-height: 0.6rem;
  overflow: hidden;
  width: 100%;
}
.item > p > span.l{
  font-size: 18px;
  color: red;
}
.item:after {
  /*content: attr(index);*/
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.vue-waterfall-slot .item-move:nth-child(2){
  height: 4rem;
}
.item-move:nth-child(2) .item b{
  display: block;
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.item-move:nth-child(2) .item b a{
  display: block;
  width: 2rem;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 16px;
  position: absolute;
  color: #fff;
  border-radius: 0.2rem;
  box-shadow: -0.04rem -0.04rem 0.15rem 0 #ccc;
}
.item-move:nth-child(2) .item b a:nth-child(1){
  left: 10%;
  top: 10%;
}
.item-move:nth-child(2) .item b a:nth-child(2){
  left: 50%;
  top: 50%;
  margin-left: -1rem;
  margin-top: -0.3rem;
}
.item-move:nth-child(2) .item b a:nth-child(3){
  bottom: 10%;
  right: 10%;
}
.wf-transition {
  transition: opacity .3s ease;
  -webkit-transition: opacity .3s ease;
}
.wf-enter {
  opacity: 0;
}

/*
.stroll_page{
  width: 7.5rem;
  overflow: hidden;
}
.stroll_page .stroll_box{
  overflow: hidden;
  padding-top: 0.3rem;
  padding-left: 0.5rem;
}
img{
  width: 3rem;
  display: block;
}
.x{

}
.stroll_page .stroll_text{
  width: 3.2rem;
  height: 2.6rem;
  margin-right: 0.4rem;
  margin-bottom: 0.4rem;
  text-align: center;
  overflow: hidden;
  position: relative;
}
*/
</style>
