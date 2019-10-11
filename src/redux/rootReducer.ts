import { combineReducers } from 'redux'

import employee from './employee'

const reducers = {
  employee
}

/* 
将整个应用的reducer，合并在一起了。
*/
export default combineReducers(reducers)