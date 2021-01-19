import {v1} from "uuid";
import {FriendType} from "../components/Friends/Friend/Friend";
import Ross from "../assets/images/Ross.jpg"
import Monica from "../assets/images/Monica.jpg"
import Rachel from "../assets/images/Rachel.jpg"
import Fibby from "../assets/images/Phibby.jpg"
import Joey from "../assets/images/Joey.jpg"

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

// type DialogType = {
//     name: string
//     id: string
// }

type InitialStateType = {
    dialogs: Array<FriendType>
    messages: Array<MessageType>
    newDialogMessage: string
}

let initialState: InitialStateType = {
    dialogs: [
        {
            id: v1(),
            name: "Monica",
            src: Monica
        },
        {
            id: v1(),
            name: "Ross",
            src: Ross
        },
        {
            id: v1(),
            name: "Rachel",
            src: Rachel
        },
        {
            id: v1(),
            name: "Fibby",
            src: Fibby
        },
        {
            id: v1(),
            name: "Joey",
            src: Joey
        }
    ],
    newDialogMessage: '',
    messages: [
        {id: v1(), message: 'Hi,Monica!'},
        {id: v1(), message: 'Glad to see you, Ross!'},
        {id: v1(), message: 'Rachel, do you want to chat?'},
        {id: v1(), message: 'Fibby, are you free now?'},
        {id: v1(), message: 'Joey, good joke'}
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