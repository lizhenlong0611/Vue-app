<template>
  <div>
    <h4>消息</h4>
    <hr />
      <div class="header">
    <van-card num="2" class="coltit" >
      <template #title>
        <van-tag class="titen">课程消息</van-tag>
      </template>
      <template #desc>
        <van-tag class="titens">&emsp;&emsp;亲爱的小小，您已成功的购买了【二年级数学志高秋季班(下)】，主课老师会联系您，请按时上课哦~</van-tag>
      </template>
      <template #num>
        <van-tag class="titens">2019-10-16</van-tag>
      </template>
    </van-card>
    <van-card num="2" >
      <template #title>
        <van-tag class="titen">课程消息</van-tag>
      </template>
      <template #desc>
        <van-tag class="titens">&emsp;&emsp;亲爱的小小，您已成功的购买了【二年级数学志高秋季班(下)】，主课老师会联系您，请按时上课哦~</van-tag>
      </template>
      <template #num>
        <van-tag class="titens">2019-10-16</van-tag>
      </template>
    </van-card>
    <van-card num="2" >
      <template #title>
        <van-tag class="titen">课程消息</van-tag>
      </template>
      <template #desc>
        <van-tag class="titens">&emsp;&emsp;亲爱的小小，您已成功的购买了【二年级数学志高秋季班(下)】，主课老师会联系您，请按时上课哦~</van-tag>
      </template>
      <template #num>
        <van-tag class="titens">2019-10-16</van-tag>
      </template>
    </van-card>
    <van-card num="2" >
      <template #title>
        <van-tag class="titen">课程消息</van-tag>
      </template>
      <template #desc>
        <van-tag class="titens">&emsp;&emsp;亲爱的小小，您已成功的购买了【二年级数学志高秋季班(下)】，主课老师会联系您，请按时上课哦~</van-tag>
      </template>
      <template #num>
        <van-tag class="titens">2019-10-16</van-tag>
      </template>
    </van-card>
    <van-card num="2" >
      <template #title>
        <van-tag class="titen">课程消息</van-tag>
      </template>
      <template #desc>
        <van-tag class="titens">&emsp;&emsp;亲爱的小小，您已成功的购买了【二年级数学志高秋季班(下)】，主课老师会联系您，请按时上课哦~</van-tag>
      </template>
      <template #num>
        <van-tag class="titens">2019-10-16</van-tag>
      </template>
    </van-card>
  </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Card } from "vant";

Vue.use(Card);
export default {};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.header{
  background: #c4c4c4;
}
.coltit{
  background:#fafafa;
}
.titen{
    font-size: 18px;
    font-weight: bold;
    color:#000 ;
    background: #fafafa;
    margin-top:10px ;
}
.titens{
    padding:20px 20px  0 20px;
    font-size: 12px;
    color:#000 ;
    background: #fafafa;

}
</style>
