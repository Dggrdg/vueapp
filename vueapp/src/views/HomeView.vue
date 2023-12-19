<template>
  <div class="container">
    <Input />
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { onMounted } from 'vue';
import { Test } from '@/type/Interface/Test.ts'

var test: Test = {
  name: "20",
  age: "20"
}

function showtype<T>(args: T): T {
  return args;
}

onMounted(() => {
  // console.log(typeof (showtype("Hello")));
})



</script>
