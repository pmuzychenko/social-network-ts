import {combineReducers, createStore, Store} from "redux";
import {ProfileActionsTypes, profileReducer} from "./profile-reducer";
import {DialogsActionsTypes, dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

type actionTypes = ProfileActionsTypes | DialogsActionsTypes
export type StoreType = Store<AppStateType, actionTypes>
export const reduxStore: StoreType = createStore(rootReducer)