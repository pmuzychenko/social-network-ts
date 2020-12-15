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

export class Users extends React.Component<UsersPropsType>{
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items);
            })
        }
    }

    render() {
        return <div>
            <button onClick={this.getUsers}>Get users</button>
            {
                this.props.users.map(user => <div key={user.id}>
                <span>
                    <div className={styles.userPhoto}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {user.followed ?  <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                            :  <button onClick={() => this.props.follow(user.id)}>Follow</button>}
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
}
