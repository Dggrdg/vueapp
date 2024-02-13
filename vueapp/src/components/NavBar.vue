<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" v-show="NavBarShow">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="http://localhost:5173/Home">主頁</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://localhost:5173/Login" @click="NavBarShow()">登入</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            NavBarShow: true,
        }
    },

    NavBarShow() {
        this.NavBarShow = false;
    }
}
</script>
<style scope>
.grey {
    background-color: #b8b8b8;
}
</style>