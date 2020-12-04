import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import styles from "./MyPosts.module.css";
import {changeNewPostTextAC, addPostAC, ProfileActionsTypes} from "../../../redux/profile-reducer";
import {DialogsActionsTypes} from "../../../redux/dialogs-reducer";

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


export const MyPosts: React.FC<PropsType> = (props) => {

    let changeTextForNewMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch( changeNewPostTextAC(e.currentTarget.value))
    }

    let addPostHandler = () => {
        props.dispatch(addPostAC())
    }

    let postsElements = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.messageForNewPost}
                              onChange={changeTextForNewMessage}>
                    </textarea>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}