import fon from "../../assets/images/fon.jpg";
import React from "react";


export const Profile = () => {
    return (
        <div className={'app_content'}>
            <div>
                <img src={fon} alt="" className={'fon'}/>
            </div>
            <div>ava + description</div>
            <div>
                My posts
                <div>
                    new post
                </div>
                <div>post 1</div>
                <div>post 2</div>
            </div>
        </div>
    )
}