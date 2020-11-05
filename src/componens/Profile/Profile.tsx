import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UsersProfileType} from "./ProfileContainer";

type ProfileContainerType = {
    profile: UsersProfileType
    status: string
    updateStatus:(status: string) => void
    isOwner: boolean
    savePhoto: (photo: any) => void

}

function Profile(props: ProfileContainerType) {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} savePhoto={props.savePhoto}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;