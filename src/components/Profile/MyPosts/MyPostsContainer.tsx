import React from "react";
import {changeNewPostTextAC, addPostAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
    }
}
let MapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(changeNewPostTextAC(text))
        },
        addNewPost: () => {
            dispatch(addPostAC())
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, MapDispatchToProps)(MyPosts)