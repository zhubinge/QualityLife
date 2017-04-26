<template>
<div>
	<div class="top_nav">
        <a href="javascript:history.back()" class="l"> < </a>
        <p class="l">{{detailLists[0].class_name}}</p>
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
        var that = this;
      var search = {info_id:this.$route.params.classId}
      this.$http.post('/api/com/getcom',search)
        .then((response) => {
          console.log(response.data);
          that.detailLists = response.data
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
