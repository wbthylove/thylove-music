<template>
  <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
  >
    <el-form-item label="文件地址" prop="file_input">
      <el-input v-model="ruleForm.input" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item label="输出地址" prop="file_output">
      <el-input
          v-model="ruleForm.output"
          type="text"
          autocomplete="off"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
      >Submit</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import axios from "../../utils/axios.js";
// import axios from "axios";
const ruleFormRef = ref<FormInstance>()


const validateinput = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the file adders'))
  } else {
    if (ruleForm.input !== '') {
      callback(new Error('Please input the file adders'))
    }
    callback()
  }
}
const validateoutput = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the output file adders'))
  }
  else {
    if (ruleForm.output !== '') {
      callback(new Error('Please input the output file adders'))
    }
    callback()
  }
}

const ruleForm = reactive({
  input: 'D:\\APP\\nginx-1.18.0\\html\\mp4\\【四级】翻译4.mp4',
  output: 'D:\\APP\\nginx-1.18.0\\html\\m3u8\\hls',
})
// 验证没有做好
const rules = reactive<FormRules>({
  input: [{ validator: validateinput, trigger: 'blur' }],
  output: [{ validator: validateoutput, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) { //{headers:{"Content-Type":'application/x-www-form-urlencoded'}}
      axios.post("/mp4ToTs/mp4TransformTs",ruleForm).then((res) => {
        console.log(res.data)
      }).catch((err) => {
        console.log(err)
      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {

  console.log("reset")
  if (!formEl) return
  formEl.resetFields()
}
</script>

