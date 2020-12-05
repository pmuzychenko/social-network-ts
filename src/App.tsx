import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/NavBar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from './components/Settings/Settings';
import {DialogsActionsTypes} from "./redux/dialogs-reducer";
import {ProfileActionsTypes} from "./redux/profile-reducer";
import {AppStateType, StoreType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type PropsType = {
    state: AppStateType
    dispatch: (action: DialogsActionsTypes | ProfileActionsTypes) => void
}


const App: React.FC<PropsType> = (props) => {

    let sidebar = props.state.sideBar.items

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar items={sidebar}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() =>
                        <Profile state={props.state}
                                 dispatch={props.dispatch}
                        />}/>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer state={props.state}
                                          dispatch={props.dispatch}
                        />}/>

                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
