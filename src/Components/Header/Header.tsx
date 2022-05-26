import logo from "../../assets/images/logo.png";
import React from "react";
import classes from './Header.module.css'


export const Header = () => {
    return (
        <header className={classes.app_header}>
            <img src={logo} alt="" className={classes.logo}/>
        </header>
    )
}