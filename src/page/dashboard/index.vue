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
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>Tom</span>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref, computed } from "vue";
import Submenu from "../../components/Submenu.vue";
import { Message, Menu, Setting } from "@element-plus/icons";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();
const routers = useRouter();
const menulist = computed(() => store.state.menulist);

const menuSelect = e => {
  routers.push({ path: e });
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
