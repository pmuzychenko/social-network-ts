import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {RootStateType, store} from './redux/state';
import * as serviceWorker from './serviceWorker';
import {reduxStore} from "./redux/redux-store";




const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={reduxStore.getState()} dispatch={reduxStore.dispatch.bind(reduxStore)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

// renderEntireTree(reduxStore.getState());
// reduxStore.subscribe(() => {
//     const state = reduxStore.getState()
//     renderEntireTree(state)
// })
renderEntireTree();
reduxStore.subscribe(() => renderEntireTree());


serviceWorker.unregister();
