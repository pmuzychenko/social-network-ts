import {v1} from "uuid";
import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

type PostType = {
    id: string
    message: string
    likesCount: number
}

export type ProfileType = {
    aboutMe: string | null,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null,
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: null | string,
    fullName: string,
    userId: number,
    photos: {
        small: string | null,
        large: string | null,
    }
}


type InitialStateType = {
    messageForNewPost: string
    posts: Array<PostType>
    profile: ProfileType | null
    status: string
}

let initialState: InitialStateType = {
    messageForNewPost: '',
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 15},
        {id: v1(), message: "It's my new post", likesCount: 20}
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostType = {
                id: v1(),
                message: state.messageForNewPost,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                messageForNewPost: ''
            }
        case 'CHANGE-NEW-POST-TEXT':
            return {
                ...state,
                messageForNewPost: action.newPostText
            }
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'SET-USER-STATUS':
            return {
                ...state,
                status: action.status
            }

        default:
            return state
    }
}

export type ProfileActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostTextAC> | ReturnType<typeof setUserProfile>
| ReturnType<typeof setStatusAC>
export const addPostAC = () => ({type: "ADD-POST"} as const)
export const setStatusAC = (status:string) => ({type: "SET-USER-STATUS", status} as const)



export const changeNewPostTextAC = (newPostText: string) => ({
    type: "CHANGE-NEW-POST-TEXT",
    newPostText: newPostText
} as const)

const setUserProfile = (profile: ProfileType) => ({type: "SET-USER-PROFILE", profile: profile} as const)

export const getUserProfileTC = (userId: string) => {
    return (dispatch: Dispatch<ProfileActionsTypes>) => {
        usersAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}
export const getUserStatusTC = (userId: string) => {
    return (dispatch: Dispatch<ProfileActionsTypes>) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatusAC(data))
        })
    }
}

export const updateUserStatusTC = (status: string) => {
    return (dispatch: Dispatch<ProfileActionsTypes>) => {
        profileAPI.updateStatus(status).then(data => {
            if(data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
    }
}

