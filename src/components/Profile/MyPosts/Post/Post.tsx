import React from "react";
import styles from "./Post.module.css";


type PropsType = {
    message: string
    likesCount: number
}

export const Post:React.FC<PropsType> = (props) => {
    return (
        <div className={styles.item}>
            <img src='https://scontent.fdnk3-2.fna.fbcdn.net/v/t1.0-9/70912169_3605326306160106_9176558413746798592_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=T73tteaRqo0AX-MQf2G&_nc_ht=scontent.fdnk3-2.fna&oh=ce917134b16ec1fa2d053e024b970029&oe=602C0652' alt=""/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}