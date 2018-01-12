import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common';


class App extends Component{
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="E-mail"
                        placeholder="email@gmail.com"
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                    />
                </CardSection>

                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    }
}

export default App;
