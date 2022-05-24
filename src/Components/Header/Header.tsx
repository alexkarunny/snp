import logo from "../../assets/images/logo.png";
import React from "react";


export const Header = () => {
    return (
        <header className={'app_header'}>
            <img src={logo} alt="" className={'logo'}/>
        </header>
    )
}