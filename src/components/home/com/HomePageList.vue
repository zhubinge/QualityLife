<template>
	<div class="shop-list-er">
	  <h2 class="recommend_title">推荐商家</h2>
		<ul class="recommend-list">
			<li class="list" v-for="recommend in recommends" >
				<router-link :to="'/detail/' + recommend.shopId">
					<span class="l left">
						<img :src="recommend.shopHeader">	
					</span>
					<ul class="l right">
						<li class="one">
							<span v-if="recommend.shopBrand" class="shopBrand l">品牌</span>
							<span class="shopName l">{{recommend.shopName}}</span>
							<p class="r">
								<span class="bao l" v-if="recommend.bao">保</span>
								<span class="piao l" v-if="recommend.piao">票</span>
								<span class="zhun l" v-if="recommend.zhun">准</span>
							</p>
						</li>
						<li class="two">
							<span class="shopStar l">★★★★★</span>
							<span class="shopStarCounts l">{{recommend.shopStar}}</span>
							<span class="saleCounts l">月售{{recommend.saleCounts}}单</span>
							<p class="r">
								<span class="zhunShi" v-if="recommend.zhun">准时达</span>
								<span class="fengNiao">蜂鸟专送</span>
							</p>
						</li>
						<li class="three">
							<span class="qiSong l">￥{{recommend.qiSong}}起送</span>
							<span class="peiSongFei l">配送费￥{{recommend.peiSongFei}}</span>
							<p class="r">
								<span class="jvLi">{{recommend.jvLi}}m /</span>
								<span class="time">{{recommend.time}}分钟</span>
							</p>
						</li>
					</ul>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
  name: 'home-page-list',
  data () {
    return {
      recommend: {},
      recommends: {},
      carousels: {},
      shopLists: {}
    }
  },
  beforeCreate () {
    fetch('static/json/shop_page.json')
      .then(response => response.json())
      .then(data => {
        this.recommends = data.shop_list
      })
  }
}
</script>
<style scoped>
.recommend_title{
  width: 100%;
  height: 0.7rem;
  line-height: 0.7rem;
  background: #fff;
  box-sizing: border-box;
  padding: 0 0.3rem;
  margin-top: 0.2rem;
  border-top: 0.001rem solid #eee;
  text-align: left;
  font-size: 16px;
}
ul.recommend-list {
	width: 100%;
	background: #fff;
	overflow: hidden;
	margin-bottom: 1rem;
}
ul.recommend-list > li.list{
	display: block;
	width: 100%;
	height: 1.8rem;
	border-bottom: 0.002rem solid #eee;
}
ul.recommend-list > li.list > a{
	display: block;
	width: 100%;
	height: 100%;
}
ul.recommend-list > li.list > a >  span.l{
	width: 1.8rem;
	height: 100%;
	box-sizing: border-box;
	padding: 0.2rem;
}
ul.recommend-list > li.list > a >  span.l > img{
	width: 100%;
}
ul.recommend-list > li.list > a >  ul.l.right{
	width: 5.7rem;
	height: 100%;
	box-sizing: border-box;
	padding-top: 0.14rem;
	padding-right: 0.2rem;
}
ul.recommend-list > li.list > a >  ul.l.right > li{
	width: 100%;
	height: 0.5rem;
	line-height: 0.55rem;	
	box-sizing: border-box;
	overflow: hidden;
}
ul.recommend-list > li.list > a >  ul.l.right > li.two{
	margin: 0.04rem 0;
}
ul.recommend-list > li.list > a >  ul.l.right > li > span.shopBrand{
	display: block;
	width: 0.6rem;
	height: 0.4rem;
	line-height: 0.4rem;
    color: #000;
	background: #ffd930;
	border-radius: 0.06rem;
	font-size: 12px;
	text-align: center;
}
ul.recommend-list > li.list > a >  ul.l.right > li > span.shopName{
	padding: 0 0.2rem;
	font-weight: bold;
}
ul.recommend-list > li.list > a >  ul.l.right > li > p.r{
	height: 100%;
}
ul.recommend-list > li.list > a >  ul.l.right > li > p.r span{
	width: 0.35rem;
	height: 0.35rem;
	line-height: 0.35rem;
	margin: 0 0.02rem;
	font-size: 12px;
	color: rgb(153, 153, 153);
    border:1px solid rgb(221, 221, 221);
    background: #f4f4f4;
	border-radius: 0.06rem;
}
ul.recommend-list > li.list > a >  ul.l.right > li.two span.shopStar{
	color: #ffaa0c;
	margin-right: 0.1rem;
	font-size: 16px;
}
ul.recommend-list > li.list > a >  ul.l.right > li.two span.shopStarCounts{
	color: #ffaa0c;
	margin-right: 0.1rem;
	font-size: 14px;
}
ul.recommend-list > li.list > a >  ul.l.right > li span.saleCounts{
	font-size: 13px;
}
ul.recommend-list > li.list > a >  ul.l.right > li.three span{
	font-size: 13px;
}
ul.recommend-list > li.list > a >  ul.l.right > li.three span.peiSongFei{
    margin: 0 0.2rem;
}
ul.recommend-list > li.list > a >  ul.l.right > li p.r span.zhunShi{
	padding: 0.02rem 0.06rem;
	font-size: 12px;
    border-color: #44a5ff;
    background-color: #fff;
    color: #2395ff;
	margin: 0rem;
}
ul.recommend-list > li.list > a >  ul.l.right > li p.r span.fengNiao{
	padding: 0 0.06rem;
	margin: 0rem;
	font-size: 12px;
    border-color: #44a5ff;
    background-color: #44a5ff;
    color: #fff;
}
ul.recommend-list > li.list > a >  ul.l.right > li.three p.r span{
    border: none;
    background: none;
	font-size: 14px;
}
ul.recommend-list > li.list > a >  ul.l.right > li.three p.r span.time{
    color: #44a5ff;
}
</style>
