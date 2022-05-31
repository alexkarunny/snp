import React from "react";
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea/>
                <button>Add post</button>
            </div>
            <Post like={2} text={'first post'}/>
            <Post like={1} text={'hello'}/>
            <Post like={0} text={'fine'}/>
        </div>
    )
}