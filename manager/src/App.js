import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component{
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyASGyVncRIh85DemmNiY9-P7N6mFr8wtS4',
            authDomain: 'manager-6bb26.firebaseapp.com',
            databaseURL: 'https://manager-6bb26.firebaseio.com',
            projectId: 'manager-6bb26',
            storageBucket: 'manager-6bb26.appspot.com',
            messagingSenderId: '132949464947'
        };

        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <LoginForm />
                </View>
            </Provider>
        );
    }
}

export default App;
