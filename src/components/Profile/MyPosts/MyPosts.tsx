import React, {ChangeEvent} from "react";
import style from './MyPosts.module.css';
import Post from "./Posts/Post";
import {PostType} from "../../../redux/state";

type MyPostsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText: (newText: string) => void
    addPost: (m: string) => void
}

const MyPosts: React.FC<MyPostsType> = (props) => {

    const postsElements = props.posts.map(post =>
        <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount}/>
    )

    const addPost = () => {
        props.addPost(props.newPostText)
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={style.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>

        </div>)

};

export default MyPosts;
