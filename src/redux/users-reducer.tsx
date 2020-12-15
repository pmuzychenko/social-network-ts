import {v1} from "uuid";


// type LocationType = {
//     city: string
//     country: string
// }

type PhotoType = {
    small: string
    large: string
}

export type UserType = {
    id: number
    photos: PhotoType
    followed: boolean
    name: string
    status: string
  //  location: LocationType

}

type InitialStateType = {
    users: Array<UserType>
}

let initialState: InitialStateType = {
    users: [
        // {
        //     id: v1(),
        //     photoUrl: 'https://superkarate.ru/uploads/posts/2017-12/1512292923_zhorzh.jpeg',
        //     followed: false,
        //     fullName: 'Dmitriy',
        //     status: "I'm a boss",
        //     location:
        //         {
        //             city: 'Minsk',
        //             country: 'Belarus'
        //         }
        // },
        // {
        //     id: v1(),
        //     photoUrl: 'https://superkarate.ru/uploads/posts/2017-12/1512292923_zhorzh.jpeg',
        //     followed: false,
        //     fullName: 'Andrew',
        //     status: "I'm a boss",
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: v1(),
        //     photoUrl: 'https://superkarate.ru/uploads/posts/2017-12/1512292923_zhorzh.jpeg',
        //     followed: false,
        //     fullName: 'Sergey',
        //     status: "I'm a boss",
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: v1(),
        //     photoUrl: 'https://superkarate.ru/uploads/posts/2017-12/1512292923_zhorzh.jpeg',
        //     followed: false,
        //     fullName: 'Sasha',
        //     status: "I'm a boss",
        //     location: {city: 'Kiev', country: 'Ukraine'}
        // }
    ] as Array<UserType>
}
export type UsersActionsTypes =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
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