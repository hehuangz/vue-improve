import createProdAPI from './createAPI'
import createMock from './createMock'

const createAPI = process.env.NODE_ENV === 'production' ? createProdAPI : createMock

const apis = {
    /* 登录模块 -- start */
    // 登录接口
    login: (data, $this, cancel) => createAPI('/web/uc/login', 'post', data, $this, cancel),
    // 登出接口
    logout: (data, $this, cancel) => createAPI('/web/uc/logout', 'post', data, $this, cancel),
    // 菜单初始化
    initMenu: (data, $this, cancel) => createAPI('/web/uc/initMenu', 'post', data, $this, cancel),
    /* 登录模块 -- end */

    /* 后台账号管理 -- start */
    // 查询账号
    queryAllOperatorRole: (data, $this, cancel) => createAPI('/web/sys/queryAllOperatorRole', 'post', data, $this, cancel),
    // 查询所有分组
    queryAllSysRoleName: (data, $this, cancel) => createAPI('/web/sys/queryAllSysRoleName', 'post', data, $this, cancel),
    // 添加或修改账号
    addOrUpdateOperator: (data, $this, cancel) => createAPI('/web/sys/addOrUpdateOperator', 'post', data, $this, cancel),
    // 更新账户状态（冻结/解冻）
    updateOperatorStatus: (data, $this, cancel) => createAPI('/web/sys/updateOperatorStatus', 'post', data, $this, cancel),
    // 删除账户
    deleteOperator: (data, $this, cancel) => createAPI('/web/sys/deleteOperator', 'post', data, $this, cancel)
    /* 后台账号管理 -- end */
}
export default apis
