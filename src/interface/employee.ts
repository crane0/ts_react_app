// 请求数据格式
export interface EmployeeRequest {
    name?: string;
    departmentId?: number;
}

// 单条数据响应格式，
export interface EmployeeInfo {
    id: number;
    key: number;
    name: string;
    department: string;
    departmentId: number;
    hiredate: string;
    level: string;
    levelId: number;
}

// type 类型别名，定义了一个新的类型
export type EmployeeResponse = EmployeeInfo[] | undefined


// 添加请求数据接口约束
export interface CreateRequest {
    name: string;
    departmentId: number;
    hiredate: string;
    levelId: number;
}
export interface CreateResponse {
    id: number;
    key: number;
}

// 修改请求数据接口约束
export interface UpdateRequest {
    id: number;
    name: string;
    departmentId: number;
    hiredate: string;
    levelId: number;
}

// 删除请求数据接口约束
export interface DeleteRequest {
    id: number;
}
