import COMMON from './modules/common'
import LOGIN from './modules/login'
import ACCOUNTMANAGE from './modules/accountManage'

/**
 * 所有接口引用入口
 */
const apis = {
    ...COMMON,
    ...LOGIN,
    ...ACCOUNTMANAGE
}
export default apis
