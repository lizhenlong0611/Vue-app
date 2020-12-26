<template>
  <div class="header">
    <h3 style="display:inline-block">
        <img id="u375_img" class="img " src="http://cloud.axureshop.com/gsc/DI13H1/2c/7b/7b/2c7b7b7a848441deaf1b404dcf264202/images/资讯详细页/u375.svg?token=7a30e26119b3231d670927c232d6ef225cbd4735cf15b64adaa6cbb604aaf56e" width="20px" @click="setpush"> 
        {{name}}
        <span>
            <img src="" alt="">
            <img id="u387_img" class="img " src="http://cloud.axureshop.com/gsc/DI13H1/2c/7b/7b/2c7b7b7a848441deaf1b404dcf264202/images/资讯详细页/star01_u387.png?token=fbf3f63ca869bc9c029c3e3c2157193f20b80b3f1b4a544ac184a0f1ad6922f5" style="margin: 0 30px">
            <img id="u389_img" class="img " src="http://cloud.axureshop.com/gsc/DI13H1/2c/7b/7b/2c7b7b7a848441deaf1b404dcf264202/images/资讯详细页/u389.svg?token=b98033b1327dccf35866824f92d5494b7d2b72de7a8941f54e4308926ebad886" width="20px">
        </span>
    </h3>
    <hr />
    <div>{{ ShortSpell }}</div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            isindex:{},
            ShortSpell:"",
            name:'',
        }
    },
  created() {
      this.isindex = this.$store.state.isindex
      this.ShortSpell=this.isindex.ShortSpell
      this.name=this.isindex.Name
  },
  methods:{
      setpush(){
        this.$router.go(-1)
      }
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
</style>