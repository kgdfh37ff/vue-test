<template>
  <div>
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <h1>{{ obj2.age }}</h1>
    <h1>{{ company }}</h1>
    <h1>{{ obj.taobao }}</h1>
    <button @click="btn">this is a button</button>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import {ref} from 'vue'

  const name = ref('abcd')
  const age = 50
  const company = 'alibaba'
  const obj = ref({taobao:'taobao',tianmao:'tianmao'})
  const obj2 = reactive({age,company})

  function btn(){
    name.value='ttttttt'
    obj.value.taobao = 'ttttttt'
    obj2.age=20
  }

</script>
