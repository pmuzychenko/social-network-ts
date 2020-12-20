import React from "react";
import {UserType} from "../../redux/users-reducer";
import styles from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../assets/images/user.png"

type UsersPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export class Users extends React.Component<UsersPropsType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }
    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            <div>
                {pages.map( (p,index) => {

                  return <span key={index} className={this.props.currentPage === p ? styles.selectedPages : ''}
                               onClick={ () => {this.onPageChanged(p)}} >{p}</span>
                })}
            </div>
            {
                this.props.users.map(user => <div key={user.id}>
                <span>
                    <div className={styles.userPhoto}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt={'avatar'}/>
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
