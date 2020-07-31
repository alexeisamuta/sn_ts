import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsTypes, addPostAC, profilePageType, updatePostTextAC} from "../../../redux/state";

type MyPostType = {
    profilePage:profilePageType
    dispatch:(action: ActionsTypes) => void
}


function MyPosts(props: MyPostType) {
    let postsElements = props.profilePage.posts.map(props => <Post message={props.message} likesCount={props.likesCount}/>)

    let refElement = React.createRef<HTMLTextAreaElement>();


    function addPost() {
        props.dispatch(addPostAC())

    }

    function onPostChange() {
        if (refElement.current) {
            debugger
            let text = refElement.current.value
            props.dispatch(updatePostTextAC(text))
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3> my posts </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={refElement} value={props.profilePage.newPostText}/>
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