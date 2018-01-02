import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/commom';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAbCDAxA5nMEfdau02DQj8_5sqYdMSjlTU",
            authDomain: "auth-e840b.firebaseapp.com",
            databaseURL: "https://auth-e840b.firebaseio.com",
            projectId: "auth-e840b",
            storageBucket: "auth-e840b.appspot.com",
            messagingSenderId: "283972026700"
        });
    }
    render() {
        return (
            <View>
                <Header text="Auth" />
            </View>
        )
    }
}

export default App;