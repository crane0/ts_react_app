import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Root from './routers/index'
import store from './redux/store'

/* 
Provider 作为整个应用的外层容器，
传入 store 后，所有的组件都可以访问 store 了。
*/
ReactDOM.render(
  <Provider store={store} >
    <Root />
  </Provider>,
  document.querySelector('.app')
) 