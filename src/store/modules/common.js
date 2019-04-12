const defaultState = {
    userInfo: {} // 0-横屏，1-竖屏
}
export const COMMON_USERINFO = 'COMMON_USERINFO'
export const commonModule = {
    namespaced: true,
    name: 'common',
    state: defaultState,
    getters: {
        userInfo: state => state.userInfo
    },
    actions: {
        [COMMON_USERINFO] ({ state, commit }, data) {
            commit(COMMON_USERINFO, data)
        }
    },
    mutations: {
        [COMMON_USERINFO] (state, data) {
            state.userInfo = data
        }
    }
}
