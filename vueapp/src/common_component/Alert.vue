<template>
    <div v-if="show" class="alert alert-warning">
        {{ message }}
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

export { showAlert }

const show = ref(false);
const message = ref('');

function showAlert() {
    show.value = true;
    setTimeout(() => show.value = false, 3000); // 自動隱藏警告
}
</script>
<style></style>