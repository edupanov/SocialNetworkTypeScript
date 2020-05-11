import React from "react";
import style from './MyPosts.module.css';
import Post from "./Posts/Post";

const MyPosts = () => {
    return (
        <div className={style.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className={style.posts}>
                <Post message='hi, hoe are you' likesCount='0'/>
                <Post message="it's my first message" likesCount='2'/>
            </div>

        </div>)

};

export default MyPosts;
