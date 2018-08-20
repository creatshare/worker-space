<template>
    <div class="card-container card-container-1" shadow="hover" :body-style="{ padding: '10px' }">
        <div class="card-wrap-padding">

            <h3 class="card-title"><a>团队成员</a></h3>

            <div class="card-head-btns">
                <span></span>
                <span class="head-btn md-design" tabindex="-1">
                    <el-button type="text" @click="toggleSettingPanel()">
                        <i class="iconFont"><i class="el-icon-more"></i></i>
                    </el-button>
                </span>
            </div>

            <div class="card-inner-container">
                <!-- 卡片的主体内容 -->
            </div>

            <!-- 操作面板按钮组 -->
            <div class="card-setting-panel" :style="{ height: cardSettingPanelHeight + 'px' }">
                <div class="card-setting-panel-inner">
                    <ul class="items">
                        <el-row class="card-row">
                            <el-col :span="8" v-for="btn in cardButtons" :key="btn.id">
                                <li :class="{ disabled: btn.disabled }">
                                    <div :role="btn.enName" class="panel-item">
                                        <!-- 设置图标背景颜色，当图标不可点击时，背景颜色为灰色 -->
                                        <i :class="'iconFont ' + btn.bgColorName">
                                            <i :class="'fa ' + btn.iconClass"></i>
                                        </i> {{ btn.name }}
                                    </div>
                                </li>
                            </el-col>
                        </el-row>
                    </ul>
                    <div class="panel-copyright">卡片由 <a href="http://www.creatshare.com" target="_blank">@CreatShare</a> 提供</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "card-skeleton",
        props: {
            // grid: [ numberA, numberB], numberA 行 numberB 列的格子，目前只支持 1 * 1, 1 * 2
            // grid: { required: true }
        },
        data() {
            return {
                selectedGroupId: [],
                cardSettingPanelHeight: 0,
                // 当前 card 下的所有按钮信息
                cardButtons: '',
                // 当前 card 的所有贡献者
                cardContributor: ''
            }
        },
        created () {
            this.setCardBtns()
            this.setCardContributor()
        },
        methods: {
            async setCardBtns () {
                const { data } = await getCardButtons()
                // 判断每个按钮是否可以点击，不可点击的覆盖默认背景颜色为 bg-grey 灰色
                Object.keys(data).forEach(btnsName => {
                    data[btnsName].map(btn => {
                        // 不可点击，覆盖默认背景颜色为 bg-grey 灰色
                        btn.bgColorName = btn.disabled ? 'bg-grey' : btn.bgColorName
                    })
                })
                this.cardButtons = data.cardButtons
            },
            async setCardContributor () {
                const { data } = await getCardContributor()
                this.cardContributor = data
            },
            toggleSettingPanel () {
                // 通过改变高度改变操作面板的显示状态(有动画), 隐藏时高度为 0, 显示时高度为 275px, 默认隐藏
                this.cardSettingPanelHeight = (this.cardSettingPanelHeight === 0) ? 275 : 0
            }
        }
    }
</script>

<style scoped>
    a {
        background: transparent;
        text-decoration: none;
        outline: none;
        cursor: pointer;
        transition: color .2s ease;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    /* card 容器 */

    .card-container {
        float: left;
        position: relative;
        font-size: 0;
        height: 350px;
        width: 360px;
        margin: 0 10px 20px;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
    }

    .card-wrap-padding {
        position: relative;
        height: 350px;
        background-color: #fff;
        border-radius: 5px;
    }

    /* card 头部 */

    .card-title {
        cursor: move;
        font-size: 18px;
        padding: 11px 20px;
        border-bottom: 1px solid #eee;
    }

    .card-container .card-title a {
        color: #333;
    }

    .card-container .card-head-btns {
        position: absolute;
        top: 8px;
        right: 9px;
        font-size: 20px;
    }

    .card-container .card-head-btns .head-btn {
        width: 36px;
        height: 36px;
        display: inline-block;
        line-height: 36px;
        text-align: center;
        border-radius: 50%;
        -webkit-transition: background-color .4s ease;
        transition: background-color .4s ease;
        cursor: pointer;
        outline: none;
    }

    /* card 内部 */

    .card-container .card-inner-container {
        font-size: 14px;
        /* padding: 10px; */
        height: 300px;
    }

    .card-setting-panel {
        z-index: 999;
        display: block;
        font-size: 14px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        /* 隐藏时高度为 0, 显示时高度为 275px, 默认隐藏 */
        /* height: 0; */
        -webkit-transition: height .3s ease;
        transition: height .3s ease;
        overflow: hidden;
    }

    .card-setting-panel .card-setting-panel-inner {
        height: 255px;
        background: #fff;
        position: absolute;
        bottom: 0;
        width: 100%;
        -webkit-transition: height .3s ease;
        transition: height .3s ease;
        -webkit-box-shadow: 0 -4px 20px 0 rgba(0,0,0,.09);
        box-shadow: 0 -4px 20px 0 rgba(0,0,0,.09);
        background-color: hsla(0,0%,100%,.8);
        -webkit-backdrop-filter: blur(8px);
    }

    .card-setting-panel .items {
        text-align: center;
        height: 215px;
    }

    .card-row {
        overflow-x: hidden;
        overflow-y: scroll;
        height: 215px;
        /* 这里的 width 多出 15 px 可以让滚动条看不见 */
        width: 375px;
    }

    .card-setting-panel .items li {
        margin: 16px 0;
        font-size: 12px;
        cursor: pointer;
    }

    .card-container .card-setting-panel .items li.disabled {
        cursor: not-allowed;
    }

    .card-setting-panel .items .panel-item {
        height: 100%;
        width: 100%;
    }

    .card-setting-panel .items .bg-orange {
        background: #ffa36d;
    }

    .card-setting-panel .items .bg-yellow {
        background: #ffd153;
    }

    .card-setting-panel .items .bg-blue {
        background: #7ebbff;
    }

    .card-setting-panel .items .bg-grey {
        background: #f4f5f7;
    }

    .card-setting-panel .items .iconFont {
        display: block;
        width: 36px;
        height: 36px;
        color: #fff;
        border-radius: 100%;
        text-align: center;
        line-height: 36px;
        margin: 0 auto;
        margin-bottom: 6px;
    }

    .iconFont {
        font-family: iconFont!important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .card-container .card-setting-panel .panel-copyright {
        width: 100%;
        border-top: 2px solid rgba(0,0,0,.05);
        text-align: center;
        color: #666;
        font-size: 12px;
        padding: 10px 0;
    }

    .card-setting-panel .panel-copyright a {
        text-decoration: none;
        color: #02aae4;
    }
</style>