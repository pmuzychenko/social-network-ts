import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, setСurrentPageAC, unfollowAC, UserType, setTotalUsersCountAC} from "../../redux/users-reducer";
import { Users } from "./Users";

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        setCurrentPage: (currentPage: number) => {
            dispatch(setСurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}
 export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)