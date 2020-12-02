import {ActionsTypes, RootStateType, DialogType, DialogsPageType} from "./state";
import {v1} from "uuid";

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

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                id: v1(), message: state.newDialogMessage
            }
            state.messages.push(newMessage)
            state.newDialogMessage = ''
          return state
        case 'CHANGE-NEW-MESSAGE-TEXT':
            state.newDialogMessage = action.newMessageText
          return state
        default:
            return state
    }
}