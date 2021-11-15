<template>
  <div class="login">
    <el-icon style="vertical-align: middle;">
      <search />
    </el-icon>
    <div class="logincontent">
      <el-form :model="model" :rules="rules" ref="ruleForm" class="rule-form">
        <el-form-item prop="userName">
          <el-input
            clearable
            v-model="model.userName"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="passWord">
          <el-input
            clearable
            type="password"
            show-password
            v-model="model.passWord"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.prevent="handleLogin">登录</el-button>
          <el-button @click="resetForm">注册</el-button>
        </el-form-item>
        <span title="测试用户 直接登录" class="secret" @click="noSecret">免密登录</span>
        <span class="tag">THRASHER</span>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, toRefs, onMounted, onUnmounted } from "vue";
import storage from "/@/utils/storage";
import cookie from "/@/utils/cookie";
import { useStore } from "vuex";
const store = useStore();
const ruleForm = ref(null);
const form = reactive({
  model: {
    userName: "",
    passWord: ""
  },
  rules: {
    userName: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    passWord: [
      { required: true, message: "请输入密码", trigger: "blur" },
      { min: 2, message: "密码长度必须不小于2位", trigger: "blur" }
    ]
  }
});
const handleLogin = () => {
  ruleForm.value.validate(async valid => {
    if (valid) {
      store.dispatch("setToken").then(res => console.log(res));
      cookie.setCookie(form.model.userName, form.model.passWord, 5);
    }
  });
};
const resetForm = () => {
  storage.removeValue("ACCESS_TOKEN");
};
// 回车登录
const handleEnterKey = e => {
  if (e.keyCode === 13) {
    handleLogin();
  }
};
onMounted(() => {
  document.addEventListener("keydown", handleEnterKey);
  form.model.userName = cookie.getCookie().userName;
  form.model.passWord = cookie.getCookie().passWord;
});
onUnmounted(() => {
  document.removeEventListener("keydown", handleEnterKey);
});

const { model, rules } = toRefs(form);
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url("/@/assets/img/homepage.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  .logincontent {
    width: 300px;
    height: 350px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    .rule-form {
      width: 80%;
      .verify {
        position: absolute;
        margin: -10px 0 0 -120px;
        &:hover {
          cursor: pointer;
        }
      }
      .tips {
        color: #000;
        float: right;
        font-weight: 500;
        &:hover {
          cursor: pointer;
        }
      }
      .secret {
        margin-top: 25px;
        font-size: 20px;
        display: inline-block;
        cursor: pointer;
      }
      .tag {
        position: absolute;
        right: 10px;
        bottom: 10px;
        font-family: "Franklin";
      }
    }
  }
}
</style>
