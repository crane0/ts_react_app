import { Dispatch } from 'redux';

import { get } from '../../utils/request';

import { GET_EMPLOYEE_URL } from '../../constants/urls';

import { GET_EMPLOYEE } from '../../constants/actions';

import { EmployeeRequest, EmployeeResponse } from '../../interface/employee';

/* 
Readonly，为了不然修改这个 state,
注意，Readonly只对一级属性有用，也就是说，如果属性值是数组，数组元素是没有设置 Readonly的
*/
type State = Readonly<{
    employeeList: EmployeeResponse
}>

type Action = {
    type: string;
    payload: EmployeeResponse;
}

const initialState: State = {
    employeeList: undefined
}

/* 
这是比较经典的 redux-thunk 的写法：
*/
export function getEmployee(param: EmployeeRequest) {
    return (dispatch: Dispatch) => {
        get(GET_EMPLOYEE_URL, param).then((res: any) => {
            dispatch({
                type: GET_EMPLOYEE,
                payload: res.data
            });
        });
    }
}

/* 
reducer 的逻辑
*/
export default function(state = initialState, action: Action) {
    switch (action.type) {
        case GET_EMPLOYEE:
            return {
                ...state,
                employeeList: action.payload
            }
        default:
            return state
    }
}