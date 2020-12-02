import React from "react";
import styles from "./Post.module.css";


type PropsType = {
    message: string
    likesCount: number
}

export const Post:React.FC<PropsType> = (props) => {
    return (
        <div className={styles.item}>
            <img src='https://scontent.fdnk3-2.fna.fbcdn.net/v/t1.0-9/p960x960/70912169_3605326306160106_9176558413746798592_o.jpg?_nc_cat=103&ccb=2&_nc_sid=85a577&_nc_ohc=O-l9uQbLtaAAX9HVT3Q&_nc_ht=scontent.fdnk3-2.fna&tp=6&oh=a37e6a0f34bcd253441656dc576f6884&oe=5FDCB3E7' alt=""/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}