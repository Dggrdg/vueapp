<template>
    <div class="container">
        <div class="card w-25 position-absolute top-50 start-50 translate-middle">
            <div class="card-body">
                <form class="row g-3 needs-validation" novalidate>
                    <div class="col-md-12">
                        <label for="validationCustom01" class="form-label">帳號</label>
                        <input type="text" class="form-control" id="validationCustom01" v-model="accountValue" required>
                    </div>
                    <div class="col-md-12">
                        <label for="validationCustom02" class="form-label">密碼</label>
                        <input type="text" class="form-control" id="validationCustom02" v-model="passwordValue" required>
                    </div>
                    <div class="col-md-12 text-center">
                        <button class="btn btn-primary" type="submit">登入</button>
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

let user = reactive([]);
let accountValue = ref();
let passwordValue = ref();

let customer: Customer = reactive({
    ID: 0,
    name: "",
    password: "",
    birthday: ""
})


onMounted(() => {
})

onUpdated(() => {
    console.log(user);

    customer.name = accountValue.value;
    customer.password = passwordValue.value;
    valid(customer);
})

const valid = (customer: Customer): boolean => {
    if (customer.name && customer.password) {
        console.log("錯誤");
        return false;
    } else {
        console.log("正確");
        return true;
    }
}

const Login = async () => {

    axios.get("http://localhost:8080/home/login")
        .then(response => {
            console.log(response);

        }).catch(error => {
            console.log(error);
        })
}

onBeforeMount(() => {
    console.log("onBeforeMount");
})

onUpdated(() => {
    console.log('onUpdated');
})
</script>
<style></style>