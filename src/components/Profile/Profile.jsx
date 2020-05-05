import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://www.w3schools.com/howto/img_snow_wide.jpg'/>
            </div>
            <div>
                1
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;
