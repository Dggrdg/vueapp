<template>
    <input :value="init" />
    <button @click="change">變更初始值</button>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeMount, onUpdated } from 'vue'
import axios from 'axios';

const init = ref('Not upDated');

const change = () => {
    init.value = "Updated";
}


onMounted(() => {
    console.log('onMounted');

    axios.get('http://localhost:8080/search/search')
        .then(
            response => {
                let people = response.data
                console.log(people);
            }
        ).catch(error => {
            console.log(error);

        })
})

onBeforeMount(() => {
    console.log("onBeforeMount");
})

onUpdated(() => {
    console.log('onUpdated');
})
</script>
<style></style>