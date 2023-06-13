<script setup>

import {useStore} from 'vuex'
const store = useStore()


import {computed,} from "vue";

let count = computed(() => {
  return  store.getters.getCountState
})
const add = () => {
  store.commit('increment', {'step': 1})
}
</script>

<template>
    <main>
        count: {{count}}
      <br>
      <el-button type="primary" @click="add">count++</el-button>
    </main>
</template>
