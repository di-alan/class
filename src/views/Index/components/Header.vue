<template>
    <div  class="index-container">
        <div>
            <img src="https://course.myhope365.com/img/logo-header.08ec1297.png" alt="">
        </div>
        <div class="index-container-mid">
            <input type="text">
            <button>搜索</button>
        </div>
        <div class="index-container-right">
            <!--  购物车-->
           <router-link :to="'/index/Shopping'"><span class="el-icon-shopping-cart-2"></span></router-link>
            <span v-if="isLogin==false" @click="showLoginModel">登录/注册</span>
            <span v-if="isLogin==true" @click="showLoginModel">{{userInfo.nickname}}</span>
            <span class="el-icon-s-custom"></span>
<!--  <div style="clear: both"></div>-->
        </div>
        <IsLogin />
    </div>
</template>

<script>
    import IsLogin from "../../../layout/components/IsLogin";
    import {mapState} from "vuex";


    export default {
        name: "Header",
        components:{
            IsLogin
        },
        data(){
            return{
            }
        },
        methods:{
            showLoginModel(){
                this.$store.commit('changeLoginModelVisible',{isShow:true})
            }
        },
        computed:{
            ...mapState(['isLogin','userInfo'])

        }
    }
</script>

<style scoped lang="less">
    .index-container {
        width: 1200px;
        height: 50px;
        margin: 0 auto;
        /*border: 1px solid black;*/
        display: flex;
        justify-content: space-between;
    div {
        padding: 10px 0;
    img{
        width: 120px;
        height: 31px;

    }
    .index-container-mid {

    }
    .index-container-right {
        float: right;
    }
    }
    }
</style>