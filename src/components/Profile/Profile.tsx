import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {DialogsActionsTypes} from "../../redux/dialogs-reducer";
import {ProfileActionsTypes} from "../../redux/profile-reducer";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type PostsType = {
    id: string
    message: string
    likesCount: number
}

type PropsType = {
    messageForNewPost: string
    posts: Array<PostsType>
    dispatch: (action: DialogsActionsTypes | ProfileActionsTypes) => void
}

export const Profile: React.FC<PropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer posts={props.posts}
                              dispatch={props.dispatch}
                              messageForNewPost={props.messageForNewPost} />
        </div>
    )
}