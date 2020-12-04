import React from "react";
import {changeNewPostTextAC, addPostAC, ProfileActionsTypes} from "../../../redux/profile-reducer";
import {DialogsActionsTypes} from "../../../redux/dialogs-reducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";


type PropsType = {
    state: AppStateType
    dispatch: (action: DialogsActionsTypes | ProfileActionsTypes) => void
}


export const MyPostsContainer: React.FC<PropsType> = (props) => {
    let posts = props.state.profilePage.posts
    let messageForNewPost = props.state.profilePage.messageForNewPost

    let onPostChange = (text: string) => {
        props.dispatch( changeNewPostTextAC(text))
    }

    let addPost = () => {
        props.dispatch(addPostAC())
    }


    return (<MyPosts updateNewPostText={onPostChange}
                     messageForNewPost={messageForNewPost}
                     posts={posts}
                     addNewPost={addPost}
    />)
}