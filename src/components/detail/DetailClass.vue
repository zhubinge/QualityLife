<template>
<div>
	<div class="top_nav"  v-for="detailList in detailLists">
		<a href="javascript:history.back()" class="l"> < </a>
        <p class="l">{{detailList.class_name}}</p>
    </div>

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
        var that = this;//=======================
        this.$http.get('/api/class/getClass')
          .then((response) => {
            that.detailLists = response.data;
            console.log('父组件的数据' + $that.$route.params.classId.$parent.$data)
          })
          .catch((reject) => {
            // console.log(reject)
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
