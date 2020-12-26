import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import { ProfileType } from "../../redux/profile-reducer";

type ProfileProps = {
    profile: ProfileType
}

export const Profile: React.FC<ProfileProps> = (props) => {
    console.log(props.profile)
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}