import React from "react";
import style from './MyPosts.module.css';
import Post from "./Posts/Post";
import {ProfilePageType} from "../../../redux/state";

const MyPosts: React.FC<ProfilePageType> = (props) => {



    const postsElements = props.posts.map(post =>
        <Post id={post.id} message={post.message} likesCount={post.likesCount}/>

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
