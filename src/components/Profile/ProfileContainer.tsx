import React from "react";
import {RouteComponentProps, withRouter} from 'react-router'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfileTC, ProfileType} from "../../redux/profile-reducer";
import {Preloader} from "../common/Preloader/Preloader";

type PathParamsType = {
    userId: string
}

export type MapStateToPropsType = {
    profile: ProfileType | null
}
export type MapDispatchPropsType = {
    getUserProfileTC: (userId: string) => void
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
    }

    render() {

        return (
            this.props.profile ? <Profile profile={this.props.profile}/> : <Preloader/>
        )
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {getUserProfileTC})(WithUrlDataContainerComponent)