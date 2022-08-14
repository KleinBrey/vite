
<template >
  <div>
    <!-- 存在子菜单 -->
    <template v-if="item.children && item.children.length>0">
      <!-- {{item.title}} -->
      <el-sub-menu :index="item.path">
        <template #title>
          <el-icon>
            <message />
          </el-icon>
          {{item.title}}
        </template>
        <el-menu-item
          v-for="child in item.children"
          :key="child.path"
          :index="child.path"
        >{{child.title}}</el-menu-item>
      </el-sub-menu>
    </template>
    <!-- 不存在子菜单 -->
    <template v-else>
      <el-menu-item :index="item.path">{{item.title}}</el-menu-item>
    </template>
  </div>
</template>

<script setup>
import { Message, Menu, Setting } from "@element-plus/icons";

const props = defineProps({
  itemcontent: {
    type: Array,
    default: {}
  }
});
const item = props.itemcontent;
</script>
