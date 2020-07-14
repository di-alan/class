<template>
    <div class="index-container1">
        <el-tabs v-model="activeName" >
            <!--              课程描述  -->
            <el-tab-pane label="课程描述" name="first">
                <div v-html="obj.courseDetail"></div>
            </el-tab-pane>
            <!--                目录-->
            <el-tab-pane label="目录" name="second">
                <div class="section-detail-directory" v-for="(item,i) in sections" :key="item.sectionId">
                    <h3>{{item.sectionName}}
                        <button>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-ziyuan"></use>
                            </svg>
                            下载
                        </button>
                    </h3>
                    <dt>
                        <!--                              -->
                        <dl class="dlBox" v-for="(item,index) in item.subSections" :key="index"
                            @mouseover="shiftIn(index)"  @mouseout="shiftOut"   >
                            <div class="pull-left leftBox">
                                {{i+1}}-{{index+1}}
                                <span class="empty"></span>
                                {{item.sectionName}}
                            </div>
                            <div class="pull-right rightBox">
                                        <span class="play" v-if="index!=index1"><svg class="icon" aria-hidden="true">
                                                <use xlink:href="#icon-bofang"></use>
                                            </svg></span>
                                <span class="view" v-if="index==index1">观看</span>
                            </div>
                        </dl>
                    </dt>
                </div>
            </el-tab-pane>
            <!--                课程评论-->
            <el-tab-pane label="课程评论" name="third">
                <div class="section-detail-pl">
                    <p>评论</p>
                    <el-rate
                            v-model="value"
                            show-text>
                    </el-rate>
                </div>
                <div class="textk clearfix"><textarea placeholder="请发表您对课程的评价"></textarea>
                    <button
                            class="btn1">发布评论
                    </button>
                </div>
                <hr>
                <div v-for="(item,index) in list" :key="index">
                    <div class="name">{{item.user.nickname}}</div>
                    <p class="CommentsContent">{{item.commentContent}}</p>
                    <p class="CommentsTime">{{item.createdTime}}</p>
                    <hr>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import {comment, details} from "../../../api/class-api";

    export default {
        name: "Pl",
        data() {
            return {
                activeName: 'second',
                obj: {},
                list:[],
                sections:[],
                index1:false,
                value: null
            };
        },
        methods: {
            shiftIn(index) {
                this.index1 = index;
            },
            shiftOut() {
                this.index1 = -1
            }
        },
        props: {
            courseId:[String,Number]
        },
        created() {
            details(this.$route.params.courseId).then(res => {
                // console.log(res)
                this.obj = res.data
                this.sections = res.data.sections
            });
            // console.log(this.$route.params.courseId)
            comment(this.$route.params.courseId).then(res => {
                this.list = res.rows

            })
        }
    }
</script>

<style scoped lang="less">
    .index-container1 {
        margin-top: 30px;
        background-color: white;
    }
    .pull-left {
        float: left;
    }
    .pull-right {
        float: right;
    }
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .clearfix:after {
        Content: "";
        Height: 0;
        display: block;
        clear: both;
    }
    ul {
        list-style: none;
        li {
            .el-icon-apple {
                color: yellow;
            }
        }
    }
    .section-detail {
        width: 1200px;
        margin: 0 auto;
        /*首页/视频播放*/
        .index_video {
            width: 100%;
            padding: 10px 0px 15px;
            a {
                color: rgba(0, 0, 0, .45);
                font-size: 14px;
                text-decoration: none;
                vertical-align: center;
                /deep/ svg {
                    font-size: 14px;
                    width: 18px;
                    height: 18px;
                }
            }
            a:hover {
                color: #23db9b;
            }
            .string {
                color: rgba(0, 0, 0, .45);
                margin: 0 3px;
            }
        }
        /*中间播放的的主体盒子*/
        .midBox1 {
            width: 100%;
            background: #fff;
            border-radius: 4px;
            padding: 20px;
            .midimg {
                padding: 0;
                width: 33.33333333%;
                float: left;
                img {
                    width: 330px;
                    height: 220px;
                }
            }
            /*中间文本*/
            .midText {
                width: 50%;
                float: left;
                h3 {
                    font-weight: 400;
                }
                p {
                    height: 70px;
                    color: rgb(0, 207, 140);
                    font-size: 24px;
                }
                button {
                    width: 160px;
                    height: 45px;
                    font-size: 18px;
                    color: #fff;
                    background-color: #00cf8c;
                    border: 0;
                    outline: none;
                }
                .grade {
                    line-height: 30px;
                    margin: 10px 0;
                    li {
                        float: left;
                        color: #999;
                        margin-right: 8px;

                    }
                    .gradeli {
                        font-size: 24px;
                        color: gold;
                    }
                }
            }
            /*收藏*/
            .collect {
                float: left;
                margin-left: 50px;
                padding: 0;
                text-align: center;
                color: #999;
                width: 110px;
                height: 30px;
                font-size: 16px;
                border: 1px solid #999;
                line-height: 28px;
                .collectColor {
                    border-color: #ffb200;
                    color: #ffb200;
                }
                .collect:hover {
                    cursor: pointer;
                }
            }
        }
        /*中间底部目录/评论等主体的盒子*/
        .section-detail-directory {
            h3 {
                font-size: 22px;
                font-weight: 400;
                height: 40px;
                line-height: 40px;
            }
            button {
                height: 30px;
                width: 80px;
                float: right;
                font-size: 14px;
                color: #fff;
                border: 0;
                outline: none;
                margin-top: 5px;
                line-height: 30px;
                background-color: rgb(45, 183, 245);
            }
            dl {
                height: 50px;
                line-height: 30px;
                padding: 10px 20px;
                background: #f2f2f2;
                margin: 10px 0;
                color: rgba(0,0,0,.65);
                font-weight: 500;
            }
            dl:hover{
                color: #00cf8c;
                cursor: pointer;
            }
            .empty {
                display: inline-block;
                width: 8px;
            }
            .play {
                font-size: 20px;
            }
        }
    }
</style>