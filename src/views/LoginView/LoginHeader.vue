<template>
  <div class="login-header">
    <div class="login-center">
      <div class="login-head">
        <p>登录云南万达纸业</p>
      </div>
    </div>
    <!-- 插槽 -->
    <div class="container">
      <slot name="container"></slot>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class LoginHeader extends Vue {}
</script>


<style lang="less">
.login-header {
  width: 100%;
  height: 100%;
  background-image: url("https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png");
  background-repeat: no-repeat;
  background-color: #b8e5f8;
  background-size: cover;
  overflow: auto;
  .login-center {
    position: absolute;
    width: 400px;
    height: 540px;
    margin: auto;
    top: 120px;
    right: 0;
    left: 0;
    padding: 0 16px;
    border-radius: 4px;
    background: #fff;
    transition: all 0.2s ease-in-out;
    .login-head {
      border-bottom: 1px solid #e8eaec;
      padding: 14px 16px;
      line-height: 1;
      p {
        display: inline-block;
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        color: #17233d;
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        letter-spacing: 1px;
      }
    }
  }
  .container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    position: absolute;
    width: 400px;
    height: 500px;
    margin: auto;
    top: 200px;
    right: 0;
    left: 0;
    padding: 0 16px;
  }
}
</style>