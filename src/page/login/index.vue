<template>
  <div class="login">
    <el-icon style="vertical-align: middle">
      <search />
    </el-icon>
    <div class="logincontent">
      <el-form :model="model" :rules="rules" ref="ruleForm" class="rule-form">
        <el-form-item prop="userName">
          <el-input
            clearable
            v-model="model.userName"
            placeholder="请输入用户名"
          >
            <template #prefix>
              <el-icon class="el-input__icon">
                <user />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="passWord">
          <el-input
            clearable
            type="password"
            show-password
            v-model="model.passWord"
            placeholder="请输入密码"
          >
            <template #prefix>
              <el-icon class="el-input__icon">
                <lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="verify" v-if="ifregiste">
          <el-col :span="12">
            <el-input clearable v-model="model.verify" placeholder="输入验证码">
              <template #prefix>
                <el-icon class="el-input__icon">
                  <sunny />
                </el-icon>
              </template>
            </el-input>
          </el-col>
          <el-col :span="12">
            <div>
              <img
                ref="captcha"
                @click="toggleVerify"
                src="http://localhost:3000/code"
                alt
              />
            </div>
          </el-col>
        </el-form-item>

        <el-form-item style="justify-content: center">
          <el-button
            :type="ifregiste ? '' : 'primary'"
            @click.prevent="handleLogin"
            >登录</el-button
          >
          <el-button :type="ifregiste ? 'primary' : ''" @click="resetForm"
            >注册</el-button
          >
        </el-form-item>
        <span title="测试用户 直接登录" class="secret" @click="noSecret"
          >免密登录</span
        >
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
import { useRouter } from "vue-router";
import { User, Lock, Sunny } from "@element-plus/icons";
import { register } from "/@/api/login";
import { ElLoading, ElMessage } from "element-plus";

const store = useStore();
const router = useRouter();
const ruleForm = ref(null);
const captcha = ref(null);
const form = reactive({
  model: {
    userName: "",
    passWord: "",
    verify: "",
  },
  ifregiste: false,
  rules: {
    userName: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    passWord: [
      { required: true, message: "请输入密码", trigger: "blur" },
      { min: 2, message: "密码长度必须不小于2位", trigger: "blur" },
    ],
    verify: [{ required: true, message: "请输入验证码", trigger: "blur" }],
  },
});
const handleLogin = () => {
  if (form.ifregiste) {
    form.ifregiste = false;
    return;
  }
  ruleForm.value.validate(async (valid) => {
    if (valid) {
      store
        .dispatch("setToken", form.model)
        .then((res) => {
          if (res) {
            router.push({ path: "/dashboard" });
          }
        })
        .catch((res) => console.log(res));
      cookie.setCookie(form.model.userName, form.model.passWord, 5);
    }
  });
};
const resetForm = () => {
  if (!form.ifregiste) {
    form.ifregiste = true;
    return;
  }
  ruleForm.value.validate(async (valid) => {
    if (valid) {
      const data = await register(form.model);
      if ((data.code = 200)) {
        ElMessage({
          type: "success",
          message: data.message,
        });
        form.ifregiste = false;
      }
    }
  });
  // storage.removeValue("ACCESS_TOKEN");
};
const toggleVerify = () => {
  captcha.value.src = "http://localhost:3000/code?time=" + Date.now();
};
// 回车登录
const handleEnterKey = (e) => {
  if (e.keyCode === 13) {
    handleLogin();
  }
};
onMounted(() => {
  document.addEventListener("keydown", handleEnterKey);
  form.model.userName = cookie.getCookie()?.userName;
  form.model.passWord = cookie.getCookie()?.passWord;
});
onUnmounted(() => {
  document.removeEventListener("keydown", handleEnterKey);
});

const { model, rules, ifregiste } = toRefs(form);
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
        font-size: var(--fdsize);
        display: inline-block;
        cursor: pointer;
      }
      .tag {
        position: absolute;
        right: 10px;
        bottom: 10px;
        font-size: calc(var(--fbsize) * 1px);
        font-family: "Franklin";
      }
    }
  }
}
</style>
