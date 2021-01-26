import React from "react";
import styles from "./ProfileInfo.module.css";
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";


type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}
export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    return (
        <div>
            <div>
                <img src='https://lp-cms-production.imgix.net/2020-07/AlamyRF_K6RJXT.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=75&dpr=1' alt=""/>
            </div>
            <div className={styles.descriptionBlock}>
              <div>ava + description</div>
                <img src={props.profile.photos.large ? props.profile.photos.large : ''} alt="avatar"/>
            </div>

            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

            <div>{props.profile.fullName}</div>
            <div>{props.profile.aboutMe}</div>
            <div>{props.profile.userId}</div>
        </div>

    )
}