import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import { Users } from "./Users";

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
    }
}
 export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)