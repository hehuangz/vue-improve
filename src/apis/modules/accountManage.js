/**
 * 后台账号管理模块
 */
import createAPI from '@/js/fetch'
const ACCOUNTMANAGE = {
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
}
export default ACCOUNTMANAGE
