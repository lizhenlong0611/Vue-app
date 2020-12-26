<template>
  <div>
    <h4>修改密码</h4>
    <hr />
    <van-form @submit="onSubmit">
      <van-field
        v-model="valname"
        name="pattern"
        label="用户名"
        placeholder="用户名"
        :rules="[{ valpath, message: '请输入正确内容' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ onSubmit, message: '请输入正确内容' }]"
      />
      <van-field
        v-model="password2"
        type="password"
        name="password2"
        label="密码"
        placeholder="密码"
        :rules="[{ onSubmit, message: '请输入正确内容' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
import Vue from "vue";
import { Form, Field, Button ,Toast } from "vant";

Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Toast);
export default {
  data() {
    return {
      valname: "",
      password: "",
      password2: "",
      title: [],
      pattern: /\d{6}/,
    };
  },
  methods: {
    valpath(val) {
      return /1\d{10}/.test(val);
    },
    valpass(val) {
      return /[a-z]\d{10}/.test(val);
    },
    valpass2(val) {
      return /[a-z]\d{10}/.test(val);
    },
    onSubmit(values) {
      this.title = values;
      console.log(this.password);
      console.log(this.password2);
      if(this.password === this.password2){
        this.$store.commit("setpassword", this.title);
        localStorage.setItem("password", JSON.stringify(this.title));
        Toast.success('验证成功');
        // setInterval(()=>{
        //   this.$router.go(-1)
        // },2000)
      }else{
        Toast.fail('验证失败')
        window.location.href = window.location.href
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