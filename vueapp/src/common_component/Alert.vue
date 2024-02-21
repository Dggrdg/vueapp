<template>
    <div class="alert alert-warning position-absolute top-50 start-50 translate-middle A">
        <div class="font-style position-absolute top-50 start-50 translate-middle">
            {{ props.errorMessage }}
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref, toRefs } from 'vue';

const props = defineProps({
    errorMessage: String
})

const errorMessage = toRefs(props);

</script>
<style>
.A {
    width: 30%;
    height: 30%;
}

.font-style {
    font-size: 30px;
}
</style>