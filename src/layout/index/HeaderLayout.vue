<template>
    <div >
<!--        头部-->
                  <Header/>
<!--      渲染区  -->

            <router-view></router-view>
        <Footer  dictType="blogroll" :pageNum="1" :pageSize="10" orderByColumn="dictSort"  isAsc="asc" />
    </div>
</template>

<script>
    import Footer from "../components/Footer";
    import Header from "../../views/Index/components/Header";

    export default {
        name: "HeaderLayout",
        components:{
            Footer,
            Header

        }
    }
</script>

<style scoped lang="less">


</style>