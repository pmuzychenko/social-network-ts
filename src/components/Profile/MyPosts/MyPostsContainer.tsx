import React from "react";
import {changeNewPostTextAC, addPostAC, ProfileActionsTypes} from "../../../redux/profile-reducer";
import {DialogsActionsTypes} from "../../../redux/dialogs-reducer";
import {MyPosts} from "./MyPosts";



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


export const MyPostsContainer: React.FC<PropsType> = (props) => {

    let onPostChange = (text: string) => {
        props.dispatch( changeNewPostTextAC(text))
    }

    let addPost = () => {
        props.dispatch(addPostAC())
    }


    return (<MyPosts updateNewPostText={onPostChange}
                     messageForNewPost={props.messageForNewPost}
                     posts={props.posts}
                     addNewPost={addPost}
    />)
}