import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, profilePageType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UsersProfileType} from "./ProfileContainer";

type ProfileContainerType = {
    profile: UsersProfileType
    status: string
    updateStatus:(status: string) => void
    //setUsersProfile: (profile: UsersProfileType) => void
}

type ProfileType = {
}

function Profile(props: ProfileContainerType) {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;