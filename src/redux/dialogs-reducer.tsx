import {v1} from "uuid";
// import {addPostAC, changeNewPostTextAC} from "./profile-reducer";
// import {ActionsTypes} from "./state";

export const addMessageAC = () => {
    return {
        type: "ADD-MESSAGE"
    } as const
}
export const changeNewMessageAC = (newMessageText: string) => {
    return {
        type: "CHANGE-NEW-MESSAGE-TEXT",
        newMessageText: newMessageText
    } as const
}

export type DialogsActionsTypes = ReturnType<typeof addMessageAC> | ReturnType<typeof changeNewMessageAC>

type MessageType = {
    id: string
    message: string
}

type DialogType = {
    name: string
    id: string
}

type InitialStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newDialogMessage: string
}

let initialState: InitialStateType = {
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
}

export const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                id: v1(), message: state.newDialogMessage
            }
          return {
                ...state,
              messages: [...state.messages, newMessage],
              newDialogMessage: ''
          }
        case 'CHANGE-NEW-MESSAGE-TEXT':
            return {
                ...state,
                newDialogMessage: action.newMessageText
            }
        default:
            return state
    }
}