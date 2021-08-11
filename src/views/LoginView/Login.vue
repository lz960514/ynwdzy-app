<template>
  <div class="login">
    <LoginHeader>
      <Form ref="ruleForm" :rules="rules" :model="ruleForm" slot="container">
        <FormItem prop="username" label="用户名：">
          <Input type="text" v-model="ruleForm.username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="pwd" label="密码：">
          <Input type="password" v-model="ruleForm.pwd">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button
            :loading="isLogin"
            @click.native.prevent="handleSubmit('ruleForm')"
            type="primary"
            long
            >登录</Button
          >
        </FormItem>

        <FormItem>
          <Checkbox v-model="ruleForm.autoLogin">7天内自动登录</Checkbox>
          <Button to="/password" class="forget" type="text">忘记密码？</Button>
        </FormItem>
      </Form>
    </LoginHeader>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue, Provide } from "vue-property-decorator";
import LoginHeader from "./LoginHeader.vue";

@Component({
  components: { LoginHeader },
})
export default class Login extends Vue {
  @Provide() isLogin: boolean = false;
  @Provide() ruleForm: {
    username: String;
    pwd: String;
    autoLogin: Boolean;
  } = {
    username: "",
    pwd: "",
    autoLogin: false,
  };
  @Provide() rules = {
    username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    pwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
  };

  handleSubmit(name: string): void {
    (this.$refs[name] as any).validate((valid: boolean) => {
      if (valid) {
        this.isLogin = true;
        (this as any).$axios
          .post("/api/users/login", this.ruleForm)
          .then((res: any) => {
            this.isLogin = false;
            this.$Message.success({
              content: res.data.msg,
              duration: 3,
              closable: true,
            });
            localStorage.setItem("tsToken", res.data.token);
            this.$router.push("/");
          })
          .catch((err: any) => {
            console.log(err);
            this.isLogin = false;
            this.ruleForm = {
              username: "",
              pwd: "",
              autoLogin: false,
            };
          });
      } else {
        this.$Message.error({
          content: "用户名或密码不能为空 ！",
          duration: 3,
          closable: true,
        });
      }
    });
  }
}
</script>

<style lang="less">
.login {
  width: 100%;
  height: 100%;
}
.forget {
  float: right;
}
</style>