<template>
    <div>
        <div class="page-video">
            <div>
                <!--        首页/视频详情-->
                <div class="index_video">
                    <a href="/index">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shouye"></use>
                        </svg>
                        首页</a>
                    <span class="string">/</span>
                    <a href="/play">视频详情</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Fl",
    }
</script>

<style scoped lang="less">
    .page-video {
        width: 1200px;
        margin: 0 auto;
        border-top: 1px;
        /*首页/视频播放*/

        .index_video {
            width: 100%;
            padding: 10px 0px 15px;
            border-top: 1px solid #f2f2f2;
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

    }


</style>