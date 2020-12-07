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
            name: "Igor",
            src: "https://scontent.fdnk3-2.fna.fbcdn.net/v/t1.0-9/123247026_349585443005168_8907102859188090507_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=Gswo8LNWSpYAX_RHU4K&_nc_ht=scontent.fdnk3-2.fna&oh=9eb150e7e8d6707fe81fb0b8f0fbf49e&oe=5FF28D33"
        },
        {
            id: v1(),
            name: "Artem",
            src: "https://scontent.fdnk3-1.fna.fbcdn.net/v/t1.0-9/89286146_3835154913162140_56741049170657280_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=N1sJL9uKV5EAX9V-uEs&_nc_ht=scontent.fdnk3-1.fna&oh=099a265cf85d7b3a46588cd7ac2f6375&oe=5FF44EB4"
        },
        {
            id: v1(),
            name: "Igor",
            src: "https://scontent.fdnk3-1.fna.fbcdn.net/v/t1.0-9/87574048_2778946055725004_7637608791923490816_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=UweTRGVa4pkAX9aofu2&_nc_oc=AQnnY17bzQks6A4bUpMVuTCr-eh7aruwPSxJ_t1b1XQALe9UIP7m92Fgz7cs45OJD7Y&_nc_ht=scontent.fdnk3-1.fna&oh=6b4b421c412bbb00eac05e5ea9c08e05&oe=5FF1D466"
        },
        {
            id: v1(),
            name: "Sasha",
            src: "https://scontent.fdnk3-2.fna.fbcdn.net/v/t1.0-9/82204675_1078982522445524_1875010334331240448_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=nzfn9zW7LZAAX-gtrwH&_nc_ht=scontent.fdnk3-2.fna&oh=c3c1b4a8385d70bf09169d5de9d5cbbf&oe=5FF53D1A"
        },
        {
            id: v1(),
            name: "Dima",
            src: "https://scontent.fdnk3-1.fna.fbcdn.net/v/t1.0-9/83886774_1258379531024452_7814690847588352000_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=ojZ7ieyTA4AAX-7JUmS&_nc_ht=scontent.fdnk3-1.fna&oh=30c0f279d202739ee1d754076a4752ea&oe=5FF4FC0A"
        }
    ],
    newDialogMessage: '',
    messages: [
        {id: v1(), message: 'Hi,Igor!'},
        {id: v1(), message: 'Glad to see you, Artem!'},
        {id: v1(), message: 'Igor, do you want to chat?'},
        {id: v1(), message: 'Sasha, are you free now?'},
        {id: v1(), message: 'Dima, good joke'}
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