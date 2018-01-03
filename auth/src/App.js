import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner, Button, CardSection } from './components/commom';
import LoginForm from './components/LoginFrom';

class App extends Component {
    state = { loggedIn: null }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAbCDAxA5nMEfdau02DQj8_5sqYdMSjlTU',
            authDomain: 'auth-e840b.firebaseapp.com',
            databaseURL: 'https://auth-e840b.firebaseio.com',
            projectId: 'auth-e840b',
            storageBucket: 'auth-e840b.appspot.com',
            messagingSenderId: '283972026700'
        });

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        console.log(this.state);
        switch (this.state.loggedIn) {
            case true:
            return (
                <CardSection>
                  <Button onPress={() => firebase.auth().signOut()} >
                    Log Out
                  </Button>
                </CardSection>
              );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header text="Auth" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
