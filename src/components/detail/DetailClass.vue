<<<<<<< HEAD
<template>
<div>
	<div class="top_nav">
		<!-- 		  v-for="detailList in detailLists"-->
 		<a href="javascript:history.back()" class="l"> < </a>
<!--         <p class="l">{{detailList.class_name}}</p>
 -->    </div>

</div>
</template>

<script>
export default {
  name: 'detail-class',
    data () {
        return {
            detailLists:{},


        }
    },
    beforeCreate () {
    	// var cla = location.href;
    	// cla = cla.slice(34);
    	console.log(this.$route.params.classId)
        // var that = this;
      var search = {info_id:this.$route.params.classId}
      this.$http.post('/api/com/getcom',search)
        .then((response) => {
          console.log(response.data);
          // console.log(response.data.$parent.$data);
          detailLists = response.data
        })
        .catch((reject) => {
          console.log(reject)
        })

    },
}
</script>
<style scoped>
.top_nav{
    width:100%;
    height: 1rem;
    /*background: #ffda75;*/
    background:#ffda75;
}
.top_nav a{
	width: 10%;
	color: white;
	font-size: 0.5rem;
    height: 1rem;
    line-height: 1rem;
}
.top_nav p{
	width: 80%;
    text-align: center;
    font-size: 20px;
    color: #fff;
    height: 1rem;
    line-height: 1rem;
}
</style>
=======
<template>
<div>
    <bottom-nav></bottom-nav>
</div>
</template>
<script>
import BottomNav from '../BottomNav'
export default {
    name: 'detail-class',
    data () {
        return {
            detailLists:{}
        }
    },
    components:{
        BottomNav
    },
    beforeCreate () {
        // this.$http.get('/api/class/getClass')
        //   .then((response) => {
        //     this.detailLists = response.data;
        //     console.log(this.detailLists)
        //   })
        //   .catch((reject) => {
        //     console.log(reject)
        //   })
    }
 }
</script>
<style scoped>
#detail-all{
    width:1.45rem;
    height: 100%;
    background: #f8f8f8;
    overflow: hidden;
    position: fixed;
    top:  3.9rem;
    left: 0;
}
#detail-all li{
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

#detail-all li.active{
    background: #fff;
    color: #0096ff;
    border-left: 0.06rem solid #0096ff;
}
.top_nav{
    width:100%;
    height: 1rem;
    /*background: #ffda75;*/
    background:#ffda75;
}
.top_nav p{
    text-align: center;
    font-size: 20px;
    color: #fff;
    height: 1rem;
    line-height: 1rem;
}
.search{
    width:100%;
    height: 1.2rem;
    background:#f2f2f2;

}
.search input{
    width: 80%;
    height: 0.8rem;
    border-radius: 0.2rem;
    margin-left: 10%;
    font-size: 16px; 
    text-align: center;
    margin-top: 0.2rem;
}
.h_box{
    width:100%;
    overflow: auto;
}
.h_box .h_title{
    width: 100%;
    height: 1.3rem;
    background: #f2f2f2;
    line-height: 1.8rem;
    font-size: 18px;
}
.h_box .h_title p{
    width: 100%;
    text-align: center;
}
.h_box .product{
    width: 100%;
}
.h_box:nth-child(9){
    margin-bottom: 2rem;
}
.h_box .product li{
    width: 33%;
    border:1px solid  #f2f2f2;
    border-left: none;
    border-top: none;
}

.h_box .product li img{
    width: 60%!important;
    margin: auto;
    padding-top: 0.2rem;    
}
.h_box .product li p{
    height: 0.2rem;
    line-height: 0.2rem;
    padding-bottom: 0.1rem;
    padding-top: .5rem;
    margin:auto;
    text-align: center;
}

</style>
>>>>>>> b24098966189a584761dceaed44ace7377568b99
