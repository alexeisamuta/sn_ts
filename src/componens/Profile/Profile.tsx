import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, profilePageType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UsersProfileType} from "./ProfileContainer";

type ProfileContainerType = {
    profile: UsersProfileType
    //setUsersProfile: (profile: UsersProfileType) => void
}

type ProfileType = {
}

function Profile(props: ProfileContainerType) {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;