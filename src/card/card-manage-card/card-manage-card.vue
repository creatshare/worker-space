<template>
    <div class="card-container card-container-1" shadow="hover" :body-style="{ padding: '10px' }">
        <div class="card-wrap-padding">

            <h3 class="card-title"><a>卡片管理</a></h3>

            <div class="card-head-btns">
                <span></span>
                <span class="head-btn md-design" tabindex="-1">
                    <el-button type="text">
                        <i class="iconfont"><i class="el-icon-more"></i></i>
                    </el-button>
                </span>
            </div>

            <div class="card-inner-container">
                <!--<el-row :gutter="20">-->
                    <!--<el-col :span="12">-->
                        <!--<el-select v-model="selectedGroupId" filterable placeholder="请选择">-->
                            <!--<el-option-->
                                    <!--v-for="item in options[0].children"-->
                                    <!--:key="item.key"-->
                                    <!--:label="item.label"-->
                                    <!--:value="item.key">-->
                            <!--</el-option>-->
                        <!--</el-select>-->
                    <!--</el-col>-->
                    <!--<el-col :span="12">-->
                        <!--搜索-->
                    <!--</el-col>-->
                <!--</el-row>-->

                <!--<el-table-->
                        <!--:data="tableData"-->
                        <!--style="width: 100%">-->
                    <!--<el-table-column-->
                            <!--prop="name"-->
                            <!--label="成员">-->
                    <!--</el-table-column>-->
                    <!--<el-table-column-->
                            <!--prop="profession"-->
                            <!--label="专业">-->
                    <!--</el-table-column>-->
                    <!--<el-table-column-->
                            <!--label="主页">-->
                        <!--<template slot-scope="scope">-->
                            <!--<el-button type="primary" size="mini">-->
                                <!--访问-->
                            <!--</el-button>-->
                        <!--</template>-->
                    <!--</el-table-column>-->
                <!--</el-table>-->
            </div>

            <div class="card-setting-panel card-setting-panel-active">
                <div class="card-setting-panel-inner">
                    <ul class="items">
                        <li>
                            <div role="setting" class="panel-item">
                                <i class="iconfont bg-yellow"><i class="el-icon-edit"></i></i>编辑成员
                            </div>
                        </li>
                        <li>
                            <div role="destroy" class="panel-item">
                                <i class="iconfont bg-red"><i class="el-icon-delete"></i></i>删除成员
                            </div>
                        </li>
                        <li>
                            <div role="move" class="panel-item">
                                <i class="iconfont bg-green"><i class="el-icon-plus"></i></i>新增成员
                            </div>
                        </li>
                    </ul>
                    <div class="panel-copyright">卡片由 <a href="http://www.creatshare.com" target="_blank">@CreatShare</a> 提供</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { allMembers } from './api'

    export default {
        name: "card-manage-card",
        data() {
            return {
                allMembers: allMembers,
                selectedGroupId: [],
            }
        },
        methods: {

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
        padding: 10px;
        height: 300px;
    }

    /* card 隐藏面板 */

    .card-setting-panel.card-setting-panel-active {
        display: block;
        height: 195px;
    }

    .card-setting-panel {
        display: none;
        font-size: 14px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0;
        -webkit-transition: height .3s ease;
        transition: height .3s ease;
        overflow: hidden;
    }

    .card-setting-panel.card-setting-panel-active .card-setting-panel-inner {
        height: 175px;
    }

    .card-setting-panel .card-setting-panel-inner {
        background: #fff;
    }

    .card-setting-panel .card-setting-panel-inner {
        height: 0;
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
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        text-align: center;
    }

    .card-setting-panel .items li {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        margin: 42px 0 34px;
        font-size: 12px;
        cursor: pointer;
    }

    .card-setting-panel .items .panel-item {
        height: 100%;
        width: 100%;
    }

    .card-setting-panel .items .bg-yellow {
        background: #eea026;
    }

    .card-setting-panel .items .bg-red {
        background: #ff5362;
    }

    .card-setting-panel .items .bg-green {
        background: #66d85f;
    }

    .card-setting-panel .items .iconfont {
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

    .iconfont {
        font-family: iconfont!important;
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