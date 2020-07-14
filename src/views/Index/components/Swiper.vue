<template>
    <div class="block">
        <el-carousel height="400px">
            <el-carousel-item v-for="item in list" :key="item.id">
                <img :src="item.imgUrl" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>


    import {getpic} from "../../../api/class-api";

    export default {
        name: "Swiper",
        props:{

            number:{
                type:Number,
                default:5
            }
        },
        data (){
            return{
                list:[]
            }
        },
        created() {
            // console.log(this.number)
            getpic(this.number).then(res => {
                // console.log(res)
                // console.log(this.list)
                this.list = res.data
            })


        }
    }
</script>

<style scoped lang="less">
    .el-carousel__item{
        h3{
            color: #475669;
            font-size: 14px;
            opacity: 0.75;
            line-height: 150px;
            margin: 0;
        }
        img{
            width: 100%;
            height: 100%;
        }
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>