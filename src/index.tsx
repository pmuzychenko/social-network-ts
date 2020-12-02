import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store, StoreType} from './redux/state';
import * as serviceWorker from './serviceWorker';

const renderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store);
store.subscribe(renderEntireTree)

serviceWorker.unregister();
