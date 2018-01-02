import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/commom';

class App extends Component {
    render() {
        return (
            <View>
                <Header text="Auth" />
            </View>
        )
    }
}

export default App;