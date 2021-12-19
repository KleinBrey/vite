<template>
  <el-container>
    <el-aside>
      <el-menu @select="menuSelect" unique-opened="true">
        <Submenu v-for="(item,index) in menulist" :itemcontent="item" :key="index" />
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <el-icon style="margin-right: 15px">
            <setting />
          </el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>管理员</span>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>底部</el-footer>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref, computed } from "vue";
import { logOut } from "/@/api/login";
import Submenu from "../../components/Submenu.vue";
import { Message, Menu, Setting } from "@element-plus/icons";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import * as types from "../../store/mutation-types";

const store = useStore();
const routers = useRouter();
const menulist = computed(() => store.state.menulist);

const menuSelect = e => {
  routers.push(e);
};
const logout = () => {
  logOut({ fhfhfh: 1 }).then(res => {
    routers.push("/login");
    window.sessionStorage.clear();
    store.commit(types.MENU_LIST, [])
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
}

.el-aside {
  width: 220px;
  overflow-x: hidden;
  background-color: #1b2a47;
  .el-menu {
    background-color: #1b2a47;
    color: white;

    .el-sub-menu__title {
      color: white;
      &:hover {
        background-color: #2a395b;
      }
    }
    .el-menu-item-group__title {
      color: white;
    }
    .el-menu-item {
      color: white;
      &:hover {
        background-color: #2a395b;
      }
    }
  }
}
</style>
