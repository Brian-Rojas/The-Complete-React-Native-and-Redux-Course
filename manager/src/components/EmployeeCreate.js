import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    onSubmit() {
        const { name, phone, shift, user } = this.props;
        this.props.employeeCreate({ user, name, phone, shift: shift || 'Monday' });
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onSubmit.bind(this)}>Create</Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    const { user } = state.auth;
    return { name, phone, shift, user };
};

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);
