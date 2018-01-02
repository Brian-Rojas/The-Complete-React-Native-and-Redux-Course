import React, { Component } from 'react';
import { Button, CardSection, Card, Input } from './commom';

class LoginForm extends Component {
    state = {
        email: ''
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        autoCorrect={false}
                        label="E-mail"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection />
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
