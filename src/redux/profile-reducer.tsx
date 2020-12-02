import {ActionsTypes, PostType, ProfilePageType, RootStateType} from "./state";
import {v1} from "uuid";

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

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostType = {
                id: v1(),
                message: state.messageForNewPost,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.messageForNewPost = ''
            return state;
        case 'CHANGE-NEW-POST-TEXT':
            state.messageForNewPost = action.newPostText
            return state
        default:
            return state
    }
}