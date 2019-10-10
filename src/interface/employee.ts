// 请求数据格式
export interface EmployeeRequest {
    name: string;
    departmentId: number | undefined;
}

// 单条数据响应格式，
interface EmployeeInfo {
    id: number;
    key: number;
    name: string;
    department: string;
    hiredate: string;
    level: string;
}

// type 类型别名，定义了一个新的类型
export type EmployeeResponse = EmployeeInfo[] | undefined
