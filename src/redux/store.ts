import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

/* 
第1个参数，是应用所有 reducer 的集合，
第2个参数，通过函数组合，为 redux 添加了 thunk 中间件，
*/
const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk)
  )
)

export default store