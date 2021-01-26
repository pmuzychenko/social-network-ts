import React from "react"
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    UserType,
    getUsersTC, changePageTC, followTC, unfollowTC
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    getUsersTC: (currentPage: number, pageSize: number) => void
    changePageTC: (pageNumber: number, pageSize: number) => void
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void

}

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changePageTC(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.followTC}
                   unfollow={this.props.unfollowTC}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose<React.ComponentType>(withAuthRedirect,connect(mapStateToProps,
    {getUsersTC, changePageTC, followTC, unfollowTC}))(UsersContainer)