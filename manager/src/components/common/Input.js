import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, autoCorrect, secureTextEntry, keyboardType }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={containerStyle} >
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                keyboardType={keyboardType || 'default'}
                secureTextEntry={secureTextEntry}
                autoCapitalize="none"
                placeholder={placeholder}
                autoCorrect={autoCorrect}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        fontSize: 18,
        paddingLeft: 5,
        paddingRight: 5,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };
