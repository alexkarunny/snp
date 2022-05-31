import React from "react";
import classes from './Post.module.css'
import avatar from '../../../../assets/images/avatar.png'

type PropsType = {
    text: string
    like: number
}

export const Post = (props: PropsType) => {
    return (
        <div className={classes.post}>
            <div><img src={avatar} alt="" className={classes.avatar}/>
                {props.text}</div>
            <span>{(props.like !== 1) ? `${props.like} likes` : `${props.like} like`}</span>
        </div>
    )
}