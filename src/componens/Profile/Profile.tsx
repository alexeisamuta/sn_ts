import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, profilePageType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


/*type ProfileType = {
    profilePage: profilePageType
    dispatch:(action: ActionsTypes) => void
}*/

type ProfileType = {
}

function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;