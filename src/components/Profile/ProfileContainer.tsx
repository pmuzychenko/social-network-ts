import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {Preloader} from "../common/Preloader/Preloader";


export type MapStateToPropsType = {
    profile: ProfileType | null
}
export type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

class ProfileContainer extends React.Component<MapStateToPropsType & MapDispatchPropsType > {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {

        return (
                this.props.profile ? <Profile profile={this.props.profile}/> : <Preloader/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer)