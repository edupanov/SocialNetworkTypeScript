import React from "react";
import style from './MyPosts.module.css';
import Post from "./Posts/Post";

const MyPosts = () => {

    const posts = [
        {id: 1, message: "hi, how are you", likesCount: 8},
        {id: 2, message: "it's my first message", likesCount: 2},
    ];

    const postsElements = posts.map(post =>
        <Post message={post.message} likesCount={post.likesCount}/>

    )
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
                {postsElements}
            </div>

        </div>)

};

export default MyPosts;
