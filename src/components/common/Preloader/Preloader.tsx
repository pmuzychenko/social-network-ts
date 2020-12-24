import styles from "../../Users/Users.module.css";
import preloader from "../../../assets/images/preloader.gif";
import React from "react";

export const Preloader = () => {
    return <div className={styles.userPreloader}>
        <img src={preloader} alt={'preloader'}/>
    </div>
}


