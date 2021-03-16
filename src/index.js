import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.min.css"
// import  reducer  from './reducers'
import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
import { createFirestoreInstance } from 'redux-firestore'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import firebase from './firebaseConfig'
import store from './store'


const rrfConfig ={
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }
  
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);
