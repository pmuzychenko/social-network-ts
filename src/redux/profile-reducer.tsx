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

export const setUserProfile = (profile: any) => {
    return {
        type: "SET-USER-PROFILE",
        profile: profile
    } as const
}


export type ProfileActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostTextAC> | ReturnType<typeof setUserProfile>

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
}

let initialState: InitialStateType = {
    messageForNewPost: '',
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 15},
        {id: v1(), message: "It's my new post", likesCount: 20}
    ],
    profile: null
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
        default:
            return state
    }
}