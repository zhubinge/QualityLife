<template>
  <div class="home_class">
    <div class="box"></div>
    <div v-for="(classList,idx) in classLists" key="classLi" v-if="$route.params.id === idx+1">
      <h2>{{classList.class_name}}</h2>
      <ul class="class_lists">
        <router-link tag="li" key="classl" class="l"
        :to="'/index/class/' + classList.class_id"
        v-for="list in classList.class_info">
          <img :src="'static/images/detailall/' + list.imgSrc">
          <p>{{list.text}}</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home-class',
  data () {
    return {
      classLists:[],
      this_id:parseInt(this.$route.params.id)
    }
  },
  beforeCreate () {
    this.$http.get('/api/class/getclass')
      .then((response) => {
        this.classLists = response.data
        console.log(this.classLists)
        console.log(this.this_id-1)
      })
      .catch((reject) => {
        console.log(reject)
      })
  }
}
</script>
<style scoped>
.home_class{
  width: 100%;
  overflow: hidden;
  text-align: center;
}
.home_class .box{
  width: 100%;
  height: 2rem;
}
.home_class h2{
  width: 100%;
  height: 1.5rem;
  line-height: 1.5rem;
}
.home_class ul.class_lists{
  width: 100%;
  overflow: hidden;
  border-top: 0.02rem solid #eee;
}
.home_class ul.class_lists li{
  width: 33%;
  border-right: 0.01rem solid #eee;
  border-bottom: 0.02rem solid #eee;
}
.home_class ul.class_lists li img{
  display: inline-block;
  width: 80%;
}
</style>
