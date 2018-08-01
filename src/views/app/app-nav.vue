<template>
        <div class="header-container">
            <div class="header">
                <div class="logo">
                    <a href="/" class="router-link-active">
                        <img src="../../assets/creatshare.svg" title="桔子堆">
                    </a>
                </div>
                <div class="header-mid">
                    <div class="ip-menu">
                        <ul class="ivu-menu ivu-menu-light ivu-menu-horizontal">
                            <li class="ivu-menu-item ivu-menu-item-active ivu-menu-item-selected">
                                <i class="el-icon-news"></i>
                                <span><router-link to="/workingdesk">工作平台</router-link></span>
                            </li>
                            <!--<li class="ivu-menu-item ivu-menu-item-active ivu-menu-item-selected">-->
                                <!--<i class="el-icon-edit"></i>-->
                                <!--<span><router-link to="/meetingrecord">会议记录</router-link></span>-->
                            <!--</li>-->
                            <!--<li class="ivu-menu-item ivu-menu-item-active ivu-menu-item-selected">-->
                                <!--<i class="el-icon-service"></i>-->
                                <!--<span><router-link to="/forumchatting">论坛畅聊</router-link></span>-->
                            <!--</li>-->
                            <!--<li class="ivu-menu-item ivu-menu-item-active ivu-menu-item-selected">-->
                                <!--<i class="el-icon-view"></i>-->
                                <!--<span><router-link to="/roleauthority">权限管理</router-link></span>-->
                            <!--</li>-->
                            <!--<li class="ivu-menu-item ivu-menu-item-active ivu-menu-item-selected">-->
                                <!--<i class="el-icon-setting"></i>-->
                                <!--<span><router-link to="/personalspace">个人空间</router-link></span>-->
                            <!--</li>-->
                        </ul>
                    </div>
                </div>
                <div class="header-right">

                    <div class="ip-favorites">
                        <div class="icon-box">
                            <i class="el-icon-menu"></i>
                            <span class="text"> 应用</span>
                        </div>
                        <div class="favorites-poptip-content" style="display: none;">
                            <div class="arrow"></div>
                            <ul id="favorite-list" class="favorite-list">
                                <li class="favorite-item">
                                    <a href="http://meeting.xiaojukeji.com/web/" target="_blank">
                                        <div class="logo"><img src="//img-ys011.didistatic.com/static/oranges/do1_M8j8sxvh1iJGSNKHNxbM"></div>
                                        <div class="title">会议室系统</div>
                                    </a>
                                    <span class="del">×</span>
                                </li>
                                <li class="favorite-item">
                                    <a href="http://hr.didichuxing.com/index.php/welcome" target="_blank">
                                        <div class="logo"><img src="//img-hxy021.didistatic.com/static/iportal/systooljpg/ehr.jpg"></div>
                                        <div class="title">eHR</div>
                                    </a>
                                    <span class="del">×</span>
                                </li>
                                <li class="favorite-item">
                                    <a href="https://shiyu.didichuxing.com/#/" target="_blank">
                                        <div class="logo"><img src="//img-hxy021.didistatic.com/static/iportal/do1_I1dyjhq6IkEfYHcQxWp1"></div>
                                        <div class="title">食域(北京)</div>
                                    </a>
                                    <span class="del">×</span>
                                </li>
                                <li class="favorite-item">
                                    <a href="http://wiki.intra.xiaojukeji.com/" target="_blank">
                                        <div class="logo"><img src="//img-hxy021.didistatic.com/static/iportal/systooljpg/wiki.jpg"></div>
                                        <div class="title">WIKI</div>
                                    </a><span class="del">×</span>
                                </li>
                                <li class="favorite-item">
                                    <a href="http://lean.xiaojukeji.com/" target="_blank">
                                        <div class="logo"><img src="//img-hxy021.didistatic.com/static/iportal/systooljpg/lean.jpg"></div>
                                        <div class="title">Lean</div>
                                    </a>
                                    <span class="del">×</span>
                                </li>
                                <li class="favorite-item">
                                    <a href="http://way.xiaojukeji.com/" target="_blank">
                                        <div class="logo"><img src="//img-hxy021.didistatic.com/static/iportal/systooljpg/way.jpg"></div>
                                        <div class="title">Way社区</div>
                                    </a>
                                    <span class="del">×</span>
                                </li>
                                <li class="add-item" style="order: 15;">
                                    <img src="/static/img/add.6db6ef6.png">
                                </li>
                            </ul>
                            <div class="more hover">应用中心</div>
                        </div>
                    </div>

                    <div class="ivu-dropdown">
                        <div class="ivu-dropdown-rel">
                            <span><img src="../../assets/logo.png"></span>
                        </div>
                        <div class="ivu-select-dropdown" style="display: none;">
                            <ul class="ivu-dropdown-menu">
                                <li class="ivu-dropdown-item"><a href="/space/personal" class="user-name">个人中心</a></li>
                                <li class="ivu-dropdown-item">退出登录</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "app-nav",
        data () {
            return {
                activeIndex: "1"
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                alert(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    *, :after, :before {
        box-sizing: border-box;
    }

    ol, ul {
        list-style: none;
    }

    a {
        color: #02aae4;
        background: transparent;
        text-decoration: none;
        outline: none;
        cursor: pointer;
        transition: color .2s ease;
    }

    img {
        border-style: none;
        max-width: 100%;
    }

    .hover {
        cursor: pointer;
        transition: color .3s ease;
    }

    .header-container {
        width: 100%;
        min-height: 70px;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1000;
        -webkit-box-shadow: 0 0 20px 0 rgba(0,0,0,.15);
        box-shadow: 0 0 20px 0 rgba(0,0,0,.15);
    }

    .header {
        width: 100%;
        height: 70px;
        position: relative;
        background-color: #fff;
        padding: 17px 20px;
    }

    .header .logo {
        display: inline-block;
    }

    .header .logo a {
        display: block;
    }

    .header .logo a img {
        width: 160px;
        height: 70px;
        position: relative;
        bottom: 17px;
    }

    .header .header-mid {
        width: 80px;
        height: 70px;
        display: inline-block;
        margin: auto;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 0;
        bottom: 0;
        right: 0;
    }

    .ip-menu {
        height: 100%;
    }

    .ip-menu .ivu-menu-horizontal {
        height: 70px;
    }

    .ivu-menu-light {
        background: #fff;
    }

    .ivu-menu-horizontal {
        line-height: 60px;
    }

    .ivu-menu {
        display: block;
        margin: 0;
        padding: 0;
        outline: none;
        list-style: none;
        color: #333;
        font-size: 14px;
        position: relative;
        z-index: 900;
    }

    .ip-menu .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item {
        border-bottom: none;
    }

    .ip-menu .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active {
        color: #02aae4;
        border-bottom: none;
    }

    .ip-menu .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item {
        color: #666;
    }

    .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover {
        color: #02aae4;
        border-bottom: 2px solid #02aae4;
    }

    .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu {
        height: inherit;
        line-height: inherit;
        border-bottom: 2px solid transparent;
        color: #333;
    }

    .ip-menu .ivu-menu .ivu-menu-item {
        width: 80px;
        padding: 16px;
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        display: -webkit-flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-align-items: center;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .ip-menu .ivu-menu .ivu-menu-item {
        width: 80px;
        padding: 16px;
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        display: -webkit-flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-align-items: center;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .ivu-menu-horizontal .ivu-menu-item, .ivu-menu-horizontal .ivu-menu-submenu {
        float: left;
        padding: 0 20px;
        position: relative;
        cursor: pointer;
        z-index: 3;
        transition: all .2s ease-in-out;
    }

    .ivu-menu-item {
        display: block;
        outline: none;
        list-style: none;
        font-size: 14px;
        position: relative;
        z-index: 1;
        cursor: pointer;
        transition: all .2s ease-in-out;
    }

    .ip-menu .ivu-menu .ivu-menu-item i {
        margin-right: 0;
        font-size: 18px;
        line-height: 18px;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }

    .ivu-menu-item>i {
        margin-right: 6px;
    }

    .ip-menu .ivu-menu .ivu-menu-item i {
        margin-right: 0;
        font-size: 18px;
        line-height: 18px;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }

    .ivu-menu-item>i {
        margin-right: 6px;
    }

    .ip-menu .ivu-menu .ivu-menu-item span {
        font-size: 12px;
        font-weight: 700;
        height: 17px;
        line-height: 22px;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }

    .header .header-right {
        float: right;
        height: 40px;
        line-height: 38px;
    }

    .ip-favorites {
        display: inline-block;
        vertical-align: top;
        position: relative;
        z-index: 2000;
        margin-left: 20px;
    }

    .icon-box {
        font-size: 14px;
        color: #666;
        cursor: pointer;
        -webkit-transition: color .3s ease;
        transition: color .3s ease;
        margin: 0 16px;
    }

    .icon-box .text {
        vertical-align: top;
    }

    .favorites-poptip-content {
        position: fixed;
        right: 50px;
        top: 66px;
        z-index: 2000;
        background-color: #fff;
        padding: 20px 5px 40px 20px;
        -webkit-box-shadow: 0 1px 6px rgba(0,0,0,.15);
        box-shadow: 0 1px 6px rgba(0,0,0,.15);
    }

    .favorites-poptip-content .arrow {
        width: 0;
        height: 0;
        position: absolute;
        right: 180px;
        top: -13px;
        border-width: 0 10px 13px;
        border-color: transparent;
        border-bottom-color: rgba(0,0,0,.065);
        border-style: solid;
    }

    .favorites-poptip-content .favorite-list {
        width: 380px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    .favorites-poptip-content .favorite-item {
        width: 80px;
        height: 80px;
        margin-right: 15px;
        margin-bottom: 20px;
        background-color: #fafafa;
        cursor: pointer;
        border-radius: 4px;
        position: relative;
        -webkit-transition: background-color .3s ease;
        transition: background-color .3s ease;
    }

    .favorites-poptip-content .favorite-item a {
        display: block;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        display: -webkit-flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-align-items: center;
    }

    .favorites-poptip-content .favorite-item .logo {
        height: 45px;
        width: 45px;
        margin-top: 10px;
        overflow: hidden;
    }

    .favorites-poptip-content .favorite-item .logo img {
        width: 100%;
        height: 100%;
    }

    .favorites-poptip-content .favorite-item .title {
        width: 70px;
        height: 17px;
        font-size: 12px;
        color: #333;
        padding: 0 5px;
        line-height: 17px;
        margin-top: 4px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
    }

    .favorites-poptip-content .favorite-item .del {
        display: none;
        width: 17px;
        height: 17px;
        color: #9b9b99;
        text-align: center;
        line-height: 15px;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 100%;
        position: absolute;
        top: -8px;
        right: -7px;
        z-index: 10;
        cursor: pointer;
    }

    .favorites-poptip-content .add-item {
        width: 80px;
        height: 80px;
        background: #fafafa;
        border: 1px dashed #ddd;
        border-radius: 4px;
        margin-bottom: 20px;
        margin-right: 15px;
        cursor: pointer;
    }

    .favorites-poptip-content .add-item img {
        margin: auto;
    }

    .header .header-right .ivu-dropdown {
        margin-top: 2px;
    }

    .ivu-dropdown {
        display: inline-block;
    }

    .header .header-right .ivu-dropdown .ivu-dropdown-rel {
        width: 32px;
        height: 32px;
    }

    .ivu-dropdown-rel {
        position: relative;
    }

    .header .header-right .ivu-dropdown .ivu-dropdown-rel span {
        display: inline-block;
        background: #d8d8d8;
        width: 32px;
        height: 32px;
        border-radius: 100%;
        cursor: pointer;
        overflow: hidden;
    }

    .header .header-right .ivu-dropdown .ivu-dropdown-rel span img {
        width: 100%;
        height: 100%;
    }

    .header .header-right .ivu-dropdown .user-name {
        display: block;
        color: #333;
    }

    .ivu-dropdown .ivu-select-dropdown {
        overflow: visible;
        max-height: none;
    }

    .ivu-select-dropdown {
        width: inherit;
        max-height: 200px;
        overflow: auto;
        margin: 5px 0;
        padding: 5px 0;
        background-color: #fff;
        box-sizing: border-box;
        border-radius: 4px;
        box-shadow: 0 0 20px 0 rgba(0,0,0,.15);
        position: absolute;
        z-index: 900;
    }

    .ivu-dropdown-menu {
        min-width: 100px;
    }

    .ivu-dropdown-item {
        margin: 0;
        line-height: normal;
        padding: 7px 16px;
        clear: both;
        color: #333;
        font-size: 12px!important;
        white-space: nowrap;
        list-style: none;
        cursor: pointer;
        transition: background .2s ease-in-out;
    }

    .favorites-poptip-content .more {
        position: absolute;
        width: 405px;
        height: 40px;
        border-top: 1px solid #eee;
        background: #f7f7f7;
        text-align: center;
        line-height: 40px;
        color: #666;
        border-radius: 0 0 4px 4px;
        margin-left: -20px;
        cursor: pointer;
    }
</style>