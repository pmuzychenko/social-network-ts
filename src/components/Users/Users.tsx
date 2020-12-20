import React from 'react'
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber:number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
}

export const Users: React.FC<UsersPropsType>= (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
return <div>
    <div>
        {pages.map( (p,index) => {

            return <span key={index} className={props.currentPage === p ? styles.selectedPages : ''}
                         onClick={ () => {props.onPageChanged(p)}} >{p}</span>
        })}
    </div>
    {
        props.users.map(user => <div key={user.id}>
                <span>
                    <div className={styles.userPhoto}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt={'avatar'}/>
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