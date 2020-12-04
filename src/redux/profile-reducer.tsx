import {v1} from "uuid";
// import {ActionsTypes} from "./state";

export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}

export const changeNewPostTextAC = (newPostText: string) => {
    return {
        type: "CHANGE-NEW-POST-TEXT",
        newPostText: newPostText
    } as const
}

export type ProfileActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewPostTextAC>

type PostType = {
    id: string
    message: string
    likesCount: number
}

type InitialStateType = {
    messageForNewPost: string
    posts: Array<PostType>
}

let initialState: InitialStateType = {
    messageForNewPost: '',
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 15},
        {id: v1(), message: "It's my new post", likesCount: 20}
    ]
}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsTypes):InitialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostType = {
                id: v1(),
                message: state.messageForNewPost,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts,newPost],
                messageForNewPost: ''
            }
        case 'CHANGE-NEW-POST-TEXT':
            return {
                ...state,
                messageForNewPost: action.newPostText
            }
        default:
            return state
    }
}