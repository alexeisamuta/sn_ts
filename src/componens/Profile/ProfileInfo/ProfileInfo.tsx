import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import {UsersProfileType} from "../ProfileContainer";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import userPhoto from "../../../assets/images/icon-image.png";
import {ProfileDataForm} from "./ProfileDataForm";


type ProfileInfoType = {
    profile: UsersProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: any) => void
}

function ProfileInfo(props: ProfileInfoType) {

    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.savePhoto(e.target.files[0])
        }
    }

    // const onSubmit = (formData: any) => {
    //
    // }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                {editMode
                    ? <ProfileDataForm profile={props.profile} onSubmit={onSubmit} goToEditMode={() => setEditMode(false)}/>
                    : <ProfileData profile={props.profile}
                                   isOwner={props.isOwner}
                                   goToEditMode={() => {setEditMode(true)}}
                    />}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

const ProfileData = (props: { profile: UsersProfileType, isOwner: boolean, goToEditMode: () => void }) => {
    return <div>
        {props.isOwner && <div>
            <button onClick={props.goToEditMode}>edit</button>
        </div>}
        <div>
            <b>Full name</b>: {props.profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {props.profile.lookingForAJob ? "Yes" : "No"}
        </div>
        {props.profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me</b>: {props.profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.entries(props.profile.contacts).map((cont, i) => {
            return <Contact key={i} cont={cont}/>
        })}
        </div>
    </div>
}


const Contact = (props: ContPropsType) => {
    return <div className={s.contacts}><b>{props.cont[0]}</b>: {props.cont[1]}</div>
}

type ContPropsType = {
    cont: Array<string>
}


export default ProfileInfo;