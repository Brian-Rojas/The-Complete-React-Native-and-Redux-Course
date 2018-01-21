import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
    renderPickerOptions() {
        const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        return weekDays.map(day => {
            return <Picker.Item label={day} value={day} key={day} />;
        });
    }

    render() {
        return (
            <View>
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
            </View>
        );
    }
}

const mapStateTopProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    
    return {
        name,
        phone,
        shift
    };
};

export default connect(mapStateTopProps, { employeeUpdate })(EmployeeForm);
