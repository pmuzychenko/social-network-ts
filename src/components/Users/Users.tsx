import React from "react";
import {UserType} from "../../redux/users-reducer";
import styles from "./Users.module.css"
import {v1} from "uuid";
import axios from "axios";
import userPhoto from "../../assets/images/user.png"
import {log} from "util";

type UsersPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    users: Array<UserType>
}

export const Users: React.FC<UsersPropsType> = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        })
        // props.setUsers([
        //     {
        //         id: v1(),
        //         photoUrl: 'https://superkarate.ru/uploads/posts/2017-12/1512292923_zhorzh.jpeg',
        //         followed: false,
        //         fullName: 'Dmitriy',
        //         status: "I'm a boss",
        //         location:
        //             {
        //                 city: 'Minsk',
        //                 country: 'Belarus'
        //             }
        //     },
        //     {
        //         id: v1(),
        //         photoUrl: 'https://superkarate.ru/uploads/posts/2017-12/1512292923_zhorzh.jpeg',
        //         followed: false,
        //         fullName: 'Andrew',
        //         status: "I'm a boss",
        //         location: {city: 'Minsk', country: 'Belarus'}
        //     },
        //     {
        //         id: v1(),
        //         photoUrl: 'https://superkarate.ru/uploads/posts/2017-12/1512292923_zhorzh.jpeg',
        //         followed: false,
        //         fullName: 'Sergey',
        //         status: "I'm a boss",
        //         location: {city: 'Moscow', country: 'Russia'}
        //     },
        //     {
        //         id: v1(),
        //         photoUrl: 'https://superkarate.ru/uploads/posts/2017-12/1512292923_zhorzh.jpeg',
        //         followed: false,
        //         fullName: 'Sasha',
        //         status: "I'm a boss",
        //         location: {city: 'Kiev', country: 'Ukraine'}
        //     }
        // ])
    }

    return <div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div className={styles.userPhoto}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {user.followed ?  <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                            :  <button onClick={() => props.follow(user.id)}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}