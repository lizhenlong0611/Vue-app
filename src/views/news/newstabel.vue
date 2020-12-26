<template>
    <div>
    <h2>资讯</h2>
    <hr />
    <van-card
      v-for="(item, index) in lists"
      :key="index"
      :num="2"
      :price="1000"
      :title="item.Name"
      @click="setClick(index)"
    >
      <template #thumb>
        <!-- <van-tag plain type="danger"><img src="" width="80px" height="80px"/></van-tag> -->
      </template>
      <template #num>
        <van-tag >1000</van-tag>
      </template>
    </van-card>
  </div>
</template>
<script>
import Vue from "vue";
import { Card, Tag } from "vant";
Vue.use(Card);
Vue.use(Tag);
export default {
  data() {
    return {
      lists: "",
      index:"",
    };
  },
  created() {
    this.$http.get("http://127.0.0.1/http/getAirPortInfo.php").then((ret) => {
      this.lists = ret;
      
      
    });
  },
  methods:{
    setClick(index){
      this.$router.push('/news/newslist')
      this.$store.commit('setindex' , this.lists[index])
      localStorage.setItem('lists', JSON.stringify(this.lists[index]) )
    }
  },
};
</script>
<style lang="scss" scoped>
*{
    margin:0;
    padding:0;
}
</style>