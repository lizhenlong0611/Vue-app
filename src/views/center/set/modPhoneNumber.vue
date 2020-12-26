<template>
  <div>
    <h4>修改手机号</h4>
    <hr />
    <van-form @submit="onSubmit">
      <van-field
        v-model="phone"
        :formatter="formatter"
        replace
        maxlength="11"
        type="phone"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="sms"
        center
        clearable
        maxlength="6"
        label="短信验证码"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          @click="pgoneval"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
import Vue from "vue";
import { Form, Field, Button } from "vant";

Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
export default {
  data() {
    return {
      iset: [],
      phone: "",
      sms: "",
    };
  },
  methods: {
    onSubmit(val) {
      if (this.phone == "") {
        return this.sms = "";
      }
      this.iset = val;
    },
    formatter(value) {
      return value.replace(/^1[3-9]\d{9}$/);
    },
    pgoneval() {
      if (this.phone !== "" && this.sms !== "") {
        this.$store.commit("setphone", this.iset);
        localStorage.setItem("phone", JSON.stringify(this.iset));
      }
    },
  },
};
</script>
<style  leng="scss" scoped>
.ismodlie {
  margin: 30px 0 40px 15px;
}
</style>