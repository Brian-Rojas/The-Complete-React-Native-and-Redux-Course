import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { emailChanged, passwordChanged, loginUser, loginUserSucess } from '../actions';
import { Card, CardSection, Button, Input, Spinner } from './common';


class LoginForm extends Component {
    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.loginUserSucess(user);
            }
        });
    }

    onEmailChanged(text) {
        this.props.emailChanged(text);
    }

    onPasswordChanged(text) {
        this.props.passwordChanged(text);
    }

    onSubmit() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }

        return <Button onPress={this.onSubmit.bind(this)}>Login</Button>;
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="E-mail"
                        autoCorrect={false}
                        keyboardType='email-address'
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChanged.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChanged.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <View style={{ backgroundColor: '#fff' }}>
                    <Text 
                        style={{
                            alignSelf: 'center',
                            fontSize: 20,
                            color: 'red'
                        }}
                    >
                        {this.props.error}
                    </Text>
                </View>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { email, password, error, loading } = state.auth;
    
    return {
        email,
        password,
        error,
        loading
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser, loginUserSucess })(LoginForm);
