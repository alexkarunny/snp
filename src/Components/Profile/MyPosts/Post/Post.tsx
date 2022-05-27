import React from "react";
import classes from './Post.module.css'
import avatar from '../../../../assets/images/avatar.png'

export const Post = () => {
    return (
        <div className={classes.post}>
            <img src={avatar} alt="" className={classes.avatar}/>
              Post
        </div>
    )
}