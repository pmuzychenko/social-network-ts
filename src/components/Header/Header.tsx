import React from "react";
import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";


type HeaderPropsType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={styles.header}>
            <img src='https://cdn.iconscout.com/icon/free/png-256/react-1543566-1306069.png' alt="icon"/>
            <div className={styles.loginBlock}>
                {props.isAuth ? props.login : <NavLink to='/login'>Log in</NavLink>}
            </div>
        </header>
    )
}