import React from "react";
import styles from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://lp-cms-production.imgix.net/2020-07/AlamyRF_K6RJXT.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=75&dpr=1' alt=""/>
            </div>
            <div className={styles.descriptionBlock}>
                 ava + description
            </div>
        </div>

    )
}