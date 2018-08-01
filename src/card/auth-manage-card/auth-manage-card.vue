<template>
    <el-card class="box-card" shadow="hover" :body-style="{ padding: '10px' }">
        <div slot="header" class="clearfix">
            <span class="headline">权限管理</span>
            <el-button style="float: right; padding: 3px 0" type="text"><i class="el-icon-more"></i></el-button>
        </div>

        <div class="card-setting-panel card-setting-panel-active">
            <div class="card-setting-panel-inner">
                <ul class="items">
                    <li>
                        <div role="setting" class="panel-item">
                            <i class="iconfont icon-edit"><i class="el-icon-edit"></i></i>编辑申请
                        </div>
                    </li>
                    <li>
                        <div role="destroy" class="panel-item">
                            <i class="iconfont icon-delete"><i class="el-icon-delete"></i></i>删除申请
                        </div>
                    </li>
                    <li>
                        <div role="move" class="panel-item">
                            <i class="iconfont icon-add"><i class="el-icon-plus"></i></i>新增申请
                        </div>
                    </li>
                </ul>
                <div class="panel-copyright">卡片由 <a href="http://www.creatshare.com" target="_blank">@CreatShare</a> 提供</div>
            </div>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "auth-manage-card",
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .box-card {
        position: relative;
        height: 350px;
        width: 360px;
    }

    .headline {
        color: #333;
        background: transparent;
        text-decoration: none;
        outline: none;
        /*cursor: pointer;*/
        transition: color .2s ease;
    }

    .table {
        width: 100%;
        height: 270px;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    .table:before {
        content: none
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

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

    .card-setting-panel .items .icon-edit {
        background: #eea026;
    }

    .card-setting-panel .items .icon-delete {
        background: #ff5362;
    }

    .card-setting-panel .items .icon-add {
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

    .card-setting-panel .panel-copyright {
        width: 100%;
        border-top: 2px solid rgba(0,0,0,.05);
        text-align: center;
        color: #666;
        font-size: 12px;
        padding: 10px;
    }

    .card-setting-panel .panel-copyright a {
        text-decoration: none;
        color: #02aae4;
    }
</style>