<template>
    <div v-if="show" class="alert alert-warning position-absolute top-50 start-50 translate-middle">
        {{ message }}
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

const show = ref(false);
const message = ref('Alert');

</script>
<style>
/* A {
    top: 0px;
    left: 0px;
    z-index: -1;

    width: 100px;
    height: 100px;
} */
</style>