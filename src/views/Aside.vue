<template>
  <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
  >

    <router-link :to="menu.path" v-for="(menu,index) in menus" @click="showMain(index)">
      <el-menu-item :index="index + ''" @click="showMain(index)">
        <el-icon class="location">
          <component :is="menu.icon"/>
        </el-icon>
        <template #title>{{menu.navName}}</template>
      </el-menu-item>
    </router-link>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// 引入store
import {useStore} from "vuex";
const store = useStore()

const isCollapse = ref(false)
const menus = [
  {
    'navName': 'Navigator One',
    'icon': 'document',
    'path': '/',

  },
  {
    'navName': 'Navigator Two',
    'icon': 'location',
    'path': '/study-content',

  },
  {
    'navName': 'Upload File',
    'icon': 'upload',
    'path': '/upload-file',

  },
  {
    'navName': 'Navigator Four',
    'icon': 'setting',
    'path': '/setting',

  }
]


const showMain = (key: string,) => {
  store.commit('increment', {'step': key})
}

</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100%;
}
</style>
