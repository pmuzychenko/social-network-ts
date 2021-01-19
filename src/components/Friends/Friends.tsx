import React from 'react';
import {Friend, FriendType} from "./Friend/Friend";
import styles from './Friends.module.css'

type PropsType = {
    friends: Array<FriendType>
}

export const Friends = (props: PropsType) => {

    return  <div className={styles.wrapper}>
        <h2>Friends</h2>
        <div>
            {props.friends.map(friend => {
            return  <Friend key={friend.id} id={friend.id} src={friend.src} name={friend.name}/>
        })}
        </div>
    </div>
}
