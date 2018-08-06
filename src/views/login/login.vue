<template>
    <div class="bg">
        <div class="center main-container" id="main">
            <div id="login-hint" class="login-hint">使用实验室邮箱登录</div>
            <div class="text-center logo-container">
                <div class="logo"></div>
                <p id="lang-title">创享堆</p>
                <span>一站式运营平台</span>
            </div>
            <div class="input-container">
                <!--<label for="username" class="user"></label>-->
                <input id="username" data-lang-placeholder="login.account" maxlength="100" placeholder="账户">
            </div>
            <div class="input-container">
                <!--<label for="password" class="password"></label>-->
                <input id="password" data-lang-placeholder="login.password" maxlength="100" type="password" placeholder="密码">
            </div>
            <div class="input-container sms-container hide" id="sms-container">
            </div>
            <div class="message clearfix">
                <div id="error">
                </div>
                <a href="/resetPwd.html?redirect_uri=http%3A%2F%2Fmis.diditaxi.com.cn%2Fauth%2F%3Fapp_id%3D1076%26jumpto%3D%252F%26callback_index%3D0" id="reset" class="hide" style="display: inline;">
                    <span data-lang="login.reset">重置密码</span>
                </a>
            </div>
            <div style="font-size:12px;width:286px;color:#eb5c3a;line-height:13px">
                <img id="login-alert__img--display" style="float:left;width:14px;height:12px;margin:0 5px" alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMjIgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJ2MiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuS4u+acuuWIl+ihqC3kuLvmnLrljbjovb1fMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU0NC4wMDAwMDAsIC0zNzAuMDAwMDAwKSIgZmlsbD0iI0ZFNEYyNyI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0zLUNvcHktMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTQ0LjAwMDAwMCwgMzY1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMi43MjM1MDU2LDEuMTc3NDEzOTQgTDIwLjg1MDEyNDUsMTQuOTg1NTcyOCBDMjEuNDEwMzc3MiwxNS45Mzc1MTMzIDIxLjA5Mjg1MTUsMTcuMTYzMzg4MSAyMC4xNDA5MTEsMTcuNzIzNjQwOCBDMTkuODMzNDY3LDE3LjkwNDU4MzEgMTkuNDgzMjIxNywxOCAxOS4xMjY0ODM4LDE4IEwyLjg3MzI0NTg1LDE4IEMxLjc2ODY3NjM1LDE4IDAuODczMjQ1ODUxLDE3LjEwNDU2OTUgMC44NzMyNDU4NTEsMTYgQzAuODczMjQ1ODUxLDE1LjY0MzI2MjEgMC45Njg2NjI3ODQsMTUuMjkzMDE2OCAxLjE0OTYwNTA5LDE0Ljk4NTU3MjggTDkuMjc2MjI0MDUsMS4xNzc0MTM5NCBDOS44MzY0NzY3MSwwLjIyNTQ3MzQzNSAxMS4wNjIzNTE1LC0wLjA5MjA1MjMwMDQgMTIuMDE0MjkyLDAuNDY4MjAwMzYzIEMxMi4zMDcwOTg1LDAuNjQwNTI3OTU5IDEyLjU1MTE3OCwwLjg4NDYwNzQ0OCAxMi43MjM1MDU2LDEuMTc3NDEzOTQgWiBNMTEuNDMzNjI5MywyLjQ5MTQyOTkyIEMxMS4zODk0Nzk1LDIuNDE0NDUxMzcgMTEuMzI1NjM3OSwyLjM1MDYwOTc4IDExLjI0ODY1OTMsMi4zMDY0NTk5NCBDMTEuMDA5MTE4MiwyLjE2OTA3NDkgMTAuNzAzNTU5MSwyLjI1MTg4ODc4IDEwLjU2NjE3NDEsMi40OTE0Mjk5MiBMMy4yNDc5ODQ4NCwxNS4yNTEyNDI0IEMzLjIwNDU2MDU2LDE1LjMyNjk1NTkgMy4xODE3MTI0NSwxNS40MTI3MTc3IDMuMTgxNzEyNDUsMTUuNSBDMy4xODE3MTI0NSwxNS43NzYxNDI0IDMuNDA1NTcwMDgsMTYgMy42ODE3MTI0NSwxNiBMMTguMzE4MDkwOSwxNiBDMTguNDA1MzczMiwxNiAxOC40OTExMzUxLDE1Ljk3NzE1MTkgMTguNTY2ODQ4NSwxNS45MzM3Mjc2IEMxOC44MDYzODk3LDE1Ljc5NjM0MjYgMTguODg5MjAzNiwxNS40OTA3ODM1IDE4Ljc1MTgxODUsMTUuMjUxMjQyNCBMMTEuNDMzNjI5MywyLjQ5MTQyOTkyIFogTTEwLjEzNDQ0MzIsNSBMMTEuODY1NTU2OCw1IEMxMi4xNDE2OTkyLDUgMTIuMzY1NTU2OCw1LjIyMzg1NzYzIDEyLjM2NTU1NjgsNS41IEMxMi4zNjU1NTY4LDUuNTExMDk1NzIgMTIuMzY1MTg3NCw1LjUyMjE4ODM2IDEyLjM2NDQ0OTQsNS41MzMyNTk1MSBMMTIuMDMxMTE2LDEwLjUzMzI1OTUgQzEyLjAxMzYwNjEsMTAuNzk1OTA4NCAxMS43OTU0NTU0LDExIDExLjUzMjIyMzUsMTEgTDEwLjQ2Nzc3NjUsMTEgQzEwLjIwNDU0NDYsMTEgOS45ODYzOTM4OSwxMC43OTU5MDg0IDkuOTY4ODgzOTcsMTAuNTMzMjU5NSBMOS42MzU1NTA2Myw1LjUzMzI1OTUxIEM5LjYxNzE4MTkxLDUuMjU3NzI4NzQgOS44MjU2NTI5NCw1LjAxOTQ3NjE0IDEwLjEwMTE4MzcsNS4wMDExMDc0MiBDMTAuMTEyMjU0OCw1LjAwMDM2OTM0IDEwLjEyMzM0NzUsNSAxMC4xMzQ0NDMyLDUgWiBNMTAuNSwxMyBMMTEuNSwxMyBDMTEuNzc2MTQyNCwxMyAxMiwxMy4yMjM4NTc2IDEyLDEzLjUgTDEyLDE0LjUgQzEyLDE0Ljc3NjE0MjQgMTEuNzc2MTQyNCwxNSAxMS41LDE1IEwxMC41LDE1IEMxMC4yMjM4NTc2LDE1IDEwLDE0Ljc3NjE0MjQgMTAsMTQuNSBMMTAsMTMuNSBDMTAsMTMuMjIzODU3NiAxMC4yMjM4NTc2LDEzIDEwLjUsMTMgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==">
                <span id="login-alert__text--display">你登录的系统在后台有日志记录，请勿违反实验室相关信息安全规定。</span>
            </div>
            <div class="submit text-center" id="submit">
                <span data-lang="login.login">登录</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>
    .bg {
        background-image: url('http://www.creatshare.com/img/banner/slogan.png');
        background-size: 100% 100%;
        height: 100vh;
        width: 100vw;
    }

    /*@media screen and (min-width: 500px) {*/
        .main-container {
            padding: 60px 60px 50px;
        }

        .logo-container {
            margin-bottom: 20px;
        }

        input {
            width: 240px;
        }
    /*}*/

    .main-container {
        background-color: #fff;
        border: 1px solid #e9eaeb;
        box-shadow: 0 0 8px 2px #e2e2e2;
        max-width: 400px;
        border-radius: 4px;
    }

    .center {
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        position: absolute;
        top: 50%;
        left: 50%;
    }

    .main-container > .login-hint {
        position: absolute;
        top: 15px;
        right: 20px;
        color: #94969f;
    }

    .text-center {
        text-align: center;
    }

    .logo {
        height: 45px;
        width: 55px;
        margin: 0 auto;
        background-image: url('../../assets/logo.png');
        background-size: 100% 100%;
    }

    .logo-container > p {
        font-size: 20px;
        line-height: 1;
        margin-top: 12px;
        color: #4a4c5b;
    }

    .logo-container > span {
        display: block;
        font-size: 12px;
        line-height: 1;
        margin-top: 6px;
        color: #4a4c5b;
    }

    .input-container {
        border-bottom: 1px solid #d3d4d7;
        padding: 24px 0 8px;
    }

    .input-container > .user {
        height: 17px;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAAGXRFW…TAAcR2oMQFCkQ9BvKBHsgAXgoM4GVioBBQxYCnFOh/ChBgANqQHnCphF0gAAAAAElFTkSuQmCC);
    }

    .input-container > label {
        display: inline-block;
        width: 16px;
        vertical-align: middle;
    }

    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset !important;
    }

    input {
        padding: 0 11px;
        font-size: 14px;
        border: none;
        line-height: 1;
        vertical-align: middle;
    }

    .input-container > .password {
        height: 19px;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAATCAYAAACZZ43PAAAAGXRFW…z4CVWIDRgQsOAnE7SQIBfcALngBJSjisclGDZDLT4NEGAApR0z6RJp7dIAAAAASUVORK5CYII=);
    }

    a {
        background: transparent;
        text-decoration: none;
        -webkit-tap-highlight-color: transparent;
        color: #0088cc;
    }

    .sms-container {
        position: relative;
        display: none;
    }

    .message {
        margin: 16px 0 30px;
        display: -ms-flex;
        display: -moz-flex;
        display: -webkit-box;
        display: flex;
        -webkit-box-pack: left;
        justify-content: left;
    }

    .clearfix {
        zoom: 1;
    }

    #error {
        color: #ec555d;
        font-size: 12px;
        line-height: 1;
        -webkit-box-flex: 1;
        flex: 1;
    }

    .message > a {
        font-size: 12px;
        color: #7b7c85;
        line-height: 1;
    }

    img {
        border: 0;
        vertical-align: middle;
    }

    .submit {
        background-color: #fff;
        font-size: 16px;
        line-height: 48px;
        background-color: #4a4c5b;
        margin-top: 14px;
        color: #fff;
        border-radius: 4px;
        cursor: pointer;
    }

    .text-center {
        text-align: center;
    }
</style>