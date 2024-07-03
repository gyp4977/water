<template>
  <Navi />
  <div class="center" id="login_look">
    <h1 class="login-title">水利大模型</h1>

    <div class="logon">
    <el-form class="login-form" autocomplete="on" label-position="left">
      <div class="title-container">
        <h3 class="title" style="padding-top : 10px">登陆</h3>
      </div>

      <el-form-item >
        <span class="svg-container">
          <i class="el-icon-user-solid"></i>
        </span>
        <el-input
          ref="username"
          v-model="username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <el-tooltip style="padding-bottom: 50px">
        <el-form-item>
          <span class="svg-container">
            <i class="el-icon-key"></i>
          </span>
          <el-input
            v-model="password"
            type="password"
            placeholder="Password"
            name="password"
          />
          <span class="show-pwd">
            <svg-icon icon-class="password" />
          </span>
        </el-form-item>
      </el-tooltip>

      <el-button
          type="primary"
          style="width: 20%; margin-bottom: 30px"
          @click="Reg()"
          >注册</el-button
        >
        <el-button
          type="primary"
          style="width: 20%; margin-bottom: 30px"
          @click="handleSubmit"
          >登录</el-button
        >
    </el-form>
  </div>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      type:""
    };
  },
  beforeMount() {
    this.$store.commit("logout");
  },
  methods: {
    handleSubmit() {
      this.$router.push({
        path: "chat",
        query: {},
      });
      // const { username, password } = this; 这一部分是登陆提交，目前直接跳转到chat对话界面。 因为没有登陆在main.js中对目前所有界面都没有进行路由保护。
      //   if (username && password) {
      //   this.$store
      //     .dispatch("login", {
      //       username: username,
      //       password: password,
      //     })
      //     .catch(() => {
      //       this.$message({
      //         message: " 用户名或密码错误",
      //         type: "warnning",
      //       });
      //     });
      // } 
    },
    Reg(){
      this.$router.push({
        path: "Register",
        query: {},
      });
    }
  },
};
</script>


<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}
/* reset element-ui css */
.logon {

  .el-input {
    display: inline-block;
    height: 47px;
    width: 100%;

    input {
      background: transparent;
      border: 0px;
      // -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: black;
      height: 47px;
      caret-color: $bg;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $cursor inset !important;
        -webkit-text-fill-color: $bg !important;
      }
    }
  }

  // .el-form-item {
  //   border: 1px solid rgba(255, 255, 255, 0.1);
  //   background: rgba(0, 0, 0, 0.1);
  //   border-radius: 5px;
  //   color: #454545;
  // }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;


.center {
  background-image: url('../assets/watermark.JPG');
  width: 100%;
  aspect-ratio: 16 / 8;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.login-title {
  color: white;
}
.logon {
  border-radius: 30px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  /* position: relative;
    overflow: hidden; */
  width: 488px;
  max-width: 100%;
  min-height: 420px;
  margin-top: 20px;
  // display: flex;
  background: -webkit-linear-gradient(right, #96f5fe, #ffffff);
}
.login-container {
  min-height: 100% !important;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}


</style>

