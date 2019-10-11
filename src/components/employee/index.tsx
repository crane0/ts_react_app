import React, { Component } from 'react';
import { Table } from 'antd';

import QueryForm from './QueryForm';
import { employeeColumns } from './colums';
import { EmployeeResponse } from '../../interface/employee';

import './index.css';

interface State {
    employee: EmployeeResponse
}

/* 
这里将 form 和 table 拆分为2个组件，
如何将 form 组件获取的数据，渲染 table 组件？
    可以给他们的父组件（当前组件），增加一个状态，绑定到 table 上，
    再给 form 组件传递一个回调，设置父组件状态，也就是请求返回的数据结构。
    步骤：
        定义状态约束接口，
        为Component添加泛型变量，
        初始化状态，
        绑定到 table 上

*/
class Employee extends Component<{}, State> {
    state: State = {
        employee: undefined
    }

    /* 
    使用接口的好处：这里可以避免边界遗漏情况，undefined 没有 length 属性。
    解决：使用类型保护
    */
    getTotal = () => {
        let total: number
        if (typeof this.state.employee === 'undefined') {
            total = 0
        } else {
            total = this.state.employee.length
        }
        return <p>共{total}名员工</p>
    }

    setEmployee = (employee: EmployeeResponse) => {
        this.setState({ 
            employee
        })
    }

    /* 
    无法直接为 QueryForm 组件添加属性，因为他经过了 antd 的包装，
    对应的也提供了解决方法，在 QueryForm 组件中有设置。
    */
    render() {
        return (
            <>
                <QueryForm onDataChange={this.setEmployee} />
                {this.getTotal()}
                <Table columns={employeeColumns} dataSource={this.state.employee} className="table" />
            </>
        )
    }
}

export default Employee;
