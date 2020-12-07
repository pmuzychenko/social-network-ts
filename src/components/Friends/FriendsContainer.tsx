import React from 'react';
import {Friend} from "./Friend/Friend";
import styles from './Friends.module.css'
import StoreContext from "../../StoreContext";

export const FriendsContainer= () => {

    return (
        <StoreContext.Consumer>
            {reduxStore => {
                let friends = reduxStore.getState().sideBar.map(friend => {
                    return <Friend id={friend.id} src={friend.src} name={friend.name}/>
                })

                return <div className={styles.wrapper}>
                    <h2>Friends</h2>
                    <div>
                        {friends}
                    </div>
                </div>
            }}
        </StoreContext.Consumer>
    )
}
