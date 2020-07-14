<template>
  <div >
    <router-view/>
  </div>
</template>
<script>
  import {creatKey} from "./util/localstore";

  export default {
     created() {
       //同步缓存中的数据
       // let isLogin=localStorage.getItem(creatKey('isLogin')) || false
       let isLogin=localStorage.getItem(creatKey('isLogin')) || false
       this.$store.commit("setIsLogin",{isLogin})
       let userInfo=JSON.stringify(localStorage.getItem("userInfo") || {})
       this.$store.commit("setUserInfo",{userInfo})
     }
  }
</script>
<style lang="less">

</style>
