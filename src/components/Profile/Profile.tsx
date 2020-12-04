import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {DialogsActionsTypes} from "../../redux/dialogs-reducer";
import {ProfileActionsTypes} from "../../redux/profile-reducer";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {AppStateType} from "../../redux/redux-store";


type PropsType = {
    state: AppStateType
    dispatch: (action: DialogsActionsTypes | ProfileActionsTypes) => void
}

export const Profile: React.FC<PropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}