import React from "react";
import {changeNewPostTextAC, addPostAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";


export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {reduxStore => {
                let state = reduxStore.getState().profilePage
                let addPost = () => {
                    reduxStore.dispatch(addPostAC())
                }
                let onPostChange = (text: string) => {
                    reduxStore.dispatch(changeNewPostTextAC(text))
                }
                return <MyPosts updateNewPostText={onPostChange}
                                messageForNewPost={state.messageForNewPost}
                                posts={state.posts}
                                addNewPost={addPost}
                />
            }}
        </StoreContext.Consumer>
    )
}