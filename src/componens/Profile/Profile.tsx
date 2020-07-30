import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {profilePageType} from "../../redux/state";


type ProfileType = {
    profilePage: profilePageType
    addPost: () => void
    updatePostText: (newText: string) => void
}

function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts profilePage={props.profilePage} addPost={props.addPost} updatePostText={props.updatePostText}/>
        </div>
    );
};

export default Profile;