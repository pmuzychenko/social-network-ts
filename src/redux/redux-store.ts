import {combineReducers, createStore, Store} from "redux";
import {ProfileActionsTypes, profileReducer} from "./profile-reducer";
import {DialogsActionsTypes, dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {UsersActionsTypes, usersReducer} from "./users-reducer";
import {AuthActionsTypes, authReducer} from "./auth-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

type actionTypes = ProfileActionsTypes | DialogsActionsTypes | UsersActionsTypes | AuthActionsTypes
export type StoreType = Store<AppStateType, actionTypes>
export const reduxStore: StoreType = createStore(rootReducer)