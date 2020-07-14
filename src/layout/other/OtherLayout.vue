<template>
    <div>
        <HeaderX></HeaderX>
        <router-view></router-view>
        <Footer   dictType="blogroll" :pageNum="1" :pageSize="10" orderByColumn="dictSort"  isAsc="asc"></Footer>
    </div>
</template>
<script>
    import Footer from "../components/Footer";
    import HeaderX from "./components/HeaderX";
    export default {
        name: "OtherLayout",
        components:{
          HeaderX, Footer
        }
    }
</script>

<style scoped>
</style>