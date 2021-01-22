import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

export type AuthStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state: AuthStateType = initialState, action: AuthActionsTypes): AuthStateType => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}

export type AuthActionsTypes =
    ReturnType<typeof setAuthUserData>

const setAuthUserData = (id: number, email: string, login: string) => {
    return {
        type: SET_USER_DATA,
        data: {id, email, login}
    } as const
}

export const getAuthUserDataTC = () => {
    return (dispatch: Dispatch<AuthActionsTypes>) => {
        authAPI.auth().then(data => {
            let {id, email, login} = data.data
            dispatch(setAuthUserData(id, email, login))
        })
    }
}

