<template>
    <div class="index-container">
        <Options  />
        <swiper :number="5"/>
        <Live/>
        <FreeClass  type="free" :pageSize="10" :pageNume="1" course="免费课程"/>
        <FreeClass  type="boutique" :pageSize="5" :pageNume="1" course="收费课程"/>
        <FreeClass   type="discount" :pageSize="5" :pageNume="1" course="限时折扣课程"/>
        <Choose   :pageSize="5" :pageNume="1" course="头条精选"/>
        <!--        固定定位的QQ-->
        <!-- 固定定位 -->
        <div class="qq text-center">
            <ul>
                <li>
                    <a href="#" class="a1">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-QQ"></use>
                        </svg>
                        <p>客服1</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-QQ"></use>
                        </svg>
                        <p>客服2</p>
                    </a>
                </li>
                <li>
                    <a href="#" class="a3">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-QQ"></use>
                        </svg>
                        <p>技术支持</p>
                    </a>
                </li>
            </ul>
        </div><!--        固定定位的QQ-->
        <!-- 固定定位 -->
        <div class="qq text-center">
            <ul>
                <li>
                    <a href="#" class="a1">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-QQ"></use>
                        </svg>
                        <p>QQ客服1</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-QQ"></use>
                        </svg>
                        <p>QQ客服2</p>
<!--                        <a href="
http://wpa.qq.com/msgrd?v=3&uin=577405209&site=qq&me" target="_blank">QQ客服2</a>-->
                    </a>
                </li>
                <li>
                    <a href="#" class="a3">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-QQ"></use>
                        </svg>
                        <p>技术支持</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import Options from "./components/Options";
    import Swiper from "./components/Swiper";

    import Live from "./components/Live";
    import FreeClass from "./components/FreeClass";
    import Choose from "./components/Choose";


    export default {
        name: "Index",
        components:{FreeClass, Live, Swiper,Options,Choose}

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


    .qq {
        position: fixed;
        right: 10px;
        bottom: 200px;
        z-index: 200;

        ul {
            list-style: none;
            li{
                .a1 {
                    border-radius: 5px 5px 0 0;

                }
                .a3 {
                    border-radius: 0px 0px 5px 5px;
                    -webkit-border-radius: 0px 0px 5px 5px;
                    -moz-border-radius: 0px 0px 5px 5px;
                    -ms-border-radius: 0px 0px 5px 5px;
                    -o-border-radius: 0px 0px 5px 5px;
                }
                a {
                    font-size: 40px;
                    display: block;
                    width: 70px;
                    color: #009688;
                    background-color: #e6f7ff;
                    border-top: 1px solid #e8e8e8;
                    text-decoration: none;
                    text-align: center;
                    p {
                        margin-bottom: 0;
                        font-size: 14px;
                    }
                }
                a:hover {
                    color: #fff;
                    background-color: #009688;
                }


            }
        }
    }
</style>