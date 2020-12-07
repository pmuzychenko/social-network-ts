import {NavLink} from "react-router-dom";
import React from "react";
import styles from './Friend.module.css'

export type FriendType = {
    id: string
    src: string
    name: string
}
export const Friend = (props: FriendType) => {
    return (
        <div className={styles.block}>
            <NavLink to={'/dialogs/' + props.id}>
                <img
                    src={props.src}
                    alt="avatar"/>
                {props.name}
            </NavLink>
        </div>
    )
}