<template>
    <div class="row">
        <div class="col-12">
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">帳號</span>
                <input type="text" class="form-control" placeholder="請輸入帳號" aria-label="Username"
                    aria-describedby="basic-addon1" v-model="accountValue">
            </div>
        </div>
        <div class="col-12">
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">密碼</span>
                <input type="text" class="form-control" placeholder="請輸入密碼" aria-label="Username"
                    aria-describedby="basic-addon1" v-model="passwordValue">
            </div>
        </div>
        <div class="col-12">
            <button type="button" class="btn btn-primary" @click="Login">登入</button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeMount, onUpdated } from 'vue'
import { type Customer } from "../type/Customer"
import axios from 'axios';

let user = ref<Customer>();
let accountValue = ref();
let passwordValue = ref();

const Login = async () => {
    try {
        const response = await axios.get('localhost:8080/home/login');

    } catch (error) {
        console.log(error);
        alert("帳號或密碼錯誤")
    }
}


// onMounted(() => {
//     console.log('onMounted');

//     axios.get('http://localhost:8080/search/search')
//         .then(
//             response => {
//                 pepole.value = response.data
//                 console.log("people = " + pepole);
//                 return pepole;
//             }
//         ).catch(error => {
//             console.log(error);
//         })
// })

onBeforeMount(() => {
    console.log("onBeforeMount");
})

onUpdated(() => {
    console.log('onUpdated');
})
</script>
<style></style>