import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, profilePageType} from "../../redux/state";


type ProfileType = {
    profilePage: profilePageType
    dispatch:(action: ActionsTypes) => void
}

function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts profilePage={props.profilePage} dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;