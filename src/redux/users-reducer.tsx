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

}

type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let initialState: InitialStateType = {
    users: [] as Array<UserType>,
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false

}
export type UsersActionsTypes =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toogleIsFetching>

export const follow = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}
export const unfollow = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage
    } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        totalUsersCount
    } as const
}
export const toogleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOOGLE_IS_FETCHING',
        isFetching
    } as const
}


export const usersReducer = (state: InitialStateType = initialState, action: UsersActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        }

        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        }

        case 'SET_USERS': {
            return {
                ...state,
                users: action.users
            }
        }

        case 'SET_CURRENT_PAGE': {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case 'SET_TOTAL_USERS_COUNT': {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }

        case 'TOOGLE_IS_FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state
    }
}