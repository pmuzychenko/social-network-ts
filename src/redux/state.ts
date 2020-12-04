import {v1} from "uuid";
import {addPostAC, changeNewPostTextAC, profileReducer} from "./profile-reducer";
import {addMessageAC, changeNewMessageAC, dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type SidebarType = {
    items: Array<string>
}

export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type DialogType = {
    name: string
    id: string
}

type MessageType = {
    id: string
    message: string
}

export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostType>
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newDialogMessage: string
}


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}


export type StoreType = {
    _state: RootStateType
    _callSubscriber: (store: StoreType) => void

    getState: () => RootStateType
    subscribe: (observer: (store: StoreType) => void) => void

    dispatch: (action: ActionsTypes) => void

}

type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewPostTextAC> |
    ReturnType<typeof addMessageAC> | ReturnType<typeof changeNewMessageAC>


export const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: '',
            posts: [
                {id: v1(), message: 'Hi, how are you?', likesCount: 15},
                {id: v1(), message: "It's my new post", likesCount: 20}
            ]
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: 'Dimych'},
                {id: v1(), name: 'Andrew'},
                {id: v1(), name: 'Sveta'},
                {id: v1(), name: 'Sasha'},
                {id: v1(), name: 'Victor'},
                {id: v1(), name: 'Valera'}
            ],
            newDialogMessage: '',
            messages: [
                {id: v1(), message: 'Hi,Dimych!'},
                {id: v1(), message: 'Glad to see you, Andrew!'},
                {id: v1(), message: 'Sveta, do you want to chat?'},
                {id: v1(), message: 'Sasha, are you free now?'},
                {id: v1(), message: 'Victor, good joke'},
                {id: v1(), message: 'Valera, thanks a lot for your help!'}
            ]
        },
        sidebar: {
            items: ['Profile', 'Messages', 'News', 'Music', 'Settings']
        }
    },
    _callSubscriber() {
        console.log('State was changed!')
    },
    subscribe(observer: (store: StoreType) => void) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action: any ) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(store)
    }
}

