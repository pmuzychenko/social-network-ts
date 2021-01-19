import React from "react";
import styles from "./Post.module.css";
import myProfile from "../../../../assets/images/myProfile.jpg"

type PropsType = {
    message: string
    likesCount: number
}

export const Post:React.FC<PropsType> = (props) => {
    return (
        <div className={styles.item}>
            <img src={myProfile} alt=""/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}