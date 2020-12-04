import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {AppStateType, reduxStore} from "./redux/redux-store";




const renderEntireTree = (state: AppStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={reduxStore.dispatch.bind(reduxStore)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(reduxStore.getState());

reduxStore.subscribe(() => renderEntireTree(reduxStore.getState()));


serviceWorker.unregister();
