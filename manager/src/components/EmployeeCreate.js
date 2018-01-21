import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
    onSubmit() {
        const { name, phone, shift, user } = this.props;
        this.props.employeeCreate({ user, name, phone, shift: shift || 'Monday' });
    }

    renderPickerOptions() {
        const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        return weekDays.map(day => {
            return <Picker.Item label={day} value={day} key={day} />;
        });
    }

    render() {
        console.log(this.props.employee);
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-5555"
                        keyboardType='phone-pad'
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
                    />
                </CardSection>

                <CardSection style={{ flexDirection: 'column' }}>
                    <Text>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        {this.renderPickerOptions()}
                    </Picker>
                </CardSection>

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

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
