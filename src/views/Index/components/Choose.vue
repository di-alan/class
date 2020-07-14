<template>
    <div class="index-container">
        <div class="content-title">
            <span>{{course}}</span>
            <hr>
        </div>
        <div class="Content-conpainer">
            <ul>
                <li v-for="item in list"  :key="item.articleId">
                    <img :src="item.bannerImgUrl" alt="">
                    <p class="title">{{item.title}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {headline} from "../../../api/class-api";

    export default {
        name: "Choose",
        data(){
            return{
                list: []
            }
        },
        props:{
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
        created(){
            headline(this.pageNume, this.pageSize).then(res=>{
                // console.log(res)
                this.list = res.rows
            })
        }
    }
</script>

<style scoped lang="less">
    .index-container{
        width: 1200px;
        margin: 0 auto;
        /*border: 1px solid black;*/
    }
  .content-title{
      text-align: center;
      span{
          font-size: 28px;
      }
  }
    .Content-conpainer{
        ul{
            display: flex;
            justify-content: space-between;
            list-style: none;
            li{
                img{
                    width: 170px;
                    height: 126px;
                }
            }
        }
      .title {
          width: 170px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
      }
    }


</style>