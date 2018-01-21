import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, ConfirmModal } from './common';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    state = { showModal: false };

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

    onDeclineModal() {
        this.setState({
            showModal: false
        });
    }

    deleteEmployee() {
        this.props.employeeDelete(this.props.employee.uid);
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

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Fire employee
                    </Button>
                </CardSection>

                <ConfirmModal 
                    visible={this.state.showModal}
                    onAccept={this.deleteEmployee.bind(this)}
                    onDecline={this.onDeclineModal.bind(this)}
                >
                    Are you sure you want to delete this?
                </ConfirmModal>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    const { user } = state.auth;

    return { name, phone, shift, user };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
