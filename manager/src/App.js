import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
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
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}

export default App;
