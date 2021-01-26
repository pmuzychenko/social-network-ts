import React from "react";
import {RouteComponentProps, withRouter} from 'react-router'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfileTC, getUserStatusTC, ProfileType, updateUserStatusTC} from "../../redux/profile-reducer";
import {Preloader} from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

export type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
}
export type MapDispatchPropsType = {
    getUserProfileTC: (userId: string) => void
    getUserStatusTC: (userId: string) => void
    updateUserStatusTC: (status: string) => void
    isAuth: boolean
}
type OwnPropsType = MapStateToPropsType & MapDispatchPropsType
type PropsType = OwnPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfileTC(userId)
        this.props.getUserStatusTC(userId)
    }

    render() {
        return (
            this.props.profile
                ? <Profile profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatusTC}/>
                : <Preloader/>
        )
    }
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC, getUserStatusTC,updateUserStatusTC}),
    withRouter,
)(ProfileContainer)
