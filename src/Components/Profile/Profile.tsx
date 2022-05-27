import fon from "../../assets/images/fon.jpg";
import React from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = () => {
    return (
        <div className={classes.app_content}>
            <div>
                <img src={fon} alt="" className={classes.fon}/>
            </div>
            <div>ava + description</div>
            <MyPosts />
        </div>
    )
}