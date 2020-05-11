import React from "react";
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>

            <div>
                <img src='https://www.w3schools.com/howto/img_snow_wide.jpg'/>
            </div>
            <div className={style.descriptionBlock}>
                1
            </div>

        </div>
    )
}

export default ProfileInfo;
