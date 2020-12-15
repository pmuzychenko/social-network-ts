import {combineReducers, createStore, Store} from "redux";
import {ProfileActionsTypes, profileReducer} from "./profile-reducer";
import {DialogsActionsTypes, dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {UsersActionsTypes, usersReducer} from "./users-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

type actionTypes = ProfileActionsTypes | DialogsActionsTypes | UsersActionsTypes
export type StoreType = Store<AppStateType, actionTypes>
export const reduxStore: StoreType = createStore(rootReducer)