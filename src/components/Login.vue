<template>
  <div class="bg">
    <a-row>
      <a-col :span="8">
      </a-col>
      <a-col :span="8">
        <div class="header" style="margin: 40px">
          <img src="../assets/logo.png" alt="logo" class="logo" />
          <span class="title" style="margin-left: 20px">Shangyin Mock</span>
        </div>
          <a-form-model ref="ruleForm" :model="ruleForm" :rules="rules" v-bind="layout">
            <a-form-model-item has-feedback prop="pass">
              <a-input size="large" v-model="ruleForm.pass" autocomplete="off" placeholder="工号">
                <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.75)" />
              </a-input>
            </a-form-model-item>
            <a-form-model-item has-feedback prop="checkPass">
              <a-input size="large" v-model="ruleForm.checkPass" type="password" autocomplete="off" placeholder="密码">
                <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.75)" />
              </a-input>
            </a-form-model-item>
            <a-form-model-item >
              <a-button size="large" type="primary" @click="submitForm('ruleForm')" block>
                登录
              </a-button>
              <a-button size="large" style="margin-top: 20px;background-color:mediumseagreen;color: white" @click="resetForm('ruleForm')" block>
                重置
              </a-button>
            </a-form-model-item>
          </a-form-model>
      </a-col>
      <a-col :span="8">
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    let checkPending
    const checkAge = (rule, value, callback) => {
      clearTimeout(checkPending)
      if (!value) {
        return callback(new Error('Please input the age'))
      }
      checkPending = setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('Please input digits'))
        } else {
          if (value < 18) {
            callback(new Error('Age must be greater than 18'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入工号'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'change' }],
        checkPass: [{ validator: validatePass2, trigger: 'change' }],
        age: [{ validator: checkAge, trigger: 'change' }]
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 22 }
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push('/index')
          // alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
body{
  background-color: rgb(240, 242, 245);
}
.bg{
  background-color: rgb(240, 242, 245);
  background-image: url("../assets/bg.png");
  background-repeat: no-repeat;
  background-position: center center;
  width: 1366px;
  height: 657px;
}
.title{
  font-size: 33px;
  color: rgba(50,50,50,.95);
  font-family: Myriad Pro,Helvetica Neue,Arial,Helvetica,sans-serif;
  font-weight: 600;
  position: relative;
  top: 10px;
}
</style>
