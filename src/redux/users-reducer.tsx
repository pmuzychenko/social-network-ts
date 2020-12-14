import {v1} from "uuid";


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
    users: [] as Array<UserType>
        // {id: v1(), followed: false, fullName: 'Dmitriy', status: "I'm a boss", location: {city: 'Minsk', country: 'Belarus'}},
        // {id: v1(), followed: false, fullName: 'Andrew', status: "I'm a boss", location: {city: 'Minsk', country: 'Belarus'}},
        // {id: v1(), followed: false, fullName: 'Sergey', status: "I'm a boss", location: {city: 'Moscow', country: 'Russia'}},
        // {id: v1(), followed: true, fullName: 'Sasha', status: "I'm a boss", location: {city: 'Kiev', country: 'Ukraine'}}
}
export type UsersActionsTypes = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>

const followAC = (userId: string) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}
const unFollowAC = (userId: string) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}
const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case 'SET_USERS':
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}