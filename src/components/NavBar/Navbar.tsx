import React from "react";
import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


type PropsType = {
    items: Array<string>
}


export const Navbar: React.FC<PropsType> = (props) => {
    return (
        <nav className={styles.nav}>

            <div className={styles.item}>
                <NavLink to='/profile' activeClassName={styles.activeLink}>{props.items[0]}</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/dialogs' activeClassName={styles.activeLink}>{props.items[1]}</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/news' activeClassName={styles.activeLink}>{props.items[2]}</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/music' activeClassName={styles.activeLink}>{props.items[3]}</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/settings' activeClassName={styles.activeLink}>{props.items[4]}</NavLink>
            </div>
        </nav>
    )
}