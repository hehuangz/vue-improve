// 本地调试 -- 建议使用mock数据 -- start
function createMock (url, method, data, $this, cancel) {
    let lastName = url.split('/')[url.split('/').length - 1]
    let res = {
        'data': '4004',
        'message': '请求不存在'
    }
    try {
        res = require('../mocks/' + lastName + '.json')
    } catch (err) {
        console.error('请求mock数据失败：不存在 ' + lastName + '.json')
    }
    return Promise.resolve(res)
}
// 本地调试 -- 建议使用mock数据 -- end

export default createMock
