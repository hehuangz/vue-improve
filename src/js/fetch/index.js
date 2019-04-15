import createProd from './createProd'
import createMock from './createMock'

const createAPI = process.env.NODE_ENV === 'production' ? createProd : createMock

export default createAPI
