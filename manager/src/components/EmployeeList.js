import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import EmployeeListItem from './EmployeeListItem';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch(this.props.user);
        this.createDataSource(this.props);
    }
    
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
    
        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <EmployeeListItem employee={employee} />;
    }
    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = (state) => {
    const employees = Object.keys(state.employee).map((id) => {
        return {
            ...state.employee[id],
            id
        };
    });

    const { user } = state.auth;
    return { employees, user };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
