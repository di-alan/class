<template>
    <div>
        <div class="content-title">
            <span>{{course}}</span>
            <div class="Content-conpainer1">
            </div>
        </div>
        <div class="Content-conpainer">
            <ul>
           <router-link :to="'/other'+'/'+item.courseId" tag="li" v-for="item in list" :courseId="item.courseId" :key="item.courseId">
                    <img :src="item.coverFileUrl" alt="">
                    <p class="title">{{item.courseTitle}}</p>
                    <p class="course">共{{item.subSectionNum}}节课 | {{item.participationsCount}}人报名</p>
                    <p v-if="item.isFree == 1" class="type free">免费</p>
                    <p v-if="item.isFree!=1" class="type"><span>{{item.discountPrice}}</span><del class="del">1000</del><span>{{item.discountDesc}}</span></p>
           </router-link>
            </ul>

            <div style="clear: both"></div>
        </div>

    </div>
</template>
 
<script>
    import {getcourse} from "../../../api/class-api";

    export default {
        name: "FreeClass",
        props:{
            type: {
                type:String,
                default:''
            },
            pageNume: {
                pageNume:Number,
                default:''
            },
            pageSize:{
                pageSize:Number,
                default:''
            } ,
             course:{
                 course:[String,Number]

             }
        },
        data() {
            return {
                list: []
            }
        },
        created() {
            // console.log(this.pageNume)
            // console.log(this.pageSize)
            getcourse(this.type, this.pageNume, this.pageSize).then(res => {
                console.log(res)
                this.list = res.rows
                // console.log(this.list.courseId)
            })
        }

    }
</script>

<style scoped lang="less">
    .Content-conpainer1 {
        text-align: center;
        padding: 0 12px 10px 62px;
        border-bottom: 2px solid #e8e8e8;
        width: 1200px;
        margin: 0px auto;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .Content-conpainer {
        width: 1200px;
        margin: 30px auto;
    }

    span {
        display: block;
        font-size: 24px;
        margin-top: 20px;
    }

    ul {
        margin-top: 14px;
    }

    li {
        width: 20%;
        float: left;
        padding-left: 8px;
        padding-right: 8px;
        margin-bottom: 6px;
        list-style: none;

        img {
            height: 126px;
            width: 100%;
        }
    }

    .title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .course {
        color: #888;
    }

    .type {
        color: #00cf8c;
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        span{
            color: lightcoral;
            padding-right: 20px;
            font-size: 16px;
        }
    }
     .free{
         margin-top: 20px;
     }
    .del {
        color: lightcoral;
        margin-top: 20px;
    }
    .content-title {
        text-align: center;
    }


</style>