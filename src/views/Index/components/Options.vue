<template>
     <div class="index-container">
           <div class="index-container-left">首页</div>
          <div class="index-container-mid">
               课程分类
               <span class="el-icon-arrow-down"></span>
          </div>
          <div class="index-container-right" >课程专属</div>
     </div>
</template>

<script>
    // import {getcourse} from "../api/class-api";

    export default {
        name: "Options",
         // props:{
         //     type:{
         //          type:free,
         //          default:''
         //     },
         //      pageNume:{
         //
         //      },
         //      pageSize:{
         //
         //      }
         // },
         // data() {
         //      return {
         //           list:[]
         //      }
         // },
         // created() {
         //      getcourse(this.type, pageNume,pageSize).then(res => {
         //           // console.log(res)
         //           this.obj = res;
         //      })
         // }
    }
</script>

<style scoped lang="less">
.index-container {
     width: 1200px;
     margin: 0 auto;
     font-size: 14px;
     display: flex;
         .index-container-left {
              padding-right: 20px
         }
         .index-container-mid {
              padding-right: 20px
         }

}

</style>