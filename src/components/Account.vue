<template>
<div class="account_page">
  <h2>carousels</h2>
  <ul v-for="carousel in carousels">
    <li>
      _id:-----{{carousel._id}}<br/>
      content:-----{{carousel.content}}<br/>
      <div v-for="img in carousel.this_data">
        imgSrc:-----{{img.imgSrc}}<br/>
      </div>
    </li>
  </ul>
  <bottom-nav></bottom-nav>
</div>
</template>
<script>
import BottomNav from './BottomNav'
export default {
  name: 'account',
  data () {
    return {
      carousels:{}
    }
  },
  components: {
    BottomNav
  },
  beforeCreate () {
    var homeSearch = {
      content :'home_carousels'
    };
    this.$http.post('/api/home/getContent',homeSearch)
      .then((response) => {
        this.carousels = response.data
      })
      .catch((reject) => {
        console.log(reject)
      })
  }
}
</script>
<style scoped>

</style>
