<template>
<div class="wrapper">
  <div class="menu">
    <i class="iconImg"></i>
    <div class="menubox" >
      <span><i>F</i>ile</span>
      <span><i>E</i>dit</span>
      <span><i>C</i>ode</span>
      <span><i>H</i>elp</span>
    </div>
    <div class="draggable"></div>
  </div>
  <div class="optBtn">
    <el-icon class="windowchange maximizewin" @click="minimizewin"><Minus /></el-icon>
    <el-icon class="windowchange maximizewin" @click="maximizewin"><CopyDocument /></el-icon>
    <el-icon class="close" @click="closewin"><Close class="clo"/></el-icon>
  </div>
</div>
</template>

<script>
const remote = require("@electron/remote");
let mainWin = remote.getCurrentWindow()
export default {
  name: "NavMenu",
  methods: {
    minimizewin() {
      // 最小化
      if(!mainWin.isMinimized()) {
        mainWin.minimize()
      }
    },
    maximizewin() {
      // 最大化
      if(!mainWin.isMaximized()) {
        mainWin.maximize()  // 让窗口最大化
      } else {
        mainWin.restore()   // 让窗口回到原来的状态
      }
    },
    closewin() {
      mainWin.close()
    },
  }
}

//
// // 利用 romote 可以获取当前窗口对象
//


</script>

<style scoped>
.maximizewin {
  rotate: 180deg;
}
.wrapper {
  width: 100%;
  height: 100%;
}
.optBtn {
  width: 138px;
  float: right;
}
.optBtn .el-icon {
  height: 40px;
  line-height: 40px;
  display: inline-block;
  padding: 0 15px;
  user-select: none;
}
.optBtn .close .clo{
  vertical-align: -6px;
  font-size: 21px;
}
.optBtn .close:hover {
  background-color: #e64f4f;
  cursor: pointer;
}
.optBtn .close:active {
  background-color: #e96c6c;
  cursor: pointer;
}
.wrapper .optBtn .windowchange:hover {
  background-color: #757575;
  cursor: pointer;
}
.wrapper .optBtn .windowchange:active {
  background-color: #adadad;
  cursor: pointer;
}

.wrapper .menu {
  float: left;
  width: calc(100% - 138px);
  height: 100%;
}
.wrapper .menu .iconImg {
  background-image: url("/public/favico.png");
  background-size: 32px 32px;
  background-repeat: no-repeat;
  width: 32px;
  height: 32px;
  display: inline-block;
  float: left;
  margin: 4px 8px;
}
.menubox {
  float: left;
  width: 172px;
  height: 40px;
}
.menubox span{
  height: 40px;
  line-height: 40px;
  display: inline-block;
  margin-right: 10px;
  user-select: none;
}
/*.menubox span:hover {*/
/*  cursor: pointer;*/
/*  color: #333;*/
/*}*/
.menubox span i {
  text-decoration: underline;
}
.menu .draggable {
  width: calc(100% - 220px);
  height: 100%;
  -webkit-app-region: drag;
  float: right;
}
</style>
