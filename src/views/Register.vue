<template>
  <div id="building">
    <div align="center">
      <el-form id="building2">
        <div class="title-container">
          <h3 class="title">注册</h3>
        </div>
        <el-row >
          <el-col>
            <el-form-item style="display: inline-block">
        
              <el-form-item label="请输入账号">
                <el-input ref="username" v-model="username" placeholder="请输入账号" name="username" type="text" tabindex="1"
                  autocomplete="on" />
              </el-form-item> </el-form-item>
          </el-col>
        </el-row>

        <el-tooltip>
          <el-row >
            <el-col>
              <el-form-item style="display: inline-block">
   
                <el-form-item label="请输入密码">
                  <el-input v-model="password" type="password" placeholder="请输入密码" name="password" />
                  <span class="show-pwd">
                    <svg-icon icon-class="password" />
                  </span>
                </el-form-item></el-form-item>
            </el-col>
          </el-row>
        </el-tooltip>

        <el-tooltip>
          <el-row>
            <el-col>
              <el-form-item style="display: inline-block">
    
                <el-form-item label="请确认密码">
                  <el-input v-model="password2" type="password" placeholder="请确认密码" name="password2" />
                  <span class="show-pwd">
                    <svg-icon icon-class="password" />
                  </span>
                </el-form-item></el-form-item>
            </el-col>
          </el-row>
        </el-tooltip>
        <el-button type="primary" style="width: 20%; margin-bottom: 110px" @click="handleReg()">注册</el-button>
        <el-button type="primary" style="width: 20%; margin-bottom: 110px" @click="cancel()">返回登录</el-button>
      </el-form>


    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      rolename: "",
      value: ""
    };
  },
  beforeMount() {
    this.$store.commit("logout");
  },
  methods: {
    handleReg() {
      if(this.password !=this.password2){
          alert ('两次输入的密码不同')
      }else{
        // axios.post('http://localhost:9090/api/auth/register', 注册方法
        //   {
        //       username: this.username,
        //       password: this.password,
        //   }).then(res => {
        //      if(res.data.message=="User registered successfully!"){
        //       alert("注册成功！")
        //      }
        //   })
        //   .catch(err=>{
        //      console.log(err)
        //      alert("注册失败！")})
      }

    },
    cancel() {
      this.$router.push({
        path: "Login",
        query: {},
      });
    },
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
#building2 {
    input {
      background: transparent;
      border: 0px;
      // -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: black;
      height: 34px;
      caret-color: $bg;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $cursor inset !important;
        -webkit-text-fill-color: $bg !important;
      }
    }
  

}


</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

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
</style>./Signup.vue
