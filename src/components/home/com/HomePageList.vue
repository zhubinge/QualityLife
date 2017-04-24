<template>
	<div class="shop-page-list">
      <ul class="list">
      	<li v-for="list in lists">
      		<img :src="list.shopDetailImg">  		
      	</li>
      </ul>
      <ul class="list1">
		<li>
	  		<div>
	  			<img :src="list.shopDetailImg">
	  			<p>{{list.shopDetailName}}</p>
	  		</div>  			
		</li>      	
      </ul>
	</div>
</template>
<script>
export default {
  name: 'home-page-list',
  data () {
    return {
      lists: {},
      list: {},
      carousels: {},
      shopLists: {}
    }
  },
  beforeCreate () {
    fetch('static/json/shop_page.json')
      .then(response => response.json())
      .then(data => {
        this.lists = data.shop_list
        // console.log(shop_list)
      })
  }
}
</script>
<style scoped>
.list li{
	margin-top:.2rem;
}
.list li:nth-child(1) img{
	width:100%;
	height:3rem;
}
</style>
