import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import { ProfileType } from "../../redux/profile-reducer";

type ProfileProps = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
}

export const Profile: React.FC<ProfileProps> = (props) => {
    console.log(props.profile)
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateUserStatus}/>
            <MyPostsContainer/>
        </div>
    )
}