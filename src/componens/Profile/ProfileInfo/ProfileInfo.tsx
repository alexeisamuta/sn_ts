import React from 'react';
import s from './ProfileInfo.module.css'
import {UsersProfileType} from "../ProfileContainer";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoType = {
    profile: UsersProfileType
}


function ProfileInfo(props: ProfileInfoType) {
    if (!props.profile) {
        return <Preloader/>
    }
    debugger
    return (
        <div>
            <div>
                <img
                    src='https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div>{props.profile.fullName}</div>

                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;