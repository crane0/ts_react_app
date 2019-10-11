import React, { Component } from 'react';
import { Table } from 'antd';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import QueryForm from './QueryForm';
import { employeeColumns } from './colums';
import { EmployeeRequest, EmployeeResponse } from '../../interface/employee';
import { getEmployee } from '../../redux/employee';

import './index.css';

interface Props {
    onGetEmployee(param: EmployeeRequest): void;
    employeeList: EmployeeResponse;
}


class Employee extends Component<Props> {
    render() {
        const { employeeList, onGetEmployee } = this.props;
        return (
            <>
                <QueryForm getData={onGetEmployee} />
                <Table columns={employeeColumns} dataSource={employeeList} className="table" />
            </>
        )
    }
}

const mapStateToProps = (state: any) => ({
    employeeList: state.employee.employeeList
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onGetEmployee: getEmployee,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Employee);