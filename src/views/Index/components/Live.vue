<template>
    <div class="index-container">

        <el-tabs :tab-position="tabPosition" style="height: 400px;">
            <el-tab-pane v-for="(item,index) in list" :key="index" :label="item.course.courseTitle"  style="height: 400px;">
                <img :src="item.course.coverFileUrl " alt="" width="100%" height="100%">
            </el-tab-pane>
        </el-tabs>

    </div>
</template>

<script>

    import {streaming} from "../../../api/class-api";

    export default {
        name: "Live",
        data(){
            return{
                tabPosition: 'right',
                list:[]
            }
        },
        created() {
            streaming().then(res => {
                // console.log(res)
                // console.log(this.list)
                this.list = res.rows
            })


        }
    }
</script>

<style scoped lang="less">
.index-container {
    margin: 0 auto;
    margin-top: 30px;
    width: 1200px;
    height: 500px;
    /*border: 1px solid black;*/

}

</style>