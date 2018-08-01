<template>
    <div class="working-desk">
        <div class="card-group-title">
            <div class="card-group-menu clearfix">
                <ul class="clearfix pull-left">
                    <li class="list current"><span class="msg hover">默认分组</span></li>
                    <!--<li class="list"><span class="msg hover">不常用的</span></li>-->
                </ul>
            </div>
            <div class="ip-top-tips">
                <span>想接入新卡片？</span><a>点击这里</a>
            </div><!----><!---->
        </div>

        <div class="cards-wrapper">
            <div id="cards-container">
                <org-struct></org-struct>
                <api-doc></api-doc>
            </div>
        </div>
    </div>
</template>

<script>
    import OrgStruct from '../../card/org-struct-card/org-struct-card.vue'
    import ApiDoc from '../../card/api-doc-card/api-doc-card.vue'

    export default {
        name: "working-desk",
        components: {
            OrgStruct,
            ApiDoc,
        },
    }
</script>

<style scoped>
    a {
        color: #fc9153;
        background: transparent;
        text-decoration: none;
        outline: none;
        cursor: pointer;
        transition: color .2s ease;
    }

    .working-desk {
        margin-top: 70px;
        margin-left: auto;
        margin-right: auto;
    }

    /* cards 标签 */

    .card-group-title {
        position: relative;
        height: 27px;
        line-height: 27px;
        margin: 90px 0 13px;
    }

    .card-group-title .card-group-menu {
        max-width: 950px;
        position: absolute;
    }

    .pull-left {
        float: left;
    }

    .card-group-title .card-group-menu .list.current {
        color: #333;
        font-weight: 700;
        position: relative;
    }

    .card-group-title .card-group-menu .list {
        -webkit-transition: all .3s;
        transition: all .3s;
        display: inline-block;
        font-size: 16px;
        color: #666;
        padding: 0 20px;
    }

    .card-group-title .card-group-menu .list .msg {
        cursor: pointer;
    }

    .card-group-title .card-group-menu .list.current:after {
        content: "";
        display: block;
        width: 20px;
        height: 3px;
        position: absolute;
        bottom: -1px;
        left: 50%;
        -webkit-transform: translate(-50%);
        transform: translate(-50%);
        background: #fc9153;
        -webkit-box-shadow: 0 2px 4px 0 rgba(252,145,83,.45);
        box-shadow: 0 2px 4px 0 rgba(252,145,83,.45);
        border-radius: 1px;
        z-index: 5;
    }

    .hover, .hover-dark {
        cursor: pointer;
        transition: color .3s ease;
    }

    .clearfix:after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background: transparent;
        clear: both;
    }

    .card-group-title .ip-top-tips {
        float: right;
    }

    .ip-top-tips {
        height: 27px;
        line-height: 27px;
        font-size: 14px;
        font-weight: 400;
        text-align: right;
    }

    /* cards 容器 */

    .cards-wrapper {
        /* @media */
    }

    .cards-wrapper #cards-container {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    /* 大于 1200px 宽度时 */
    @media only screen and (min-width: 1200px) {
        .working-desk {
            width: 1120px;
        }

        .cards-wrapper {
            width: 1140px;
            padding: 0;
            margin-left: -10px;
        }
    }

    /* 小于 1200px 宽度时 */

    @media only screen and (max-width: 1200px) {
        .working-desk {
            width: 840px;
        }

        .card-group-title {
            padding: 0 53px;
        }

        .cards-wrapper {
            /*width: 840px;*/
            padding: 0 40px;
            margin-left: 0;
        }
    }
</style>