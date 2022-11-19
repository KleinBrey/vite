<template>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-menu
        :default-active="defaultActiveMenu"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="menuSelect"
      >
        <MenuContent
          v-for="(item, index) in menulist"
          :itemcontent="item"
          :key="index"
        />
      </el-menu>
      <div class="right-user">
        <el-dropdown>
          <el-icon class="icon">
            <setting />
          </el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span class="name">管理员</span>
      </div>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <div>
        @Copyright Klein's Blog
      </div>
    </el-footer>
  </el-container>
</template>
<script setup>
import { ref, computed } from "vue";
import { logOut } from "/@/api/login";
import MenuContent from "../../components/MenuContent.vue";
import { Message, Menu, Setting } from "@element-plus/icons";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import * as types from "../../store/mutation-types";

const store = useStore();
const routers = useRouter();
const menulist = computed(() => store.state.menulist);
const defaultActiveMenu = ref(menulist.value[0].path);
const menuSelect = (e) => {
  routers.push(e);
};
const logout = () => {
  logOut({ fhfhfh: 1 }).then((res) => {
    routers.push("/login");
    window.sessionStorage.clear();
    store.commit(types.MENU_LIST, []);
  });
};
</script>

<style lang="less">
.el-container {
  min-height: 100%;
  max-height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  line-height: 60px;
  .right-user {
    display: flex;
    position: absolute;
    top: 0;
    right: 50px;
    justify-content: center;
    align-items: center;
    .icon {
      color: white;
      margin-right: 10px;
    }
    .name {
      color: rgb(210, 201, 39);
    }
  }
}
.el-main {
  padding: 0 150px;
  background-color: antiquewhite;
}
.el-footer{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
