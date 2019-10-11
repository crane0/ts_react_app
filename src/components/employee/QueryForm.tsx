import React, { Component } from 'react';
import { Form, Input, Select, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

import { EmployeeRequest, EmployeeResponse } from '../../interface/employee'
import { get } from '../../utils/request'
import { GET_EMPLOYEE_URL } from '../../constants/urls'

const { Option } = Select;

/* 
通过 antd 提供的FormComponentProps，来约束当前组件（已经被antd改装过的）传入的 props，
props 就可以正常传入了。

最下面的 Form.create 也要改造为泛型函数：Form.create<Props>
*/
interface Props extends FormComponentProps {
    onDataChange(data: EmployeeResponse): void
}

/* 
Component 设置泛型变量，第1个属性类型，第2个状态类型。
*/
class QueryForm extends Component<Props, EmployeeRequest> {
    state: EmployeeRequest = {
        name: '',
        departmentId: undefined
    }

    // 需要指定参数类型
    handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            name: e.currentTarget.value
        })
    }

    handleDepartmentChange = (value: number) => {
        this.setState({
            departmentId: value
        })
    }

    handleSubmit = () => {
        this.queryEmployee(this.state)
    }

    componentDidMount() {
        this.queryEmployee(this.state)
    }

    queryEmployee = (param: EmployeeRequest) => {
        // console.log(param)
        // 请求url，定义为了常量
        get(GET_EMPLOYEE_URL, param).then(response => {
            this.props.onDataChange(response.data)
        })
    }

    render() {
        return (
            <Form layout="inline">
                <Form.Item>
                    <Input
                        placeholder="姓名"
                        style={{ width: 120 }}
                        allowClear
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />
                </Form.Item>
                <Form.Item>
                <Select
                    placeholder="部门"
                    style={{ width: 120 }}
                    allowClear
                    value={this.state.departmentId}
                    onChange={this.handleDepartmentChange}
                >
                    <Option value={1}>技术部</Option>
                    <Option value={2}>产品部</Option>
                    <Option value={3}>市场部</Option>
                    <Option value={4}>运营部</Option>
                </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={this.handleSubmit}>查询</Button>
                </Form.Item>
            </Form>
        )
    }
}

// 这里也要改造为泛型函数
const WrapQueryForm = Form.create<Props>({
    name: 'employee_query'
})(QueryForm);

export default WrapQueryForm;
