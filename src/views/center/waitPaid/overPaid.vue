<template>
  <div>
    <h4>
      <span @click="setgo">
        <img
          class="img"
          src="http://cloud.axureshop.com/gsc/DI13H1/2c/7b/7b/2c7b7b7a848441deaf1b404dcf264202/images/资讯详细页/u375.svg?token=f89c88016aa7ef77d997a87611e6a700dd1f6734ed3620807125f8617cab7f71"
          tabindex="0"
          width="20px"
        />
      </span>
      待支付课程
    </h4>
    <hr />
    <van-card title="商品标题" @click="httpGo">
      <template #title>
        <van-tag class="titcol" >订单编号：M20191009</van-tag><span style="float:right">已开课</span><br />
      </template>
      <template #desc>
        <van-tag class="titcol">二年级数学志高秋季班(下)</van-tag><br />
        <van-tag class="price">￥2340/10课时</van-tag>
      </template>
      <template #price class="pris">
        <van-tag class="yab">实付 :</van-tag>
        <van-tag class="col">2325</van-tag>
      </template>
      <template #num>
        <van-button size="mini" class="fols">立即支付</van-button>
        <van-button size="mini" class="folis">取消订单</van-button>
      </template>
    </van-card>
    <van-card title="商品标题">
      <template #title>
        <van-tag class="titcol" >订单编号：M20191009</van-tag><span style="float:right">已开课</span><br />
      </template>
      <template #desc>
        <van-tag class="titcol">二年级数学志高秋季班(下)</van-tag><br />
        <van-tag class="price">￥2340/10课时</van-tag>
      </template>
      <template #price class="pris">
        <van-tag class="yab">实付 :</van-tag>
        <van-tag class="col">2325</van-tag>
      </template>
      <template #num>
        <van-button size="mini" class="fols">立即支付</van-button>
        <van-button size="mini" class="folis">取消订单</van-button>
      </template>
    </van-card>
    <van-card title="商品标题">
      <template #title>
        <van-tag class="titcol" >订单编号：M20191009</van-tag><span style="float:right">已开课</span><br />
      </template>
      <template #desc>
        <van-tag class="titcol">二年级数学志高秋季班(下)</van-tag><br />
        <van-tag class="price">￥2340/10课时</van-tag>
      </template>
      <template #price class="pris">
        <van-tag class="yab">实付 :</van-tag>
        <van-tag class="col">2325</van-tag>
      </template>
      <template #num>
        <van-button size="mini" class="fols">立即支付</van-button>
        <van-button size="mini" class="folis">取消订单</van-button>
      </template>
    </van-card>
    <van-card title="商品标题">
      <template #title>
        <van-tag class="titcol" >订单编号：M20191009</van-tag><span style="float:right">已开课</span><br />
      </template>
      <template #desc>
        <van-tag class="titcol">二年级数学志高秋季班(下)</van-tag><br />
        <van-tag class="price">￥2340/10课时</van-tag>
      </template>
      <template #price class="pris">
        <van-tag class="yab">实付 :</van-tag>
        <van-tag class="col">￥2325</van-tag>
      </template>
      <template #num>
        <van-button size="mini" class="fols">立即支付</van-button>
        <van-button size="mini" class="folis">取消订单</van-button>
      </template>
    </van-card>
  </div>
</template>
<script>
import Vue from "vue";
import { Card } from "vant";
Vue.use(Card);
export default {
  data() {
    return {
      number: "",
      title: "",
      price: "",
      states: "",
      unpaid: "",
      data: [],
    };
  },
  methods: {
    setgo() {
      this.$router.go(-1);
    },
    httpGo(){
      this.$router.push("/waitPaid/onPaid")
    }
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
h4 {
  font-size: 30px;
}
.titcol {
  font-size: 15px;
  color: #000;
  background: #fafafa;
  margin: 10px 0;
}
.price {
  width: 100%;
  color: red;
  background: #fafafa;
  border-bottom: 1px #c4c4c4 solid;
}
.col {
  color: red;
  background: #fafafa;
}
.yab {
  height: 50px;
  line-height: 50px;
  color: #000;
  background: #fafafa;
  font-size: 15px;
}

.floats {
  height: 100%;
  float: right;
}
.fols{
    width: 50px;
    height: 30px;
    border-radius: 10%;
    background: red;
    margin: 5px 0 5px 5px;
}
.folis{
    width: 50px;
    height: 30px;
    border-radius: 10%;
    background: rgb(65, 7, 224);
    margin: 5px 0;
}
</style>