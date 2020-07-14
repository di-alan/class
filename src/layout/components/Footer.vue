<template>
    <div class="index-container">
          <div class="index-all">
        <div class="index-container-main">
        <h2>友情链接：</h2>
        <div>
            <ul class="index-container-mid">
                <li v-for="(item,index) in list" :key="index">{{item.dictLabel}}</li>
<!--                <li>尚云科技</li>-->
<!--                <li>IT毕业设计</li>-->
<!--                <li>网思安网络安全课堂</li>-->
<!--                <li>天亮公开课资源</li>-->
            </ul>
            <hr>
            <p class="index-container-bottom">Copyright © 2017-2025 石家庄天亮教育科技有限公司 备案号:冀ICP备17020003号</p>
        </div>
        </div>
          </div>
    </div>
</template>

<script>


    import {getfooter} from "../../api/class-api";

    export default {
        name: "Footer",
        props:{
            dictType:String,
            pageNum:Number,
            pageSize:Number,
            orderByColumn:String,
            isAsc:String
        },
        data(){
            return{
                list:[]
            }
        },
        created() {
            // console.log(this.pageNum)
            // console.log(this.pageSize)
            getfooter(this.dictType,this.pageNum,this.pageSize,this.orderByColumn,this.isAsc).then(res => {
                // console.log(res)
                // console.log(this.list)
                this.list = res.rows
            })


        }
    }
</script>

<style scoped lang="less">
    .index-container {
        width: 100%;
        height: 200px;
        margin: 0 auto;
        background-color: #444546;
        /*border: 1px solid black;*/
          hr {
              width: 1000px;
              margin-left: 100px;
          }

        .index-container-main{
            color: #99a9bf;
            width: 1200px;
            margin: 0 auto;
            padding-top: 20px;
            margin-left: 160px;
        }
        .index-container-mid{
            margin-bottom: 30px;
            list-style: none;
            display: flex;
              li {
                  margin-left: -120px;
                  padding:0 80px;
                  font-size: 14px;
              }
        }
        .index-container-bottom {
           padding-left: 300px;
        }

    }
</style>