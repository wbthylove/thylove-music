<script setup>
import Home from './views/Home.vue';
import NavMenu from "./views/NavMenu.vue";
import Aside from "./views/Aside.vue";

</script>

<template>
  <el-container>
    <el-header >
      <NavMenu></NavMenu>
    </el-header>
    <el-container class="mainContent">
      <el-aside width="200px">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-main>
          <router-view ></router-view>
        </el-main>
        <el-footer>
          <div style="background-color: #72767b; height: 100%"></div>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>


<style scoped>
.el-header {
  width: 100%;
  height: 40px;
  padding: 0;
  border-bottom: 1px solid #b4b4b4;

}.el-container {
   height: 100%;
 }
.el-aside {
  width: 200px;
  height: 100%;
}
.el-main {
  height: calc(100% - 60px);
  /*height: 100%;*/
  padding: 0;

}
.mainContent {
  height: calc(100% - 40px);
}
</style>


