import React from 'react'
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    followingInProgress: Array<number>
    toogleFollowingProgress: (isFetching: boolean, userId: number) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const onUnfollowClickHandler = (id: number) => {
        props.toogleFollowingProgress(true, id)
        usersAPI.unfollow(id)
            .then(resultCode => {
                if (resultCode === 0) {
                    props.unfollow(id)
                    props.toogleFollowingProgress(false, id)
                }
            })
    }

    const onFollowClickHandler = (id: number) => {
        props.toogleFollowingProgress(true, id)
        usersAPI.follow(id)
            .then(resultCode => {
                if (resultCode === 0) {
                    props.follow(id)
                    props.toogleFollowingProgress(false, id)
                }
            })
    }

    return <div>
        <div>
            {pages.map((p, index) => {

                return <span key={index} className={props.currentPage === p ? styles.selectedPages : ''}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div className={styles.userPhoto}>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt={'avatar'}/>
                        </NavLink>

                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                onUnfollowClickHandler(user.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                onFollowClickHandler(user.id)
                            }}>Follow</button>}
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