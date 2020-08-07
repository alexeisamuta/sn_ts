import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {postsType} from "../../../redux/store";



type MyPostType = {
    posts: Array<postsType>
    addPost: () => void
    updatePostTextAC: (text: string) => void
    newPostText: string
}


function MyPosts(props: MyPostType) {

    let postsElements = props.posts.map(props => <Post message={props.message} likesCount={props.likesCount}/>)

    let refElement = React.createRef<HTMLTextAreaElement>();


    function addPost() {
        props.addPost()

    }

    function onPostChange() {
        if (refElement.current) {
            let text = refElement.current.value
            props.updatePostTextAC(text)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3> my posts </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={refElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
};

export default MyPosts;