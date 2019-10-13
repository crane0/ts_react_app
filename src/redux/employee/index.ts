import { Dispatch } from 'redux';

import { get, post } from '../../utils/request';
import { department, level } from '../../constants/options';

import {
    GET_EMPLOYEE_URL,
    CREATE_EMPLOYEE_URL,
    DELETE_EMPLOYEE_URL,
    UPDATE_EMPLOYEE_URL
} from '../../constants/urls';

import {
    GET_EMPLOYEE,
    CREATE_EMPLOYEE,
    DELETE_EMPLOYEE,
    UPDATE_EMPLOYEE
} from '../../constants/actions';

import {
    EmployeeInfo,
    EmployeeRequest,
    EmployeeResponse,
    CreateRequest,
    DeleteRequest,
    UpdateRequest
} from '../../interface/employee';

/* 
Readonly，为了不修改这个 state,
注意，Readonly只对一级属性有用，也就是说，如果属性值是数组，数组元素是没有设置 Readonly的
*/
type State = Readonly<{
    employeeList: EmployeeResponse
}>

type Action = {
    type: string;
    payload: any;
}

const initialState: State = {
    employeeList: undefined
}

/* 
这是比较经典的 redux-thunk 的写法：
*/
export function getEmployee(param: EmployeeRequest, callback: () => void) {
    return (dispatch: Dispatch) => {
        get(GET_EMPLOYEE_URL, param).then((res) => {
            dispatch({
                type: GET_EMPLOYEE,
                payload: res.data
            });
            callback();
        });
    }
}

export function createEmployee(param: CreateRequest, callback: () => void) {
    console.log(param)
    return (dispatch: Dispatch) => {
        post(CREATE_EMPLOYEE_URL, param).then(res => {
            dispatch({
                type: CREATE_EMPLOYEE,
                payload: {
                    name: param.name,
                    department: department[param.departmentId],
                    departmentId: param.departmentId,
                    hiredate: param.hiredate,
                    level: level[param.levelId],
                    levelId: param.levelId,
                    ...res.data
                }
            });
            callback();
        });
    }
}

export function deleteEmployee(param: DeleteRequest) {
    return (dispatch: Dispatch) => {
        post(DELETE_EMPLOYEE_URL, param).then(res => {
            dispatch({
                type: DELETE_EMPLOYEE,
                payload: param.id
            })
        });
    }
}

export function updateEmployee(param: UpdateRequest, callback: () => void) {
    return (dispatch: Dispatch) => {
        post(UPDATE_EMPLOYEE_URL, param).then(res => {
            dispatch({
                type: UPDATE_EMPLOYEE,
                payload: param
            });
            callback();
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
        case CREATE_EMPLOYEE:
            console.log(1111)
            let newList = [action.payload, ...(state.employeeList as EmployeeInfo[])]
            return {
                ...state,
                employeeList: newList
            }
        case DELETE_EMPLOYEE:
            let reducedList = [...(state.employeeList as EmployeeInfo[])];
            reducedList = reducedList.filter((i) => {
                return i.id !== action.payload
            });
            return {
                ...state,
                employeeList: reducedList
            }
        case UPDATE_EMPLOYEE:
            let updatedList = [...(state.employeeList as EmployeeInfo[])];
            let item: UpdateRequest = action.payload;
            let index = updatedList.findIndex((i) => {
                return i.id === item.id
            })
            updatedList[index] = {
                id: item.id,
                key: item.id,
                name: item.name,
                department: department[item.departmentId],
                departmentId: item.departmentId,
                hiredate: item.hiredate,
                level: level[item.levelId],
                levelId: item.levelId
            }
            return {
                ...state,
                employeeList: updatedList
            }    
        default:
            return state
    }
}