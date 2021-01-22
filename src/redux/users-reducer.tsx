import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {AppStateType} from "./redux-store";

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
    followingInProgress: Array<number>
}

let initialState: InitialStateType = {
    users: [] as Array<UserType>,
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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

        case 'TOOGLE_IS_FOLLOWING_IN_PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state
    }
}

export type UsersActionsTypes =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toogleIsFetching>
    | ReturnType<typeof toogleFollowingProgress>

export const followSuccess = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}
export const unfollowSuccess = (userId: number) => {
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
export const toogleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOOGLE_IS_FOLLOWING_IN_PROGRESS',
        isFetching,
        userId
    } as const
}

export const getUsersTC = (currentPage: number,pageSize: number) => {
    return (dispatch: Dispatch<UsersActionsTypes>) => {
        dispatch(toogleIsFetching(true))
        usersAPI.getUsers(currentPage,pageSize).then(data => {
            dispatch(toogleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const changePageTC = (pageNumber: number,pageSize: number) => {
    return (dispatch: Dispatch<UsersActionsTypes>) => {
        dispatch(toogleIsFetching(true))
        dispatch(setCurrentPage(pageNumber))
        usersAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(toogleIsFetching(false))
            dispatch(setUsers(data.items))
        })
    }
}

export const followTC = (id: number) => {
    return (dispatch: Dispatch<UsersActionsTypes>) => {
        dispatch(toogleFollowingProgress(true, id))
        usersAPI.follow(id)
            .then(resultCode => {
                if (resultCode === 0) {
                    dispatch(followSuccess(id))
                    dispatch(toogleFollowingProgress(false, id))
                }
            })
    }
}

export const unfollowTC = (id: number) => {
    return (dispatch: Dispatch<UsersActionsTypes>) => {
        dispatch(toogleFollowingProgress(true, id))
        usersAPI.unfollow(id)
            .then(resultCode => {
                if (resultCode === 0) {
                    dispatch(unfollowSuccess(id))
                    dispatch(toogleFollowingProgress(false, id))
                }
            })
    }
}
