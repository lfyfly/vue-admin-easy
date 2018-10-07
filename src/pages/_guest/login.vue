<template>
  <div class="login-page">
    <div class="login-card">
      <div class="logo">
        <img src="~@/assets/img/logo.png" alt="">
      </div>
      <el-form ref="login" :model="form" :rules="rules">
        <el-form-item prop="email">
          <el-input v-model="form.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" type="password" placeholder="密码"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button class="login-btn" type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import API from '@/API'
import UTIL from '@/UTIL'
export default {
  name: 'login-page',
  data () {
    return {
      msg: 'this is from login-page.vue',
      form: {
        email: 'lfy@qq.com',
        password: '111111'
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.login.validate((valid) => {
        if (valid) {
          API.me.login(this.form).then(res => {
            let token = res.data.token
            if (token) {
              console.log('登录成功', res)
              UTIL.token.set(token)
              this.$router.push('/')
            } else {
              alert('登录失败')
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss">
.login-page {
  .el-input__inner {
    background: rgba(255, 255, 255, 0.6);
    color: rgba(0, 0, 0, 0.8);
  }
  $placeholder-color: rgba(0, 0, 0, 0.5);
  input::-webkit-input-placeholder {
    color: $placeholder-color;
  }
  input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: $placeholder-color;
  }
  input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: $placeholder-color;
  }
  input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: $placeholder-color;
  }
}
</style>

<style lang='scss' scoped>
.login-page {
  .login-card {
    margin: 0 auto;
    padding: 20px;
    min-width: 300px;
    box-sizing: border-box;
    max-width: 360px;
    .logo {
      width: 80px;
      margin: 40px auto 20px;
      opacity: .8;
      img {
        width: 100%;
      }
    }
    .login-btn {
      display: block;
      width: 100%;
      opacity: 0.8;
    }
  }
}
</style>
