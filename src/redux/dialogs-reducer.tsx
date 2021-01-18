import {v1} from "uuid";
import {FriendType} from "../components/Friends/Friend/Friend";

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
            src: "https://i.pinimg.com/originals/86/ef/f9/86eff988922f15e294bd794eb949aba5.jpg"
        },
        {
            id: v1(),
            name: "Ross",
            src: "https://i.pinimg.com/originals/58/24/86/582486eb19b1088bcd33e3efc4189d68.jpg"
        },
        {
            id: v1(),
            name: "Rachel",
            src: "https://www.denofgeek.com/wp-content/uploads/2020/07/racmain.jpg?resize=768%2C432"
        },
        {
            id: v1(),
            name: "Fibby",
            src: "https://hips.hearstapps.com/cos.h-cdn.co/assets/16/31/640x426/gallery-1470328993-phoebe.jpg?resize=480:*"
        },
        {
            id: v1(),
            name: "Joey",
            src: "https://static.wikia.nocookie.net/friends/images/f/f5/JoeyTribbiani.jpg/revision/latest?cb=20180424154245"
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