<template>
  <div class="account_page">
    <bottom-nav></bottom-nav>
  </div>
</template>
<script>
import BottomNav from './BottomNav'
export default {
  name: 'account',
  data () {
    return {
      carousels:{},
      classLists:{},
      comList:{}
    }
  },
  components: {
    BottomNav
  },
  beforeCreate () {
    //首页轮播图
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
    //分类
    this.$http.get('/api/class/getClass')
      .then((response) => {
        this.classLists = response.data
      })
      .catch((reject) => {
        console.log(reject)
      })
  },
  methods: {
    all(){
      this.$http.get('/api/com/getcom')
        .then((response) => {
          console.log(response.data)
        })
        .catch((reject) => {
          console.log(reject)
        })
    },
    search(){
      var search = {"info_id":101}
      this.$http.post('/api/com/getcom',search)
        .then((response) => {
          console.log(response.data)
        })
        .catch((reject) => {
          console.log(reject)
        })
    }
  }
}
</script>
<style scoped>
ul.l{
  height: 5rem;
  margin-left: 0.2rem;
}
input,button{
  border: 0.04rem solid #ccc;
  height: 0.8rem;
  font-size: 20px;
}
</style>
