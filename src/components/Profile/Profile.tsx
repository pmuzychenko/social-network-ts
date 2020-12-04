import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
// import {ActionsTypes} from "../../redux/state";
import {DialogsActionsTypes} from "../../redux/dialogs-reducer";
import {ProfileActionsTypes} from "../../redux/profile-reducer";


type PostsType = {
    id: string
    message: string
    likesCount: number
}

type PropsType = {
    messageForNewPost: string
    posts: Array<PostsType>
    // dispatch: (action: ActionsTypes) => void
    dispatch: (action: DialogsActionsTypes | ProfileActionsTypes) => void
}


export const Profile: React.FC<PropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     dispatch={props.dispatch}
                     messageForNewPost={props.messageForNewPost}
            />
        </div>
    )
}