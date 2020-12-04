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
    updateNewPostText: (text: string) => void
    addNewPost: () => void
}


export const MyPosts: React.FC<PropsType> = (props) => {

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //props.dispatch( changeNewPostTextAC(e.currentTarget.value))
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }

    let onAddPost = () => {
        // props.dispatch(addPostAC())
        props.addNewPost()
    }

    let postsElements = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.messageForNewPost}
                              onChange={onPostChange}>
                    </textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}