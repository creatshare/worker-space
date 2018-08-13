import { $get } from '../commons/ajax'
import { setTicket, setUsername, getTicket, getUsername } from '../commons/util'

export default (to, from, next) => {
    checkLogin({ticket: getTicket(), isTestEnv})
        .then(r => next())
        .catch(r => {
            if (to.path === '/!/Auth/index') {
                // console.log(`获取 code`);
                getUsernameAndTicket(to.query.code)
                    .then(r => {
                        setTicket(r['data']['ticket']);
                        setUsername(r['data']['u_name'])
                        location.href = to.query.jumpto;
                        // next({path: '/'});
                    })
                    .catch(_ => {
                        alert('服务器繁忙, 请稍后再试')
                    })
            } else {
                // /Auth/index
                getLoginUrl()
                    .then(r => {
                        location.href = r.msg;
                    })
                    .catch(_ => {
                        alert('服务器繁忙, 请稍后再试')
                    })
            }
        })
}

/**
 *  isTestEnv
 *   如果是测试环境不作处理
 *   如果是正式环境
 *     1. 验证 ticket 是否存在
 *     2. 验证 ticket 是否合法
 *            合法: next()
 *            不合法:
 *                   a. 跳转到登录页面
 *                   b. 登录成功后地址返回 /!/Auth/index,
 *                          同时返回 code, 和 jumpto
 *                   c. 用 code 发送请求获取 Username 和 ticket, 并存入 cookie, 刷新
 */
const checkLogin = ({isTestEnv, ticket}) => new Promise((resolve, reject) => {
    if (isTestEnv) {
        resolve();
        return
    }
    if (!ticket) reject();
    getCheckTicket(ticket)
        .then(r => {
            // console.log(r)
            if (r.errmsg === 'ok')
                resolve();
            else
                reject();
        })
        .catch(reject);
});

/**
 * 验证 ticket
 * @param ticket
 */
const getCheckTicket = ticket => get(`cmdb/auth/sso/checkTicketMonitor`, {ticket});

/**
 * 当用户没有登录时, 访问接口: auth/sso/getLoginUrlMonitor
 * 获取跳转地址
 * 重新登录后回到之前页面
 */
const getLoginUrl = () =>
    get('cmdb/auth/sso/getLoginUrlMonitor', {url: location.href});

/**
 * 通过 code 获取 username 和 ticket
 * @param code
 */
const getUsernameAndTicket = code =>
    get('cmdb/auth/sso/checkCodeMonitor', {code: code});
