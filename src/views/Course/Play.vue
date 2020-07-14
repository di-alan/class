<template>
    <div>
        <div class="view-play-video-container">
            <!--首页、播放-->
          <Fl></Fl>
            <!--播放-->
            <div class="playview clearfix">
                <div class="view-play">
                    <video :src="file.fileUrl"
                           controls></video>
                </div>
                <div class="view-directory">
                    <div class="section-detail-directory" v-for="(item,i) in sections" :key="item.sectionId">
                        <h3>{{item.sectionName}}</h3>
                        <dt>
                            <dl class="dlBox" v-for="(item,index) in item.subSections" :key="index">
                                <div class="pull-left leftBox">
                                    <div class="recorded clearfix">录播</div>
                                    <div class="pageword" @click="playView(item.sectionId)">{{i+1}}-{{index+1}}
                                        {{item.sectionName}}
                                    </div>
                                    <!--<div>32分钟</div>-->
                                </div>
                            </dl>
                        </dt>
                    </div>
                </div>
            </div>
            <!--目录、课程描述、评论-->
           <Pl :course-id="$route.params.courseId"></Pl>
        </div>
    </div>
</template>

<script>


    import { details, switchChapters} from "../../api/class-api";
    import Fl from "./components/Fl";
    import Pl from "./components/Pl";

    export default {
        name: "Play",
        data() {
            return {
                obj: {},
                sections: [],
                file: {},
            }
        },
        components: {
            Pl,
            Fl
        },
        methods: {
            playView(sectionId) {
                switchChapters(sectionId).then(res => {
                    console.log(res);
                    this.file = res.section.file
                })
            }
        },
        created() {
            //缓冲页目录
            // details(this.$route.params.id).then(res => {
            //     console.log(res.data.sections)
            //     this.obj = res.data
            //     this.sections = res.data.sections
            // })
            details(this.$route.params.courseId).then(res => {
                // console.log(res)
                this.obj = res.data
                this.sections = res.data.sections
            });
            // console.log(this.$route.params.courseId)
        }
    }
</script>

<style scoped lang="less">
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

    .view-play-video-container {
        width: 1200px;
        margin: 0 auto;

        .playview {
            .view-play {
                float: left;
                /*margin-left: 100px;*/
                width: 900px;
                height: 450px;
                video {
                    width: 100%;
                    height: 100%;
                }
            }

            .view-directory {
                /*background-color: black;*/
                float: right;
                width: 300px;
                height: 450px;
                overflow: scroll;
                background: black;

                .section-detail-directory {
                    margin-left: 20px;

                    .dlBox {
                        margin-top: 5px;

                        .leftBox {
                            .pageword {
                                font-size: 14px;
                                margin-left: 60px;
                                color:white;
                            }

                            .recorded {
                                width: 50px;
                                height: 20px;
                                float: left;
                                background-color: #00cf8c;
                                display: flex;
                                justify-content: center;
                                color: white;
                            }

                            .active {
                                background-color: #1da57a;
                                color: #1da57a;
                            }
                        }
                    }

                    .dlBox:hover {
                        color: #1da57a;
                        cursor: pointer;
                    }
                }
            }
        }

    }
    .active {
        color: #00cf8c;
    }
</style>