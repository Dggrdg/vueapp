<template>
    <div class="alert-container" v-show="showAlert">
        <div class="alert alert-warning">
            <div class="message">{{ props.errorComfirmMessage }}</div>
            <div class="button-container">
                <button type="button" class="btn btn-primary">是</button>
                <button type="button" class="btn btn-primary">否</button>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';
import { ref } from 'vue';

const showAlert = ref(true);

const props = defineProps({
    errorComfirmMessage: String
});

function closeAlert() {
    showAlert.value = false;
}
</script>
  
<style scoped>
.alert-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    /* 将宽度调整为父容器的 30% */
    height: 30%;
    /* 将高度调整为父容器的 30% */
    z-index: 1050;
    /* 保证在最上层 */
}

.alert {
    position: relative;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    width: 100%;
    /* 让宽度填满父容器 */
    height: 100%;
    /* 让高度填满父容器 */
}

.message {
    margin-bottom: 10px;
}

.button-container {
    display: flex;
    justify-content: space-between;
}
</style>