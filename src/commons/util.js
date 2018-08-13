const TICKET = 'ws_ticket';
const USERNAME = 'ws_username';

// ============================
export const getTicket = () => getCookie(TICKET);
export const setTicket = ticket => setCookie(TICKET, ticket);
export const deleteTicket = () => delCookie(TICKET);
export const getUsername = () => encodeURIComponent(getCookie(USERNAME));
// export const getUsernamePost = () => decodeURIComponent(getCookie(USERNAME));

export const setUsername = username => setCookie(USERNAME, username);
export const deleteUsername = () => delCookie(USERNAME);

// export const isDev = process.env.NODE_ENV;

export const setCookie = (name, value) => {
    const HOURS = 4;
    const exp = new Date();
    exp.setTime(exp.getTime() + HOURS * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
};

export const delCookie = name => {
    const exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";path=/";
};

export const getCookie = name => {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return null;
    }
};

/**
 * yyyy-MM-dd hh:mm:ss
 * @param fmt
 * @returns {*}
 */
// new Date('1234567890').format('yyyy-MM-dd')
Date.prototype.format = function (fmt) { //author: meizz
    let o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

export const formatDateToStr = (d, type) => {
    if (typeof d !== 'object') {
        d = new Date(d);
    }
    let r = `${d.getFullYear()}-${d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1}-${d.getDate() < 10 ? '0' + (d.getDate()) : d.getDate()}`;
    if (!type) {
        return r + ` ${d.getHours() < 10 ? '0' + d.getHours() : d.getHours()}:${d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()}:${d.getSeconds() < 10 ? '0' + (d.getSeconds()) : d.getSeconds()}`
    } else {
        return r
    }
};