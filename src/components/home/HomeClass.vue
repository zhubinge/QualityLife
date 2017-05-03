<template>
  <div class="home_class">
    <div class="box"></div>
    <div v-for="(classList,idx) in classLists" key="classLi" v-if="$route.params.id === idx+1">
      <h2>{{classList.class_name}}</h2>
      <ul class="class_lists">
        <router-link tag="li" key="classl" class="l"
        :to="'/index/class/' + classList.class_id"
        v-for="list in classList.class_info">
          <img :src="'static/images/detail/' + list.imgSrc">
          <p>{{list.text}}</p>
        </router-link>
      </ul>
    </div>
    <h2>{{class_name}}</h2>
    <dl class="class_lists"
       v-for="(comList,idx) in comLists"
      key="class_list"
      >
      <dt class="class_title" v-if="comList.info_name !== null">
        <span></span>
        <h3 class="l">
          <span>{{comList.info_name}}</span>类
        </h3>
        <span></span>
      </dt>
      <router-link
       tag="dd"
       class="class_list"
       :to="'/detail/' + comList.com_id">
        <img :src="'static/images/commodity/' + comList.com_img">
        <div class="text">
          <div class="l recommend">推荐</div>
          <p>{{comList.com_name}}</p>
          <p>
            <span class="red">￥{{comList.original_price}}</span>
            <span class="gray">￥{{comList.present_price}}</span>
          </p>
        </div>
      </router-link>
    </dl>
  </div>
</template>
<script>
export default {
  name: 'home-class',
  data () {
    return {
      classLists:[],
      comLists:[],
      class_name:'',
      info_name:[]
    }
  },
  beforeCreate () {
    this.$http.get('/api/class/getclass')
      .then((response) => {
        this.classLists = response.data
      })
      .catch((reject) => {
        console.log(reject)
      })
  },
  watch:{
    $route: 'getCom'
  },
  methods:{
    getCom(){
    //对应商品
      var search = {
        class_id :this.$route.params.id
      }
      this.$http.post('/api/com/getcom',search)
        .then((response) => {
          this.class_name = response.data[0].class_name
          var data = response.data;
          var info_name = [];
          for (var i = 0; i < data.length; i++) {
            for (var j = data.length-1; j > i; j--) {
              if (data[j].info_name === data[i].info_name) {
                data[j].info_name = null
              }
            }
          }
          this.comLists = response.data
          console.log(response.data[0])
        })
        .catch((reject) => {
          console.log(reject)
        })
    }
  },
  created(){
    this.getCom()
  }
}
</script>
<style scoped>
.red{
  color: red;
}
.gray{
  color: #aaa;
  text-decoration: line-through;
}
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
  color: #ffda75;
}
.home_class dl.class_lists{
  width: 100%;
  overflow: hidden;
  text-align: center;
}
.home_class dl.class_lists dt.class_title{
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  padding-bottom: 0.5rem;
  display: flex;
  overflow: hidden;
}
.home_class dl.class_lists dt.class_title span{
  display: inline-block;
  border-bottom: 0.02rem solid #ccc;
  flex: 1;
  height: 50%;
}
.home_class dl.class_lists dt.class_title h3{
  flex: 1;
  text-align: center;
  color: #aaa;
}
.home_class dl.class_lists dt.class_title h3 span{
  color: red;
}
.home_class dl.class_lists dd.class_list{
  width: 100%;
  padding-bottom: 0.5rem;
}
.home_class dl.class_lists dd.class_list img{
  width: 100%;
}
.home_class dl.class_lists dd.class_list .text{
  width: 100%;
  background: url('/static/images/recommend.jpg') no-repeat left;
  background-size: 1.5rem 100%;
  box-sizing: border-box;
  padding: 0.2rem 0.5rem;
  font-size: 18px;
}
.home_class dl.class_lists dd.class_list .text .recommend{
  width: 1rem;
  height: 1rem;
  line-height: 1.7rem;
  text-align: right;
  font-size: 22px;
  font-weight: bold;
  text-shadow: 10px 1px 8px #ffda75;
  color: #75e6ff;
}
</style>
