import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Card, CardSection, Button } from './common';
import { employeeUpdate, employeeSave } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    componentWillMount() {
        Object.keys(this.props.employee).forEach(key => {
            this.props.employeeUpdate({ prop: key, value: this.props.employee[key] });
        });
    }

    onSubmit() {
        const { name, phone, shift } = this.props;

        this.props.employeeSave({ 
            name,
            phone,
            shift,
            employeeId: this.props.employee.uid,
            userId: this.props.user.uid 
        });
    }

    onTextPress() {
        const { phone, shift } = this.props;
        
        Communications.textWithoutEncoding(phone, `Your upcoming shift is on ${shift}`);
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onSubmit.bind(this)}>
                        Save changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
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

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);
