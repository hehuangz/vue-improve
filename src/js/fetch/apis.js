import createAPI from './createAPI'
const apis = {
    /* 登录模块 -- start */
    // 登录接口
    login: (data, $this, cancel) => createAPI('/web/uc/login', 'post', data, $this, cancel),
    // 登出接口
    logout: (data, $this, cancel) => createAPI('/web/uc/logout', 'post', data, $this, cancel),
    // 修改密码
    resetPwd: (data, $this, cancel) => createAPI('/web/uc/resetPwd', 'post', data, $this, cancel),
    // 菜单初始化
    initMenu: (data, $this, cancel) => createAPI('/web/uc/initMenu', 'post', data, $this, cancel),
    /* 登录模块 -- end */

    /* 用户管理 -- start */
    // 查询用户信息列表
    queryUserDetail: (data, $this, cancel) => createAPI('/web/uc/queryUserDetail', 'post', data, $this, cancel),
    // tab - 基础信息
    getUserBaseInfo: (data, $this, cancel) => createAPI('/web/uc/getUserBaseInfo', 'post', data, $this, cancel),
    // tab - 资产信息
    getLkc: (data, $this, cancel) => createAPI('/web/uc/getLkc', 'post', data, $this, cancel),
    // tab - 路演信息
    queryActivityInfo: (data, $this, cancel) => createAPI('/web/activity/queryActivityInfo', 'post', data, $this, cancel),
    // tab - 投票信息
    queryActivityVoteInfo: (data, $this, cancel) => createAPI('/web/activity/queryActivityVoteInfo', 'post', data, $this, cancel),
    // 冻结解冻用户
    toggleUserStatus: (data, $this, cancel) => createAPI('/web/uc/toggleUserStatus', 'post', data, $this, cancel),
    // 设置一级分销或区域代理
    setAsMer: (data, $this, cancel) => createAPI('/web/uc/setAsMer', 'post', data, $this, cancel),
    // 根据merType查询用户信息
    listUserInfoByMerType: (data, $this, cancel) => createAPI('/web/uc/listUserInfoByMerType', 'post', data, $this, cancel),
    // 分页查询用户资产信息
    queryUserAssets: (data, $this, cancel) => createAPI('/web/uc/queryUserAssets', 'post', data, $this, cancel),
    // 用户日志查询
    queryLogInfo: (data, $this, cancel) => createAPI('/web/uc/queryLogInfo', 'post', data, $this, cancel),
    // 用户日志查询--换绑手机号
    queryChangeMobileLogo: (data, $this, cancel) => createAPI('/web/uc/queryChangeMobileLogo', 'post', data, $this, cancel),
    /* 用户管理 -- end */

    /* APP版本管理 -- start */
    // 查询APP
    queryApp: (data, $this, cancel) => createAPI('/web/app/queryApp', 'post', data, $this, cancel),
    // 添加或修改APP
    saveOrUpdateApp: (data, $this, cancel) => createAPI('/web/app/saveOrUpdateApp', 'post', data, $this, cancel),
    // 删除APP
    deleteApp: (data, $this, cancel) => createAPI('/web/app/deleteApp', 'post', data, $this, cancel),
    /* APP版本管理 -- end */

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
    deleteOperator: (data, $this, cancel) => createAPI('/web/sys/deleteOperator', 'post', data, $this, cancel),
    /* 后台账号管理 -- end */

    /* 分组权限管理 -- start */
    // 查询分组
    queryAllRole: (data, $this, cancel) => createAPI('/web/sys/queryAllRole', 'post', data, $this, cancel),
    // 添加或修改分组
    addOrUpdateRole: (data, $this, cancel) => createAPI('/web/sys/addOrUpdateRole', 'post', data, $this, cancel),
    // 删除分组
    deleteRole: (data, $this, cancel) => createAPI('/web/sys/deletedRole', 'post', data, $this, cancel),
    // 查询分组用户
    queryRoleOperator: (data, $this, cancel) => createAPI('/web/sys/queryRoleOperator', 'post', data, $this, cancel),
    // 添加分组用户
    addRoleOperator: (data, $this, cancel) => createAPI('/web/sys/addRoleOperator', 'post', data, $this, cancel),
    // 移除分组用户
    removeRoleOperator: (data, $this, cancel) => createAPI('/web/sys/removeRoleOperator', 'post', data, $this, cancel),
    // 查询分组菜单
    queryRoleMenu: (data, $this, cancel) => createAPI('/web/sys/queryRoleMenu', 'post', data, $this, cancel),
    // 配置分组菜单
    updateRoleMenu: (data, $this, cancel) => createAPI('/web/sys/updateRoleMenu', 'post', data, $this, cancel),
    /* 分组权限管理 -- end */

    /* 权限分配 -- start */
    // 修改菜单状态 有效/失效
    updateMenuStatus: (data, $this, cancel) => createAPI('/web/sys/updateMenuStatus', 'post', data, $this, cancel),
    // 删除菜单
    deleteMenu: (data, $this, cancel) => createAPI('/web/sys/deleteMenu', 'post', data, $this, cancel),
    // 添加或修改菜单
    addOrUpdateMenu: (data, $this, cancel) => createAPI('/web/sys/addOrUpdateMenu', 'post', data, $this, cancel)
    /* 权限分配 -- end */
}
export default apis
