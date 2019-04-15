/**
 * 登录模块
 */
import createAPI from '@/js/fetch'
const LOGIN = {
    // 登录接口
    login: (data, $this, cancel) => createAPI('/web/uc/login', 'post', data, $this, cancel),
    // 登出接口
    logout: (data, $this, cancel) => createAPI('/web/uc/logout', 'post', data, $this, cancel),
    // 菜单初始化
    initMenu: (data, $this, cancel) => createAPI('/web/uc/initMenu', 'post', data, $this, cancel)
}
export default LOGIN
