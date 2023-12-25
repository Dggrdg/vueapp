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
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeMount, onUpdated } from 'vue'
import { type Customer } from "../type/modelType/Customer"
import axios from 'axios'

const userData = reactive({
    id: 0,
    name: '',
    password: '',
    birthday: ''
});

const Login = async () => {

    userData.name = userData.name;
    userData.password = userData.password

    console.log(userData);


    const response = await axios.post('http://localhost:8080/home/Login', userData);
    console.log(response.data.name);
    console.log("成功");
}

onMounted(() => {
    console.log("onMounted");
})

</script>
<style></style>