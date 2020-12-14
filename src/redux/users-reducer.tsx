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

export type ProfileActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewPostTextAC>

type LocationType = {
    city: string
    country: string
}

type UserType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType

}

type InitialStateType = {
    users: Array<UserType>
}

let initialState: InitialStateType = {
    users: [
        {id: v1(), followed: false, fullName: 'Dmitriy', status: "I'm a boss", location: {city: 'Minsk', country: 'Belarus'}},
        {id: v1(), followed: false, fullName: 'Andrew', status: "I'm a boss", location: {city: 'Minsk', country: 'Belarus'}},
        {id: v1(), followed: false, fullName: 'Sergey', status: "I'm a boss", location: {city: 'Moscow', country: 'Russia'}},
        {id: v1(), followed: true, fullName: 'Sasha', status: "I'm a boss", location: {city: 'Kiev', country: 'Ukraine'}}
    ]
}

export const usersReducer = (state: InitialStateType = initialState, action: ProfileActionsTypes): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}