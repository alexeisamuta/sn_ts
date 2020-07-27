import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {addPost, profilePageType, updatePostText} from "../../redux/state";



function Profile(props: profilePageType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} addPost={addPost} newPostText={props.newPostText} updatePostText={updatePostText}/>
        </div>
    );
};

export default Profile;