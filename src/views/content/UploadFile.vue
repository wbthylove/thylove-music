<!--<template>
  <el-upload
      class="upload-demo"
      drag
      action="/mp4ToTs/uploadVideoFile"
      multiple
      name="uploadFile"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
  >
    <el-icon class="el-icon&#45;&#45;upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      Drop file here or <em>click to upload</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </el-upload>
</template>

<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'
const handleAvatarSuccess = (response, file) => {
  console.log(response);
}
//文件上传成功后的钩子，response为服务端返回的值，file为当前上传的文件封装成的js对象
const beforeAvatarUpload = (file) => {
  const isMp4 = file.type === 'mp4';
  const isJpg = file.type === 'jpg';
  const isLt1G = file.size / 1024 / 1024 < 1024;
  if (!isMp4 || !isJpg) {
    this.$message.error('上传视频文件只能是 Mp4 格式!');
  }
  if (!isLt1G) {
    this.$message.error('上传视频文件大小不能超过 1GB!');
  }
  return isMp4 && isLt1G;
}

</script>-->

<template>
  <form id="myform" name="myform" action="/mp4ToTs/uploadVideoFile" method="post" enctype="multipart/form-data" >

    <div id="sendBefore">
      <p>上传视频</p>
      <input id="videoForm" type="file" name="uploadFile" multiple= "multiple" />
    </div>
    <input type="submit">
  </form>
</template>
<script setup lang="ts">



</script>
