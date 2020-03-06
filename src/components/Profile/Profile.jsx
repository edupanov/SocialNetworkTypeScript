import React from "react";
import style from './Profile.module.css';

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src='https://www.w3schools.com/howto/img_snow_wide.jpg'/>
            </div>
            <div>
                1
            </div>
            <div>
                2
            </div>
            <div>
                3
            </div>
            <div className='posts'>
                <div className={style.item}>
                    post1
                </div>
                <div className={style.item}>
                    post2
                </div>
            </div>


        </div>

    )
}

export default Profile;