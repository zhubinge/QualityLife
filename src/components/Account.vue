<template>
  <div class="account_page">
<!--     <h2>carousels</h2>
    <ul>
      <li v-for="carousel in carousels">
        _id:》》》{{carousel._id}}<br/>
        content:》》》{{carousel.content}}<br/>
        <div v-for="img in carousel.this_data">
          imgSrc:》》》{{img.imgSrc}}<br/>
        </div>
      </li>
    </ul>
    <h2>class</h2>
    <ul v-for="classList in classLists" class="l">
      <li>
        <h3>{{classList.class_name}}</h3>
        <div v-for="item in classList.class_info">
          {{item.text}}
        </div>
      </li>
    </ul> -->
      商品ID：<input type="number" ref="com_id" /><br/>
      商品名字：<input type="text" ref="com_name" /><br/>
      商品img：<input type="flie" ref="com_img" /><br/>
      大类ID：<input type="number" ref="class_id" /><br/>
      小类ID：<input type="number" ref="info_id" /><br/>
      新品：<input type="text" ref="is_new" /><br/>
      推荐：<input type="text" ref="is_recommend" /><br/>
      原价：<input type="number" ref="original_price" /><br/>
      现价：<input type="number" ref="present_price" /><br/>
      销售数量：<input type="number" ref="sales_count" /><br/>
      轮播：<input type="number" ref="carousel_count" /><br/>
      详情：<input type="number" ref="detail_count" /><br/>
      <button @touchend="gogo">提交</button>
      <button @touchend="all">获取全部</button>
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
    gogo () {
      var times = new Date();
      var year = times.getFullYear()
      var month = times.getMonth()
      var date = times.getDate();
      var hours = times.getHours()
      var minutes = times.getMinutes()
      var seconds = times.getSeconds()
      var time = year +'年'+ month +'月'+ date + '日' + hours +':'+ minutes +':'+ seconds
      var searchData = {
         com_id : this.$refs.com_id.value,
         com_name : this.$refs.com_name.value,
         com_img : this.$refs.com_img.value,
         class_id : this.$refs.class_id.value,
         info_id : this.$refs.info_id.value,
         is_new : this.$refs.is_new.value,
         is_recommend : this.$refs.is_recommend.value,
         original_price : this.$refs.original_price.value,
         present_price : this.$refs.present_price.value,
         sales_count : this.$refs.sales_count.value,
         carousel_count : this.$refs.carousel_count.value,
         detail_count : this.$refs.detail_count.value,
         create_date: time
      }
      for(var key in searchData){
        if (searchData[key] === '') {
          alert('value不能为空')
          return
        }
      }
      this.$http.post('/api/com/setcom',searchData)
        .then((response) => {
          console.log(response.data)
        })
        .catch((reject) => {
          console.log(reject)
        })
      // this.$http.get('/api/com/getcom')
      //   .then((response) => {
      //     this.comList = response.data
      //     console.log(this.comList)
      //   })
      // .catch((reject) => {
      //   console.log(reject)
      // })
    },
    all(){
      this.$http.get('/api/com/getcom')
        .then((response) => {
          var data = response.data
          var val;
          var arr = [];
          for(var key in data){
            val = data[key]
            arr.push(val.com_id)
          }
          console.log(arr)
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
