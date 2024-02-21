<template>
    <div class="container">
        <div class="card w-25 position-absolute top-50 start-50 translate-middle">
            <div class="card-body">
                <form class="row g-3 needs-validation" novalidate>
                    <div class="col-md-12">
                        <label for="validationCustom01" class="form-label">帳號</label>
                        <input type="text" class="form-control" id="validationCustom01" v-model.trim="userData.name"
                            required>
                    </div>
                    <div class="col-md-12">
                        <label for="validationCustom02" class="form-label">密碼</label>
                        <input type="password" class="form-control" id="validationCustom02" v-model.trim="userData.password"
                            required>
                    </div>
                    <div class="col-md-12 text-center">
                        <button class="btn btn-primary" @click="Login">登入</button>
                    </div>
                </form>
            </div>
        </div>
        <Alert v-if="showAlert" :errorMessage="errorMessage" />
    </div>
</template>
<script setup lang="ts">
import { reactive, onMounted, watch, ref } from 'vue'
import { type DataForm } from "../Test/DataForm"
import axios from 'axios'
import { data } from "../Test/FormType"
import Alert from '@/common_component/Alert.vue'

const userData: DataForm = reactive({
    name: '',
    password: '',
})

const test: data = data.example2

const showAlert = ref(false);

const errorMessage = ref('');

const Login = async (event: any) => {
    event.preventDefault();

    const response = await axios.post('http://localhost:8080/home/Login', userData);

    console.log(response);

    console.log(test);


    if (response.data.password != null && response.data.name != null) {
        console.log("登入成功");
        showAlert.value = false;
    } else {
        console.log("登入失敗");
        showAlert.value = true;

        errorMessage.value = "登入失敗";

        setTimeout(() => {
            showAlert.value = false;
        }, 3000)
    }
}

// function Test(callback: any) {
//     callback();
// }

// function Hello() {
//     console.log("hello");
// }

// onMounted(() => {
//     Test(Hello);
// }),


</script>
<style></style>